import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

const SalesRepCard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [nextOnlineMessage, setNextOnlineMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(false); // Control tooltip visibility

  useEffect(() => {
    const checkBusinessHours = () => {
      // Get current time in Pacific Time
      const now = DateTime.now().setZone("America/Los_Angeles");
      const hour = now.hour;
      const day = now.weekday; // 1 = Monday, 7 = Sunday
  
      // Online if it's Monday-Friday (1-5) AND between 7AM - 5PM PT
      const online = day >= 1 && day <= 5 && hour >= 7 && hour < 17;
      setIsOnline(online);
  
      // Set next available time message
      if (!online) {
        let nextAvailable;
        if (day >= 1 && day <= 4 && hour >= 17) {
          // If it's after 5 PM Mon-Thu → "Back tomorrow at 7 AM"
          nextAvailable = now.plus({ days: 1 }).startOf("day").set({ hour: 7 });
        } else if (day === 5 && hour >= 17) {
          // If it's after 5 PM Friday → "Back on Monday at 7 AM"
          nextAvailable = now.plus({ days: 3 }).startOf("day").set({ hour: 7 });
        } else if (day === 6 || day === 7) {
          // If it's Saturday or Sunday → "Back on Monday at 7 AM"
          nextAvailable = now.plus({ days: 8 - day }).startOf("day").set({ hour: 7 });
        } else {
          // If it's before 7 AM today → "Back today at 7 AM"
          nextAvailable = now.startOf("day").set({ hour: 7 });
        }
  
        setNextOnlineMessage(
          `Back ${nextAvailable.toFormat("EEEE 'at' h a")}`
        );
      }
    };
  
    checkBusinessHours(); // Run once on load
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute
  
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  

  return (
    <div className="relative border border-purple-600 bg-blue-800 text-white rounded-lg p-4 hover:bg-purple-800 transition duration-300 transform hover:scale-105 shadow-md">
      
      {/* Online Status Indicator with Tooltip */}
      <div
        className="absolute top-2 right-2 flex items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Status Dot */}
        <span
          className={`w-3 h-3 rounded-full border-2 border-white ${
            isOnline ? "bg-green-500 animate-pulse" : "bg-gray-400"
          }`}
        ></span>

        {/* Tooltip (Appears Only on Hover) */}
        {showTooltip && (
          <div
            className="absolute top-0 right-6 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md transition-opacity duration-300 opacity-100 scale-100"
          >
            {isOnline ? "Online" : nextOnlineMessage}
          </div>
        )}
      </div>

      <Link to="/sales-rep" className="block font-semibold">
        <svg
          className="w-8 h-8 mx-auto mb-2 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 00-8 0v4a4 4 4 0 008 0V7zM12 15v5m4 0H8"
          />
        </svg>
        Speak to a Sales Rep
      </Link>

      {/* Status Message Below (Only when Offline) */}
      {!isOnline && (
        <p className="mt-2 text-sm text-gray-300 text-center">
          {nextOnlineMessage}
        </p>
      )}
    </div>
  );
};

export default SalesRepCard;

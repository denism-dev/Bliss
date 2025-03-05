import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FloatingNotification = () => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate(); // Enables navigation to sign-up page

  const messages = [
    "🎉 Emma from Canada just joined! Will you be next?",
    "🚀 Liam from Germany is now a member! Join today!",
    "🔥 Sophia from Australia unlocked exclusive perks!",
    "⏳ 100+ members joined today! Don’t miss out!",
    "🚀 Sign up now & get 1 month free! Limited spots available!",
    "🎁 Join now & unlock exclusive early-bird perks!",
    "✅ Become a member & access premium features!",
    "💡 Join Tekobliss & power your business with cutting-edge IT solutions!",
    "🌟 Sign up now & get VIP access to new features first!",
    "👤 Your free account is waiting! Join now!",
    "📢 Limited-time offer: Get a free upgrade when you sign up today!",
    "🎊 Be part of an exclusive tech community – Join now!",
  ];

  const generateRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  useEffect(() => {
    setMessage(generateRandomMessage());

    const interval = setInterval(() => {
      setVisible(false); // Fade out
      setTimeout(() => {
        setMessage(generateRandomMessage());
        setVisible(true); // Fade in with smooth transition
      }, 2000);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 rounded-lg shadow-xl text-sm font-semibold transition-all duration-700 ease-in-out transform ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <p>{message}</p>
      <button
        onClick={() => navigate("/signup")}
        className="mt-2 bg-white text-blue-600 font-bold px-3 py-1 rounded-md hover:bg-gray-100 transition-all duration-300"
      >
        Join Now
      </button>
    </div>
  );
};

export default FloatingNotification;

import React from 'react'

import { Bell } from "lucide-react";
const NotificationIndicator = () => {
  return (
    <div className="relative inline-flex items-center">
      {/* Notification Badge */}
      <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-md">
        99+
      </span>
      
      {/* Bell Icon Container */}
      <div className="bg-blue-100 border border-blue-500 rounded-lg p-3 flex items-center justify-center shadow-sm hover:bg-blue-200 transition-all duration-200">
        <Bell className="text-blue-600 w-6 h-6" />
      </div>
    </div>
  )
}

export default NotificationIndicator

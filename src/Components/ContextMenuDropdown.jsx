import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Reply,
  ReplyAll,
  Forward,
  Send,
  ClipboardCopy,
  Archive,
  Move,
  Star,
  BellOff,
  Mail,
  MailOpen,
  Trash2,
  AlertCircle,
  FileText,
  ChevronRight,
} from "lucide-react";












const handleReply = () => {
  console.log("Replying to message...");
  // Implement logic to open reply editor
};

const handleReplyAll = () => {
  console.log("Replying to all...");
  // Implement logic for replying to all
};

const handleForward = () => {
  console.log("Forwarding message...");
  // Implement logic for forwarding message
};

const handleResend = () => {
  console.log("Resending message...");
  // Implement logic for resending the message
};

const handleCopyConversation = () => {
  navigator.clipboard.writeText("Sample conversation text...") // Replace with actual message text
    .then(() => console.log("Conversation copied!"))
    .catch((err) => console.error("Failed to copy:", err));
};

const handleArchive = () => {
  console.log("Archiving conversation...");
  // Implement API call or local storage update
};

const handleMoveToFolder = () => {
  console.log("Moving conversation to folder...");
  // Implement API call or logic to move messages to a folder
};

const handleMarkAsRead = () => {
  console.log("Marking as read...");
  // Implement API call to update message status
};

const handleMarkAsUnread = () => {
  console.log("Marking as unread...");
  // Implement API call to update message status
};

const handleMuteNotifications = () => {
  console.log("Muting notifications for this conversation...");
  // Implement mute logic (store in state or API)
};

const handleDelete = () => {
  if (window.confirm("Are you sure you want to delete this conversation?")) {
    console.log("Deleting conversation...");
    // Implement delete functionality via API call or state update
  }
};

const handleReportSpam = () => {
  console.log("Reporting conversation as spam...");
  // Implement API call to mark the conversation as spam
};

const handleExportConversation = () => {
  const text = "Sample conversation text..."; // Replace with actual conversation text
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "conversation.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};









const ContextMenuDropdown = () => {
  const handleAction = (action) => {
    console.log(`${action} action triggered`);
    alert(`${action} action executed!`);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="py-3 px-4 w-96 h-20 flex justify-center items-center text-sm font-medium rounded-lg border-2 border-dashed border-blue-600 bg-white text-blue-600 shadow-sm hover:bg-blue-100 transition-all">
        Right Click
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md divide-y divide-gray-100 focus:outline-none">
          <MenuItem icon={<Reply size={18} />} text="Reply" onClick={handleReply} />
          <MenuItem icon={<ReplyAll size={18} />} text="Reply All" onClick={() => handleAction("Reply All")} />
          <MenuItem icon={<Forward size={18} />} text="Forward" onClick={() => handleAction("Forward")} />
          <MenuItem icon={<Send size={18} />} text="Resend" onClick={() => handleAction("Resend")} />

          <div className="border-t border-gray-200 my-1"></div>

          <Menu as="div" className="relative">
            <Menu.Button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ClipboardCopy size={18} />
                More
              </div>
              <ChevronRight size={16} />
            </Menu.Button>
            <Transition>
              <Menu.Items className="absolute left-full top-0 ml-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md">
                <MenuItem icon={<ClipboardCopy size={18} />} text="Copy Conversation" onClick={() => handleAction("Copy Conversation")} />
                <MenuItem icon={<Archive size={18} />} text="Archive" onClick={() => handleAction("Archive")} />
                <MenuItem icon={<Move size={18} />} text="Move to Folder" onClick={() => handleAction("Move to Folder")} />
                <MenuItem icon={<Star size={18} />} text="Mark as Important" onClick={() => handleAction("Mark as Important")} />
                <MenuItem icon={<BellOff size={18} />} text="Mute Notifications" onClick={() => handleAction("Mute Notifications")} />
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="border-t border-gray-200 my-1"></div>

          <MenuItem icon={<Mail size={18} />} text="Mark as Unread" onClick={() => handleAction("Mark as Unread")} />
          <MenuItem icon={<MailOpen size={18} />} text="Mark as Read" onClick={() => handleAction("Mark as Read")} />
          <MenuItem icon={<Trash2 size={18} />} text="Delete" onClick={() => handleAction("Delete")} />
          <MenuItem icon={<AlertCircle size={18} />} text="Report Spam" onClick={() => handleAction("Report Spam")} />
          <MenuItem icon={<FileText size={18} />} text="Export Conversation" onClick={() => handleAction("Export Conversation")} />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const MenuItem = ({ icon, text, onClick }) => (
  <Menu.Item>
    {({ active }) => (
      <button
        onClick={onClick}
        className={`flex items-center gap-2 w-full px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
          }`}
      >
        {icon}
        {text}
      </button>
    )}
  </Menu.Item>
);

export default ContextMenuDropdown;

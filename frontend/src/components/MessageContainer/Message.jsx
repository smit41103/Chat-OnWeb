import React from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation";
import {extractTime} from "../../utils/extractTime.js";
const Message = ({ message }) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} =useConversation()
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start"; 
  const ProfilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-sky-300" : "bg-red-200" ; 

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={`${ProfilePic}`}
            alt=""
          />
        </div>
      </div>
      <div className={`chat-bubble font-serif ${bubbleBgColor} text-black font-semibold`}>{message.message}</div>
      <div className="chat-header">
        <time className="text-xs opacity-50">{formatedTime}</time>
      </div>
    </div>
  );
};

export default Message;

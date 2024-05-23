import React, { useEffect, useRef } from "react";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import UseGetMessages from "../hooks/UseGetMessages";
const Messages = () => {
  const { messages, loading } = UseGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    },50)
  }, [messages]);

  return (
    <div className=" flex-1 overflow-auto bg-sky-100 text-black">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef} >
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-black">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;

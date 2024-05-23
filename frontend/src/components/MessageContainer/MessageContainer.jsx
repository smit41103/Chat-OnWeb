import React, { useEffect } from "react";
import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
    const {selectedConversation , setSelectedConversation}= useConversation();

    useEffect(()=>{
        return  ()=> setSelectedConversation(null);
    },[setSelectedConversation]);

  return (
    <>
    <div className="h-full w-[.2vw] mx-4  bg-gray-600 rounded-lg">
        
    </div>
    <div className=" mt-6 md:min-w-[800px] flex flex-col">
        {selectedConversation ? (
            <>
                <Header />
                <Messages />
                <MessageInput />
            </>
        ) : (
            <NoChatSelected />
        )}
    </div>
    </>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white w-full h-full">
            <h1 className="text-3xl font-bold ">Welcome Ram!!!!</h1>
            <h1 className="text-3xl font-bold ">Start Conversation here!!</h1>
        </div>
    );
};

import React from "react";
import useConversation from "../../zustand/useConversation";

const Header = () => {
  const {selectedConversation , setSelectedConversation}= useConversation();
    return (
    <div className="w-full h-[6vh] bg-opacity-45 bg-slate-700 py-3">
      <span className="text-slate-500 ml-4 ">To:</span><span className="text-red-200 ml-4 ">{selectedConversation.username}</span>
    </div>

  );
};

export default Header;

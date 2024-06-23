import React, { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import UseSendMessages from "../../hooks/UseSendMessages";

const MessageInput = () => {
  const [message,setMessage]=useState("");
  const {loading,sendMessage} = UseSendMessages();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");

  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="w-full bg-zinc-600 h-[6vh] mb-4 rounded-lg relative">
        <input
          type="text"
          placeholder="Send message"
          className="input input-bordered input-primary w-full "
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{loading ? <div className='loading loading-spinner'></div> : <CiLocationArrow1 className="absolute top-3 end-2 w-[3vw] h-[3vh]" />}
				</button>
        
      </div>
    </form>
  );
};

export default MessageInput;

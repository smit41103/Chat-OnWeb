import React from "react";
import UseConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";


const Conversation = ({conversation,lastidx}) => {
  const {selectedConversation , setSelectedConversation} = UseConversation();
  const isselected = selectedConversation?._id  ===  conversation._id ;

const {onlineUsers} = useSocketContext();
const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div onClick={()=>setSelectedConversation(conversation)} className={`ml-10 flex bg-sky-200 text-black gap-2 items-center ${!isselected? "" : "bg-sky-700"} hover:bg-sky-700 rounded-lg  p-2 my-1  cursor-pointer `}>
      <div className="">
        <div className={'avatar ${isOnline ? "online" : "" }'}> 
          <div className="w-[4vw] h-[8vh] rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <h1 className="text-lg font-medium ml-5 mt-2">{conversation.username}</h1>
        <span>{conversation.gender === "female" ? "👧" : "👦" }</span>
      </div>
    </div>
  );
};

export default Conversation;






// //starter code for this snipper
// // import React from "react";

// // const Conversation = () => {
// //   return (
// //     <div className="ml-10 flex bg-zinc-700 gap-2 items-center hover:bg-sky-500 rounded-lg  p-2 my-1 cursor-pointer">
// //       <div className="">
// //         <div className="avatar online">
// //           <div className="w-[4vw] h-[8vh] rounded-full">
// //             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
// //           </div>
// //         </div>
// //         {/* <div className="avatar offline">
// //           <div className="w-12 h-12 rounded-full">
// //             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
// //           </div>
// //         </div> */}
// //       </div>
// //       <div className="flex justify-between w-full">
// //         <h1 className="text-lg font-medium ml-5 mt-2">Hello there</h1>
// //         <span></span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Conversation;

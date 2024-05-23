import React from "react";
import Conversation from "./Conversation";
import UseGetConversation from "../hooks/UseGetConversation";

const Conversations = () => {
  const { loading, conversations } = UseGetConversation();
  console.log(conversations);
  return (
    <div
      className="  py-2 flex flex-col my-auto"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      {conversations.map((conversation,idx) => (
        <Conversation key={conversation._id} conversation={conversation} lastidx={idx === conversations.length - 1} />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;

//STARTER CODE FOR THIS SNIPPET
// import React from 'react'
// import Conversation from './Conversation'
// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col my-auto' style={{ maxHeight: '400px', overflowY: 'auto' }}>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />

//     </div>
//   )
// }

// export default Conversations

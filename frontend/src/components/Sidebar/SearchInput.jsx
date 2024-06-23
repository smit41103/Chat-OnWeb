import React, { useState } from "react";
import useConversation from "../../zustand/useConversation";
import UseGetConversation from "../../hooks/UseGetConversation";
import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = UseGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      toast.error("Enter some input...")
      return;
    }
    if (search.length < 3) {
      toast.error("enter character more than 3");
    }

    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    console.log(conversation);
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("no search found");
    }
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <div className="flex items-center justify-center">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          ></svg>
          <button><IoMdSearch /></button>
        </label>
      </div>
    </form>
  );
};

export default SearchInput;

//STARTER CODE FOR THIS FILE
// import React from "react";

// const SearchInput = () => {
//   return (

//       <div className="flex items-center justify-center">
//         <label className="input input-bordered flex items-center gap-2">
//           <input type="text" className="grow" placeholder="Search" />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </label>
//       </div>
//   );
// };

// export default SearchInput;

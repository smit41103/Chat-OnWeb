import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseLogin from "../../hooks/UseLogin";
const Login = () => {
  const [inputs,setInputs]=useState({
    username:"",
    password:""
  })
const {data,login}=UseLogin();
const handleSubmit = async (e) => {
  e.preventDefault();
  await login(inputs)
  
};



  return (
    <div className="flex items-center justify-center flex-col min-w-96 mx-auto rounded-lg">
      <div className="bg-zinc-600 p-5 w-full text-center text-xl rounded-lg">
        <h1 className="">Chat-App Login</h1>
      </div>
      <form action="" className="w-full" onSubmit={handleSubmit}>

      <div className="w-full bg-[161618] flex flex-col gap-3 mt-3">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Username" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" className="grow" placeholder="Password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
        </label>
      </div>

      <Link
        to="/signup"
        className="font-semibold text-blue-800 px-2 hover:underline hover:text-red-600 underline"
      >
        {"don't"} have an account ?
      </Link>
      <div className="w-full ">
        <button  type="submit" className="btn btn-block btn-sm mt-2 text-lg bg-white text-black h-full hover:text-white">
          Login
        </button>
      </div>
      </form>
    </div>
  );
};

export default Login;

//STARTER CODE FOR THIS FILE
// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex items-center justify-center flex-col min-w-96 mx-auto rounded-lg">
//       <div className="bg-zinc-600 p-5 w-full text-center text-xl rounded-lg">
//         <h1 className="">Chat-App Login</h1>
//       </div>
//       <div className="w-full bg-[161618] flex flex-col gap-3 mt-3">
//         <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-4 opacity-70"
//           >
//             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//           </svg>
//           <input type="text" className="grow" placeholder="Username" />
//         </label>
//         <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <input type="password" className="grow" value="password" />
//         </label>

//       </div>
//       <a href="#" className="font-serif text-sm underline hover:underline hover:text-blue-600 mt-2 inline-block text-red-400  text-center" >
//             {"don't"} have an account ?
//         </a>
//         <div className="w-full ">
//             <button className="btn btn-block btn-sm mt-2 text-lg bg-white text-black h-full hover:text-white">
//                 Login
//             </button>
//         </div>
//     </div>
//   );
// };

// export default Login;

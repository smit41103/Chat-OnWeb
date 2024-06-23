import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import UseSignup from "../../hooks/UseSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading,signup}=UseSignup();

  const handleCheckbox = (gender)=>{
    setInputs({...inputs,gender})
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs)
  };

  return (
    <div className="flex justify-center items-center flex-col gap-2  min-w-96 mx-auto rounded-lg">
      <div className="w-full text-center text-xl rounded-lg bg-slate-600 p-4 bg-opacity-60">
        <h1>Signup Here</h1>
      </div>
      <form action="" className="w-full" onSubmit={handleSubmit}>
        <div className="w-full mt-3 bg-[161618] flex flex-col gap-1">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Full name"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
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
            <input
              type="password"
              className="grow"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
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
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </label>
        </div>
        <GenderCheckbox onCheckboxChange={handleCheckbox} selectedGender = {inputs.gender} />

        <Link
          to="/login"
          className="w-full font-semibold text-blue-800 px-2 hover:underline hover:text-red-600 underline"
        >
          already have an account?
        </Link>
        <button
          type="submit"
          className="btn btn-block btn-sm mt-2 text-lg bg-white text-black h-full hover:text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

//STARTER CODE FOR THIS FILE
// import React from "react";

// const Signup = () => {
//   return (
//     <div className="flex justify-center items-center flex-col gap-2  min-w-96 mx-auto rounded-lg">
//       <div className="w-full text-center text-xl rounded-lg bg-slate-600 p-4 bg-opacity-60">
//         <h1>Signup Here</h1>
//       </div>
//       <div className="w-full mt-3 bg-[161618] flex flex-col gap-4">
//       <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-4 opacity-70"
//           >
//             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//           </svg>
//           <input type="text" className="grow" placeholder="Full name" />
//         </label>
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
//           <input type="password" className="grow" placeholder="Password" />
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
//           <input type="password" className="grow" placeholder="Confirm Password" />
//         </label>

//         <div className="form-control">
//           <label className="cursor-pointer flex gap-10">
//             <span className="label-text text-lg">Gender</span>
//             <div className="radio radio-primary flex gap-2">
//               <input
//                 type="radio"
//                 name="gender"
//                 className="radio"
//                 value="male"
//               />
//               <span className="label-text">Male</span>
//               <input
//                 type="radio"
//                 name="gender"
//                 className="radio"
//                 value="female"
//               />
//               <span className="label-text">Female</span>
//             </div>
//           </label>
//         </div>
//         <a href="#" className="text-red-200 px-2 hover:underline hover:text-blue-800 underline">
//             already have an account?
//         </a>
//         <button className="btn btn-block btn-sm mt-2 text-lg bg-white text-black h-full hover:text-white">
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Signup;

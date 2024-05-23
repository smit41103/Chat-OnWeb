import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import UseLogout from '../hooks/UseLogout';



const Logout = () => {
  const {logout,loading}=UseLogout();

  return (
    <div className='mt-5 flex justify-center w-full items-center'>

      {!loading ? (<button className="btn btn-outline btn-error" onClick={logout}>{ <RiLogoutBoxLine />}Logout</button>):(<span className='loading loading-spinner'></span>)}
      


    </div>
  )
}

export default Logout

//starter code for this snipper
// import React from 'react'

// const Logout = () => {
//   return (
//     <div className='mt-5 flex justify-center w-full items-center'>
//       <button className="btn btn-outline btn-error">Logout</button>


//     </div>
//   )
// }

// export default Logout

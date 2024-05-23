import React from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import Logout from './Logout';
const Sidebar = () => {
  return (
    <div className='w-1/3 mt-4 '>
        <SearchInput />
        <div className='divider px-3 '></div>
        <Conversations />
        <Logout />
      
    </div>
  )
}

export default Sidebar


// //starter code for this snipper
// // import React from 'react'
// // import SearchInput from './SearchInput';
// // import Conversations from './Conversations';
// // import Logout from './Logout';
// // const Sidebar = () => {
// //   return (
// //     <div className='w-1/3 mt-8'>
// //         <SearchInput />
// //         <div className='divider px-3 '></div>
// //         <Conversations />
// //         <Logout />
      
// //     </div>
// //   )
// // }

// // export default Sidebar

import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <>
    <div className=' absolute z-10 w-full p-20 flex items-center justify-end'>
        <button className=' fixed bg-black text-white px-8 py-2 rounded-full border-2 z-10'>Hire Me</button>
        <i className="ri-more-2-line mr-[-35px] text-white text-2xl  relative z-10"></i>
    </div>
    </>
  )
}

export default Header

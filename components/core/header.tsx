import React from 'react'

function Header() {
  return (
    <div className=' px-14 py-2 flex justify-between items-center'>
        <div className=' font-[Platypi] text-[30px] font-semibold text-white'>Wellness <span className=' text-[#67bc29]'>Z</span> </div>
        <div className=' text-white flex gap-8 text-sm font-light'>
            <p className=' cursor-pointer'>Plans</p>
            <p className=' cursor-pointer'>Location</p>
            <p className=' cursor-pointer'>News & Blogs</p>
            <p className=' cursor-pointer'>About us</p>
            <p className=' cursor-pointer'>Contact us</p>
        </div>
    </div>
  )
}

export default Header

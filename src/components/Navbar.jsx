// import React from 'react'
import Logo from '../assets/Kelompok2.png'

const Navbar = () => {
  return (
<div>
<nav className='flex justify-between px-10 py-6 backdrop-blur-md bg-white bg-opacity-15'>
    <div>
      <img src={Logo} alt="Logo Kelompok 2 " className='scale-75'/>
    </div>
        <div>
           <ul className='flex gap-4 px-4'>
            <li className='font-[Inter] font-semibold text-xl text-[#160041]'>Home</li>
            <li className='font-[Inter] font-semibold text-xl text-[#160041]'>About Us</li>
            <li  className='font-[Inter] font-semibold text-xl text-[#160041]'>What we do</li>
          </ul>
        </div>
  </nav> 
  <hr className='w-11/12 border-slate-600 mx-auto opacity-30'/>
</div>      

  )
}

export default Navbar
// import React from 'react'
const Navbar = () => {
  return (
    <div>
      <nav className='fixed w-full flex justify-between items-center px-10 py-4 backdrop-blur-sm bg-white bg-opacity-15 z-10 top-0'>
        <div>
          <img src="logo.png" alt="Logo Kelompok 2 " className='w-20'/>
        </div>
            <div>
              <ul className='flex gap-8 px-4'>
                <li><a href ="#home" className='font-semibold text-[#160041]'>Home</a></li>
                <li><a href ="#aboutus" className='font-semibold text-[#160041]'>About Us</a></li>
                <li><a href ="#whatwedo" className='font-semibold text-[#160041]'>What we do</a></li>
              </ul>
            </div>
      </nav> 
      <hr className='w-11/12 border-slate-600 mx-auto opacity-30'/>
    </div>      
  )
}
export default Navbar
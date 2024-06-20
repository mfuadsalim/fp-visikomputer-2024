import React from 'react'

const PlayButton = () => {
  return (
    <div className='flex justify-center'>
    <a href="#webcam">
    <button className='flex items-center bg-[#703EDB] py-3 px-6 rounded-full shadow-md'>
      <div className='font[Inter] font-bold text-white'>Let's Play</div>
      <img src="play.png" alt="play-icon" className='ml-2 scale-75'/>
    </button>
    </a>    
    </div>
  )
}

export default PlayButton
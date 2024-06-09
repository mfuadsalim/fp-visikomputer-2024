import React from 'react'
import Play from "../assets/play.png"

const PlayButton = () => {
  return (
    <div className='flex justify-center'>
    <a href="#webcam">
    <button className='flex items-center bg-[#703EDB] py-3 px-6 rounded-full shadow-md'>
      <div className='font[Inter] font-bold text-white'>Let's Play</div>
      <img src={Play} alt="play-icon" className='ml-2 scale-75'/>
    </button>
    </a>    
    </div>
  )
}

export default PlayButton
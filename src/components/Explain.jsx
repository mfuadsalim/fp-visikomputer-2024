import React from 'react'
import Mediapipe from "../assets/mediapipe.png"
import Math from "../assets/math.png"

const Explain = () => {
  return (
    <div className='w-1/2 mx-auto'>
        <div className='flex items-center gap-4'>
            <img src={Mediapipe} alt="mediapipe-logo"/>
            <p className='text-[231149] font-[Inter] font-medium italic'>Platform kami membantu anak-anak belajar matematika sederhana dengan gerakan tangan melalui MediaPipe. Pembelajaran yang menyenangkan, inklusif, dan mudah dipahami.</p>
        </div>
        <br />
        <div className='flex items-center gap-4'>
            <img src={Math} alt="math-logo"/>
            <p className='text-[231149] font-[Inter] font-medium italic'>Framework dari Google untuk aplikasi visi komputer real-time, seperti pengenalan gerakan tangan dan wajah, yang efisien dan dapat digunakan di berbagai platform.</p>
        </div>
    </div>
  )
}

export default Explain
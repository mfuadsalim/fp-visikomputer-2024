import React from 'react'
import Arief from "../assets/Arief.png"
import Fuad from "../assets/Fuad.png"

const Profile = () => {
  return (
    <div className='flex justify-center gap-4 items-center px-10'>
        <img src={Arief} alt="Foto Arief" />
        <img src={Fuad} alt="Foto Fuad" />
    </div>
  )
}

export default Profile
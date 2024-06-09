import React from 'react'

const Card = ({image, title, content}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 m-4 w-1/3'>
        <div className='mb-4'>
            {image}
        </div>
        <h2 className='font-[Caprasimo] text-lg text-[#160041] mb-2'>{title}</h2>
        <div className='font-[Inter] text-[#160041]'>
            {content}
        </div>
    </div>
  )
}

export default Card
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[100%] aspect-video pt-34 px-12  absolute z-70 bg-inherit text-amber-50 bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-lg w-1/3 '>{overview}</p>
      <div className='flex flex-wrap text-black'>
        <button className='text-lg bg-gray-300 px-8 py-2 flex flex-wrap items-center cursor-pointer rounded-md hover:opacity-75'> 
            <FaPlay  className='mx-1' /> Play</button>
        <button
        className='text-lg bg-gray-300 px-4 py-2 flex flex-wrap items-center cursor-pointer rounded-md mx-2 hover:opacity-75'>
            <IoInformationCircle className='mx-1' />
More info</button>

      </div>
    </div>
  )
}

export default VideoTitle

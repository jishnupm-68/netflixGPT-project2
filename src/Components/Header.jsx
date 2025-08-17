import React from 'react'
import { LOGO } from '../utils/constant'

const Header = () => {
  return (
    <div  className='absolute px-5 py-3 bg-gradient-to-b from-black z-10'>
      <img
      className='w-26'
      src ={LOGO}
      alt ="logo"
       />
    </div>
  )
}

export default Header

import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const PartitionPage = () => {

  const gsapRef = useRef()

  const handleMouseMove = (e) => {
    gsap.to(gsapRef.current, {
      x: e.clientX - 80,
      y: e.clientY - 80,
      duration: 0.3,
      scale: 1.5
    })
  }

  return (
    <>
      <div onMouseMove={handleMouseMove} className='bg-red-400'>
        {/* Moving Cursor */}
        <div ref={gsapRef} className='h-40 w-40 bg-pink-500 rounded-full absolute top-0 left-0 -z-10'></div>

        <NavLink className=' bg-yellow-300 cursor-default block uppercase text-center overflow-hidden text-[#62AB37] text-[15rem]! leading-45!' to="/normalversion">
          <p>Normal Version</p>
        </NavLink>

        <NavLink className='bg-yellow-300 cursor-default block uppercase text-center overflow-hidden text-[#62AB37] text-[15rem]! leading-45!' to="/advancedversion">
          <p>Advanced Version</p>
        </NavLink>
      </div>

    </>
  )
}

export default PartitionPage
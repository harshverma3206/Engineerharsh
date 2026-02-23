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
      scale:1.5
    })
  }

    return (
      <>
        <div
          onMouseMove={handleMouseMove}
          className='h-screen w-screen flex mx-auto items-center justify-center gap-30 relative overflow-hidden'
        >
          <div
            ref={gsapRef}
            className='h-40 w-40 bg-[#ffab35] rounded-full absolute top-0 left-0 -z-10'
          ></div>

          <NavLink
            className='cursor-default opacity-70 w-112.5 h-112.5 hover: rounded-full block uppercase text-center overflow-hidden whitespace-nowrap text-[#080357]'
            to="/normalversion"
          >
           
            <p>Normal Normal</p>
            <p>Normal Normal</p>
            <p>Normal Normal</p>
            <p>Normal Normal</p>
            <p>Normal Normal</p>
            <p>Normal Normal</p>
          </NavLink>

          <NavLink
            className='cursor-default opacity-70 w-112.5 h-112.5 block uppercase text-center whitespace-nowrap rounded-full overflow-hidden'
            to="/advancedversion"
          >
            <p>Advanced Advanced</p>
            <p>Advanced Advanced</p>
            <p>Advanced Advanced</p>
            <p>Advanced Advanced</p>
            <p>Advanced Advanced</p>
            <p>Advanced Advanced</p>
          </NavLink>
        </div>

      </>
    )
  }

  export default PartitionPage
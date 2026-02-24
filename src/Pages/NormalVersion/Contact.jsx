import React from 'react'

const Contact = () => {
  return (
    <div className='bg-teal-300 relative h-[90vh] flex overflow-hidden'>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-40'>contact me for your<br />website</h1>

      {/* Big Boxes */}
      <div className='bg-red-200 h-70 w-70 shrink-0 m-2! absolute left-55 top-25'>
        <img className='h-40' src="./Instagram.svg" alt="" />
      </div>
      <div className='bg-red-300 h-70 w-70 shrink-0 m-2! absolute left-1/2 top-10 -translate-x-1/2'>
        <img className='h-40' src="./Linkedin.svg" alt="" />
      </div>
      <div className='bg-red-400 h-70 w-70 shrink-0 m-2! absolute right-55 top-25'>
        <img className='h-40' src="./github.svg" alt="" />
      </div>
      <div className='bg-red-500 h-70 w-70 shrink-0 m-2! absolute left-10 bottom-10'>
        <img className='h-40' src="./Whatsapp.svg" alt="" />
      </div>
      <div className='bg-red-600 h-70 w-70 shrink-0 m-2! absolute top-1/2 right-10'>
        <img className='h-40' src="./Mail.svg" alt="" />
      </div>
      {/* Big Boxes */}
      <div className='bg-red-200 h-27.5 w-27.5 shrink-0 m-2! absolute bottom-45 right-120'>
        <img className='h-15' src="./Instagram.svg" alt="" />
      </div>
      <div className='bg-red-300 h-27.5 w-27.5 shrink-0 m-2! absolute bottom-80 left-150'>
        <img className='h-15' src="./Whatsapp.svg" alt="" />
      </div>
      <div className='bg-red-400 h-27.5 w-27.5 shrink-0 m-2! absolute bottom-40 left-250'>
        <img className='h-15' src="./github.svg" alt="" />
      </div>
      <div className='bg-red-500 h-27.5 w-27.5 shrink-0 m-2! absolute top-75 right-145'>
        <img className='h-15' src="./Mail.svg" alt="" />
      </div>
      <div className='bg-red-600 h-27.5 w-27.5 shrink-0 m-2! absolute top-45 left-145'>
        <img className='h-15' src="./Linkedin.svg" alt="" />
      </div>
    </div>
  )
}

export default Contact

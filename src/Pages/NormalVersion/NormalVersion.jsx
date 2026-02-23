
import React, { useRef } from 'react'

//icons
import { HiMiniHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import { div } from 'framer-motion/client';

// images


const NormalVersion = () => {

  const homeref = useRef();
  const aboutref = useRef();
  const projectsref = useRef();
  const skillsref = useRef();
  const contactref = useRef();

  const section = [
    { id: "home", ref: homeref, icon: <HiMiniHome /> },
    { id: "about", ref: aboutref, icon: <FaUser /> },
    { id: "projects", ref: projectsref, icon: <FaFileInvoice /> },
    { id: "skills", ref: skillsref, icon: <GiSkills /> },
    { id: "contact", ref: contactref, icon: <BiSolidMessage /> }
  ]

  const projectdata = [
    {
      img: "/CalcodeskPage.jpg",
      name: "Calcodesk",
      description: "Calcodesk is a service- based company located in Noida, delivering complete digital solutions for modern businesses.We specialize in web development, app development, digital marketing, social media management, and video editing.Our mission is to help brands grow with innovative strategies and impactful digital experiences."
    },
    {
      img: "/CalcodeskPage.jpg",
      name: "Calcodesk",
      description: "Calcodesk is a service- based company located in Noida, delivering complete digital solutions for modern businesses.We specialize in web development, app development, digital marketing, social media management, and video editing.Our mission is to help brands grow with innovative strategies and impactful digital experiences."
    },
    {
      img: "/CalcodeskPage.jpg",
      name: "Calcodesk",
      description: "Calcodesk is a service- based company located in Noida, delivering complete digital solutions for modern businesses.We specialize in web development, app development, digital marketing, social media management, and video editing.Our mission is to help brands grow with innovative strategies and impactful digital experiences."
    }
  ]

  const skilldata = [
    { img: "/html.svg" },
    { img: "/Css.svg" },
    { img: "/javascript.svg" },
    { img: "/framer-motion.svg" },
    { img: "/git.svg" },
    { img: "/github.svg" },
    { img: "/gsap-greensock.svg" },
    { img: "/react-native.svg" },
    { img: "/tailwindcss.svg" },
    { img: "/threejs.svg" },
    { img: "/typescript.svg" },
    { img: "/vercel.svg" }
  ]


  return (
    <div className='p-10! relative'>
      <nav className='flex flex-col p-7! gap-5 w-fit fixed left-0 top-1/2 -translate-y-1/2 z-50'>
        {section.map((sec) => (
          <button
            className='bg-gray-300 text-3xl p-4! rounded-2xl'
            key={sec.id}>
            {sec.icon}
          </button>
        ))}
      </nav>

      {/* SectionOne */}
      <section
        ref={homeref}
        className='p-10! flex flex-col gap-10 items-center'>
        <h1>building fast<br />interactive web<br />applications</h1>
        <img src="" alt="" />
        <button className='flex items-center justify-center gap-1.5 uppercase font-bold bg-[#62AB37] py-4! px-10! rounded-2xl text-[15px] text-amber-100'>Book A Call <IoCall size={20} /></button>
      </section>

      {/* SectionTwo */}
      <section
        ref={aboutref}
        className='flex justify-center items-end gap-10 w-fit m-auto!'>

        <div className='flex relative'>
          <h3 className='text-9xl z-20 absolute bottom-20 -left-44'>harsh<br />verma</h3>
          <img className='size-[40rem]' src="/ArpitPic.jpg" alt="Hyeeeeeeeeeeeeeeeeeeeeeeeeeee" />
        </div>

        <div className='w-[600px] flex flex-col items-end justify-between h-[400px] px-10!'>
          <div>
            <h4 className='uppercase'>Frontend Developer</h4>
            <h5>Frontend Developer with experience in React and modern web technologies. Passionate about creating clean, responsive designs and smooth animations using tools like GSAP and Lenis.</h5>
          </div>

          <div className='flex flex-col items-end pb-5!'>
            <h6>+91 9795357073</h6>
            <h6>harshverma306@gmail.com</h6>
          </div>
        </div>
      </section>

      {/* SectionThree */}
      <section
        ref={projectsref}
        className='py-19! bg-pink-400'><h1>help founders to convert<br />ideas into digital<br />experience</h1>
        <div className='perspective-[850px] h-[1000px] relative bg-amber-400'>
          {projectdata.map((data) => (
            <div className='bg-green-300 w-[80%] flex flex-col items-center p-10! rounded-3xl gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <img className='rounded-4xl h-[40rem]' src={data.img} alt="Project01" />
              <h4 className='uppercase! text-center! text-5xl! font-bold!'>{data.name}</h4>
              <h6 className='w-[1000px] text-center'>{data.description}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* SectionFour */}
      <section
        ref={skillsref}
        className='bg-green-500 overflow-hidden'><h1>skills that i own</h1>
        <div className='flex gap-12 mt-12!'>
          <div className='flex gap-12'>
            {skilldata.map((val) => (
              <div className='bg-pink-400 rounded-4xl h-[130px] w-[130px] flex items-center justify-center p-8! shrink-0'>
                <img className='' src={val.img} alt="" />
              </div>
            ))}
          </div>

          <div className='flex gap-12'>
            {skilldata.map((val) => (
              <div className='bg-pink-400 rounded-4xl h-[130px] w-[130px] flex items-center justify-center p-8! shrink-0'>
                <img className='' src={val.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SectionFive */}
      <section ref={contactref}
        className='bg-pink-500'><h2>Contact</h2>
      </section>
    </div>
  )
}

export default NormalVersion
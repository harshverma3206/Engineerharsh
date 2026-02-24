import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skills = () => {

    const skillsref = useRef()

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

    //Animations
    const moverefOne = useRef();
    const moverefTwo = useRef();
    const animation = useRef();

    useGSAP(() => {
        animation.current = gsap.to(
            [moverefOne.current, moverefTwo.current],
            {
                x: -2135,
                duration: 10,
                repeat: -1,
                ease: "linear",
            }
        );
    }, []);

    const { contextSafe } = useGSAP();

    const handleMouseEnter = contextSafe(() => {
        animation.current?.pause();
    });

    const handleMouseLeave = contextSafe(() => {
        animation.current?.resume();
    });

    return (
        <section ref={skillsref} className='overflow-hidden py-12! bg-teal-300'><h1>skills that i own</h1>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='flex gap-12 mt-12! cursor-pointer py-12!'>

                <div ref={moverefOne} className='flex gap-12'>
                    {skilldata.map((val, index) => (
                        <div key={index} className='rounded-4xl h-32.5 w-32.5 flex items-center justify-center p-8! shrink-0 bg-gray-200'>
                            <img src={val.img} alt="" />
                        </div>
                    ))}
                </div>

                <div ref={moverefTwo} className='flex gap-12'>
                    {skilldata.map((val, index) => (
                        <div key={index} className='rounded-4xl h-32.5 w-32.5 flex items-center justify-center p-8! shrink-0 bg-gray-200'>
                            <img src={val.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

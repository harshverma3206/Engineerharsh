
import { useRef } from 'react'
const About = () => {

    const aboutref = useRef()

    return (
        <section
            ref={aboutref}
            className='flex justify-center items-end gap-10 w-fit m-auto!'>

            <div className='flex bg-gradient-to-b from-[#FFF] to-[#62AB37] rounded-4xl items-end'>
                <div className='flex relative'>
                    <h3 className='text-9xl z-20 absolute bottom-20 -left-44'>harsh<br />verma</h3>
                    <img className='size-160' src="/ArpitPic.jpg" alt="Hyeeeeeeeeeeeeeeeeeeeeeeeeeee" />
                </div>

                <div className='w-150 flex flex-col items-end justify-between h-100 px-10!'>
                    <div>
                        <h4 className='uppercase'>Frontend Developer</h4>
                        <h5>Frontend Developer with experience in React and modern web technologies. Passionate about creating clean, responsive designs and smooth animations using tools like GSAP and Lenis.</h5>
                    </div>

                    <div className='flex flex-col items-end pb-5!'>
                        <h6>+91 9795357073</h6>
                        <h6>harshverma306@gmail.com</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

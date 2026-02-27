import { forwardRef } from "react";
import { IoCall } from "react-icons/io5";

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} className=" flex flex-col items-center ">
            <h1 className="">
                building fast <br />
                interactive web <br />
                applications
            </h1>

            <button
                className="mt-5! sm:mt-13! cursor-pointer flex items-center gap-4 justify-center px-[1.4em]! py-[0.9em]! sm:min-w-55.5 min-h-11 text-[1rem] font-medium text-white rounded-2xl border-none transition-all duration-600 hover:bg-top-right focus:outline-none motion-reduce:transition-none
bg-[linear-gradient(325deg,hsl(24_95%_45%)_0%,hsl(24_95%_65%)_55%,hsl(24_95%_45%)_90%)]
bg-size-[180%_auto]
hover:shadow-[0px_0px_20px_rgba(249,115,22,0.5),0px_5px_5px_-1px_rgba(200,80,10,0.25),inset_4px_4px_8px_rgba(255,170,100,0.5),inset_-4px_-4px_8px_rgba(150,50,0,0.35)]
                           sm:scale-[1] scale-[.8]
                ">
                <IoCall className="text-lg md:text-base" />
                <span className="md:inline uppercase font-semibold text-sm lg:text-base">
                    Book A Call
                </span>
            </button>

            <div className="lg:flex bg-orange-600 sm:mt-5!">
                <div className="flex flex-col items-center relative ">
                    <img
                        className=" w-90! md:w-100! lg:w-120!"
                        src="./ArpitPic.jpg"
                        alt="" />

                    <h3 className="text-6xl md:text-8xl absolute -bottom-8 md:bottom-10 md:-left-12 md:w-50! justify-end leading-10! md:leading-17!">harsh verma</h3>
                </div>
                <div className=" p-6! pt-20! sm:w-137.5! md:w-115! flex flex-col items-end justify-end text-orange-50">
                    <h4 className="">Frontend Engineer</h4>
                    <h5 className="">Frontend Developer with experience in React and modern web technologies. Passionate about creating clean, responsive designs and smooth animations using tools like GSAP and Lenis.</h5>
                    <div className="mt-20! lg:mt-50!">
                        <h5>+91 9795357073</h5>
                        <h5>harshverma3206@gmail.com</h5>
                    </div>
                </div>

            </div>


        </section>
    );
});

export default About;
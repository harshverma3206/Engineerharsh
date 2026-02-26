import { forwardRef } from "react";
import { IoCall } from "react-icons/io5";

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="min-h-screen flex flex-col justify-center">

            {/* Hero Section */}
            <div className="p-12 flex flex-col gap-10 items-center">
                <h1 className="text-5xl font-bold text-center">
                    building fast <br />
                    interactive web <br />
                    applications
                </h1>

                <button className="mt-3.5 flex items-center justify-center gap-1.5 uppercase font-bold bg-[#62AB37] py-4 px-10 rounded-2xl text-[15px] text-amber-100">
                    Book A Call <IoCall size={20} />
                </button>
            </div>

            {/* Profile Section */}
            <div className="flex justify-center items-end gap-10 w-fit mx-auto">
                <div className="flex bg-linear-to-b from-[#FFF] to-[#62AB37] rounded-4xl items-end p-5">

                    <div className="flex relative">
                        <h3 className="text-7xl z-20 absolute bottom-20 -left-32 font-bold">
                            harsh <br />
                            <span className="absolute left-10">verma</span>
                        </h3>

                        <img
                            className="w-125"
                            src="/ArpitPic.jpg"
                            alt="Harsh Verma"
                        />
                    </div>

                    <div className="w-150 flex flex-col items-end justify-between h-100 px-10">
                        <div>
                            <h4 className="uppercase font-semibold">
                                Frontend Developer
                            </h4>

                            <h5 className="mt-3 text-right">
                                Frontend Developer with experience in React and modern web
                                technologies. Passionate about creating clean, responsive
                                designs and smooth animations using tools like GSAP and Lenis.
                            </h5>
                        </div>

                        <div className="flex flex-col items-end pb-5">
                            <h6>+91 9795357073</h6>
                            <h6>harshverma306@gmail.com</h6>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
});

export default About;
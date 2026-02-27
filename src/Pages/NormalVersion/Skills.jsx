import { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skills = forwardRef((props, ref) => {

    const skillData = [
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
    ];

    const containerRef = useRef();
    const moverefOne = useRef();
    const moverefTwo = useRef();
    const animation = useRef();

    // GSAP Animation
    useGSAP(() => {
        animation.current = gsap.to(
            [moverefOne.current, moverefTwo.current],
            {
                xPercent: -100,
                duration: 15,
                repeat: -1,
                ease: "linear",
            }
        );
    }, { scope: containerRef });

    const handleMouseEnter = () => {
        animation.current?.pause();
    };

    const handleMouseLeave = () => {
        animation.current?.resume();
    };

    return (
        <section ref={ref} className="overflow-hidden py-12!">

            <h1 className="text-5xl text-center font-bold">
                skills that I own
            </h1>

            <div
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex gap-5 mt-12 cursor-pointer py-12 w-[85%] mx-auto overflow-hidden"
            >

                {/* First Row */}
                <div ref={moverefOne} className="flex gap-5">
                    {skillData.map((val, index) => (
                        <div
                            key={index}
                            className="rounded-4xl h-32 w-32 flex items-center justify-center p-8 shrink-0 bg-gray-200"
                        >
                            <img src={val.img} alt="skill" />
                        </div>
                    ))}
                </div>

                {/* Duplicate Row (Infinite Effect) */}
                <div ref={moverefTwo} className="flex gap-5">
                    {skillData.map((val, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="rounded-4xl h-32 w-32 flex items-center justify-center p-8 shrink-0 bg-gray-200"
                        >
                            <img src={val.img} alt="skill" />
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
});

export default Skills;
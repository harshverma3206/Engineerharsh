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
                xPercent: -100.01,
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

    useGSAP(() => {
        var tl = gsap.timeline()
        gsap.utils.toArray('.skill').forEach((skill) => {

            tl.from(skill, {
                y: 180,
                opacity: 0,
                stagger: .5,
                scrollTrigger: {
                    trigger: skill,
                    start: "top 60%",
                }

            })

            skill.addEventListener("mouseenter", () => {
                gsap.to(skill, {
                    scale: 1.1,
                    y: -35,
                    duration: 0.4,
                    ease: "power2.out"
                })
            })
            skill.addEventListener("mouseleave", () => {
                gsap.to(skill, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });
        })
    })

    return (
        <section ref={ref} className="overflow-hidden py-12!">

            <h1 className="">
                skills that I own
            </h1>

            <div
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex gap-7 mt-8! cursor-pointer py-12 w-[83%] mx-auto! overflow-hidden"
            >

                {/* First Row */}
                <div ref={moverefOne} className="flex gap-7 py-12!">
                    {skillData.map((val, index) => (
                        <div
                            key={index}
                            className="skill rounded-4xl h-[15vw] w-[15vw] md:h-24 md:w-24 lg:w-32 lg:h-32 p-3! md:p-6! flex items-center justify-center shrink-0 overflow-hidden bg-gray-200"
                        >
                            <img src={val.img} alt="skill" />
                        </div>
                    ))}
                </div>

                {/* Duplicate Row (Infinite Effect) */}
                <div ref={moverefTwo} className="flex gap-7 py-12!">
                    {skillData.map((val, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="skill rounded-4xl h-[15vw] w-[15vw] md:h-24 md:w-24 lg:w-32 lg:h-32 p-3! md:p-6! flex items-center justify-center overflow-hidden shrink-0 bg-gray-200"
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
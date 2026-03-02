import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef } from "react";

gsap.registerPlugin(ScrollTrigger)


const Projects = forwardRef((props, ref) => {

    const projectData = [
        {
            img: "/CalcodeskPage.jpg",
            name: "Calcodesk",
            description:
                "Calcodesk is a service-based company located in Noida, delivering complete digital solutions for modern businesses. We specialize in web development, app development, digital marketing, social media management, and video editing. Our mission is to help brands grow with innovative strategies and impactful digital experiences."
        },
        {
            img: "/CalcodeskPage.jpg",
            name: "Calcodesk",
            description:
                "Calcodesk is a service-based company located in Noida, delivering complete digital solutions for modern businesses."
        },
        {
            img: "/CalcodeskPage.jpg",
            name: "Calcodesk",
            description:
                "Calcodesk is a service-based company located in Noida, delivering complete digital solutions for modern businesses."
        }
    ];


    useGSAP(() => {

        gsap.utils.toArray('.card').forEach((card) => {

            gsap.to(card, {
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: card,
                    scrub: 2,
                    start: "top 10%",
                    end: "bottom 30%",
                    pin: true,
                    
                }
            })
        })
    }, []);


    return (
        <section ref={ref} className="p-10!">

            <h1 className="proHead lg:w-200 m-auto!">
                help founders to convert
                ideas into digital
                experience
            </h1>

            <div className="flex flex-col justify-center items-center gap-15 lg:gap-25">
                {projectData.map((data, index) => (
                    <div
                        ref={ref}
                        key={index}
                        className="card flex flex-col items-center text-center justify-center p-4! rounded-2xl lg:rounded-4xl bg-orange-600 text-orange-50 lg:w-300 lg:px-44! lg:py-22! sticky top-[10%]"
                    >
                        <img
                            className="rounded-xl w-182.5 object-cover"
                            src={data.img}
                            alt={data.name}
                        />

                        <h4 className="mt-5!">
                            {data.name}
                        </h4>

                        <h5 className="text-center!">
                            {data.description}
                        </h5>
                    </div>
                ))}
            </div>

        </section>
    );
});

export default Projects;
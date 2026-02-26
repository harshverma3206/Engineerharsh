import { forwardRef } from "react";

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

    return (
        <section ref={ref} className="py-12 min-h-screen">

            <h1 className="text-5xl text-center font-bold mb-16">
                help founders to convert <br />
                ideas into digital <br />
                experience
            </h1>

            <div className="flex flex-col gap-20 items-center">
                {projectData.map((data, index) => (
                    <div
                        key={index}
                        className="w-[80%] flex flex-col items-center p-10 rounded-3xl gap-6 shadow-lg"
                    >
                        <img
                            className="rounded-4xl h-150 object-cover"
                            src={data.img}
                            alt={data.name}
                        />

                        <h4 className="uppercase text-center text-4xl font-bold">
                            {data.name}
                        </h4>

                        <p className="max-w-4xl text-center text-lg">
                            {data.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
});

export default Projects;
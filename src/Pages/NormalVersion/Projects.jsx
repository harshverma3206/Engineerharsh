
import { useRef } from 'react'


const Projects = () => {

    const projectsref = useRef()

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

    return (
        <section
            ref={projectsref}
            className='py-19!'><h1>help founders to convert<br />ideas into digital<br />experience</h1>
            <div className='perspective-[850px] h-250 relative'>
                {projectdata.map((data, index) => (
                    <div key={index} className='w-[80%] flex flex-col items-center p-10! rounded-3xl gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='rounded-4xl h-160' src={data.img} alt="Project01" />
                        <h4 className='uppercase! text-center! text-5xl! font-bold!'>{data.name}</h4>
                        <h6 className='w-250 text-center'>{data.description}</h6>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects

import { useRef } from 'react'

//icons
import { HiMiniHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";


const Navbar = () => {

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

    return (
        <nav className='flex flex-col p-7! gap-5 w-fit fixed left-0 top-1/2 -translate-y-1/2 z-50'>
            {section.map((sec) => (
                <button
                    className='text-3xl p-4! rounded-2xl bg-gray-200 hover:bg-[#62AB37] hover:text-white transition-colors duration-120'
                    key={sec.id}>
                    {sec.icon}
                </button>
            ))}
        </nav>
    )
}

export default Navbar

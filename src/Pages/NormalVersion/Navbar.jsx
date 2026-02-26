// icons
import { FaUser } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const iconMap = {
    about: <FaUser />,
    projects: <FaFileInvoice />,
    skills: <GiSkills />,
    contact: <BiSolidMessage />,
};

const Navbar = ({ sections, scrollToSection, activeSection }) => {
    return (
        <nav className="flex flex-col p-7! gap-5 w-fit fixed left-0 top-1/2 -translate-y-1/2 z-50">
            {sections.map((sec) => (
                <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.ref)}
                    className={`text-3xl p-4! rounded-2xl bg-gray-200 hover:bg-[#62AB37] hover:text-white transition-colors duration-200
                        ${activeSection === sec.id ? "bg-green-500 text-white" : "bg-gray-200"}`}
                >

                    {iconMap[sec.id]}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
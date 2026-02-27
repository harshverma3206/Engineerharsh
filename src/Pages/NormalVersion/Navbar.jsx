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
        <nav className="flex flex-col lg:p-7! md:p-5! p-3! gap-5 w-fit fixed left-0 top-1/2 -translate-y-1/2 z-50">
            {sections.map((sec) => (
                <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.ref)}
                    className={`p-4! rounded-2xl sm:text-xl md:text-2xl lg:text-3xl
                        hover:bg-[#10140d] hover:text-white transition-all duration-700
                       ${activeSection === sec.id
                            ? "bg-[#F97316] text-white"
                            : "bg-gray-200 text-black hover:bg-[#F97316]-300"
                        }`}
                >

                    {iconMap[sec.id]}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
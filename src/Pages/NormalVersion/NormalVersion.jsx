import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);


// Components
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function NormalVersion() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { id: "about", ref: aboutRef },
    { id: "projects", ref: projectsRef },
    { id: "skills", ref: skillsRef },
    { id: "contact", ref: contactRef },
  ];

  const [activeSection, setActiveSection] = useState("about");

  useGSAP(() => {
    sections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec.ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(sec.id),
        onEnterBack: () => setActiveSection(sec.id),
      });
    });
  }, []);

  return (
    <>
      <div className="sm:p-7!">

        <Navbar
          activeSection={activeSection}
          sections={sections}
          scrollToSection={scrollToSection} />

        <About ref={aboutRef} />
        {/* <Projects ref={projectsRef} /> */}
        {/* <Skills ref={skillsRef} /> */}
        {/* <Contact ref={contactRef} /> */}
      </div>
    </>
  );
}

export default NormalVersion
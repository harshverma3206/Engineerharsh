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
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,

        onEnter: () => setActiveSection(sec.id),
        onEnterBack: () => setActiveSection(sec.id),
      });
    });
  }, []);


  const container = useRef()
  const master = useRef(gsap.timeline({ paused: true }))

  useGSAP(() => {
    master.current.play()
  }, { scope: container })

  return (
    <>
      <div ref={container} className="sm:p-7! flex flex-col gap-10">

        <Navbar
          timeline={master.current}
          activeSection={activeSection}
          sections={sections}
          scrollToSection={scrollToSection} />

        <About timeline={master.current} ref={aboutRef} />
        <Projects timeline={master.current} ref={projectsRef} />
        <Skills timeline={master.current} ref={skillsRef} />
        <Contact timeline={master.current} ref={contactRef} />
       
      </div>
    </>
  );
}

export default NormalVersion
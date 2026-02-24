import Navbar from "./Navbar"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"

const NormalVersion = () => {

  return (
    <div className='p-10! relative gap-20 flex flex-col bg-amber-300'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default NormalVersion
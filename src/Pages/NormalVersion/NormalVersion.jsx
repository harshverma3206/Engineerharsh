import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"

const NormalVersion = () => {

  return (
    <div className='p-10! relative'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default NormalVersion
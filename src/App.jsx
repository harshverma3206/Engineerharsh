import { Routes, Route } from 'react-router-dom'

import Hero from './Pages/Hero'
import NotFound from './Components/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App

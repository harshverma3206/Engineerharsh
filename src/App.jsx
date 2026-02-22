import { Routes, Route } from 'react-router-dom'

import PartitionPage from './Pages/PartitionPage'
import NormalVersion from './Pages/NormalVersion/NormalVersion'
import AdvancedVersion from './Pages/AdvancedVersion/AdvancedVersion'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PartitionPage />} />
        <Route path="/normalversion" element={<NormalVersion />} />
        <Route path="/advancedversion" element={<AdvancedVersion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Project detail pages will be added in Phase 3 */}
      {/* <Route path="/projects/:projectId" element={<ProjectDetail />} /> */}
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/projects" element={<Projects />} /> */}
    </Routes>
  )
}

export default App

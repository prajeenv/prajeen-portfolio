import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
      {/* Additional pages will be added in Phase 4 */}
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/projects" element={<Projects />} /> */}
    </Routes>
  )
}

export default App

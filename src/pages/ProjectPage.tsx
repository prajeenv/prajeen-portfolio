import { useParams, Navigate } from 'react-router-dom'
import ProjectDetail from '../components/projects/ProjectDetail'
import { projectDetails } from '../data/projectDetails'

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>()

  const project = projectId ? projectDetails[projectId] : null

  if (!project) {
    return <Navigate to="/" replace />
  }

  return <ProjectDetail project={project} />
}

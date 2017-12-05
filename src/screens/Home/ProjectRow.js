import React from 'react'
import { Row } from 'reactstrap'

import ProjectCard from './ProjectCard'

const ProjectRow = ({ projects }) => {
  return (
    <Row className='mb-4'>
      { projects.map(project => <ProjectCard key={project.id} project={project} />) }
    </Row>
  )
}

export default ProjectRow

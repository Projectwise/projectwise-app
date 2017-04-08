import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const DEFAULT_TEXT_LENGTH = 140

const clipText = (text, length) => {
  if(text.length < length) {
    return text
  } else {
      return `${text.substring(0, length)} ...`
    }
}

const getTags = (helpFields) => {
  let tagText = [];
  if(helpFields.logo) tagText.push('Logo')
  if(helpFields.ui) tagText.push('UI')
  if(helpFields.ux) tagText.push('UX')

  return tagText.join()
}


const ProjectCard = ({project}) => (
  <Card as={Link} to={`/projects/${project.slug}`}>
    <Card.Content header={project.name} />
    <Card.Content description={clipText(project.description, DEFAULT_TEXT_LENGTH)} />
    <Card.Content extra>
      <Icon name='tag' />
      {getTags(project.helpFields)}
    </Card.Content>
  </Card>
)

export default ProjectCard

import React from 'react'
import { Col,
  Card as RCard,
  CardSubtitle,
  CardText as RCardText,
  CardTitle as RCardTitle
} from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CommentCount } from 'disqus-react'
import { ellipsis } from 'polished'

import Margin from '../../components/Margin'
import Badge from '../../components/Badge'
import colors from '../../styles/colors'
import { shortName } from '../../config/disqus'

const Card = styled(RCard)`
  border-radius: 3px;
  min-width: 300px;
  cursor: pointer;
  box-shadow: none;
  border: 2px solid ${colors.light};
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    border: 2px solid ${colors.dark};
    text-decoration: none;
  }
`

const FooterText = styled.p`
  margin-bottom: 0.2rem;
`

const CardTitle = styled(RCardTitle)`
  font-weight: bold;
`

const CardText = styled(RCardText)`
  ${ellipsis('400px')}
  color: ${colors.secondary};
`

const ProjectCard = ({ project }) => {
  const { slug, addedBy, title, likeCount } = project
  const disqusConfig = {
    url: `${process.env.PUBLIC_URL}/projects/${slug}`,
    identifier: slug,
    title: title
  }
  return (
    <Col lg={4}>
      <Card className='px-4 pt-4' tag={Link} to={`projects/${slug}`}>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle><span className='text-muted'>added by</span>&nbsp;{addedBy.username}</CardSubtitle>
        <div className='my-2'>
          {project.categories && project.categories.map((category, index) => (
            <Badge key={index} color='info'>{category}</Badge>
          ))}
        </div>
        <CardText>{project.description}</CardText>
        <Margin />
        <div className='px-2 py-2'>
          <FooterText className='text-muted float-left'>
            <CommentCount shortName={shortName} config={disqusConfig}> comments </CommentCount>
          </FooterText>
          <FooterText className='text-muted float-right'>{likeCount} likes</FooterText>
        </div>
      </Card>
    </Col>
  )
}

export default ProjectCard

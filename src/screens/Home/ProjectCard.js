import React from 'react'
import { Col,
  Card as RCard,
  CardSubtitle,
  CardBody,
  CardText as RCardText,
  CardTitle as RCardTitle,
  Badge as RBadge
} from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ellipsis } from 'polished'

import colors from '../../styles/colors'

const Card = styled(RCard)`
  border-radius: 3px;
  min-width: 300px;
  cursor: pointer;
  box-shadow: 0 2px 4px #8798A4;
  &:hover {
    box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1), 0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1), 0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12), 0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
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
`

const Badge = styled(RBadge)`
  border-radius: 1px;
  margin-left: 4px;
  margin-right: 4px;
  &:first-child: {
    margin-left: 0
  }
`

const Margin = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  height: 1px;
  background-color: ${colors.light};
`

const ProjectCard = ({ project }) => {
  const { addedBy, comments, likeCount } = project
  return (
    <Col lg={4}>
      <Card className='px-4 pt-4'>
        <CardTitle>{project.title}</CardTitle>
        <CardSubtitle className='text-muted'>added by&nbsp;
          <Link to={`/users/${addedBy.username}`}>{addedBy.username}</Link></CardSubtitle>
        <div className='my-2'>
          {project.categories && project.categories.map((category, index) => (
            <Badge key={index} color='info'>{category}</Badge>
          ))}
        </div>
        <CardText>{project.description}</CardText>
        <Margin />
        <div className='px-2 py-2'>
          <FooterText className='text-muted float-left'>{comments.length} comments</FooterText>
          <FooterText className='text-muted float-right'>{likeCount} likes</FooterText>
        </div>
      </Card>
    </Col>
  )
}

export default ProjectCard

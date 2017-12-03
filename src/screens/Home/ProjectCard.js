import React from 'react'
import { Col, Card as RCard, CardBody, CardTitle, Badge as RBadge } from 'reactstrap'
import styled from 'styled-components'

import colors from '../../styles/colors'

const Card = styled(RCard)`
  border-radius: 3px;
`

const Badge = styled(RBadge)`
  border-radius: 2px;
  margin-left: 4px;
  margin-right: 4px;

  &:first-child: {
    margin-left: 0
  }
`

const Margin = styled.div`
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  height: 1px;
  background-color: ${colors.secondary};
`

const ProjectCard = ({ project }) => {
  return (
    <Col lg={4}>
      <Card>
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <div>
            {project.categories && project.categories.map((category, index) => (
              <Badge key={index} color='secondary'>{category}</Badge>
            ))}
          </div>
          <CardText>{project.description}</CardText>
          <Margin />
        </CardBody>
      </Card>
    </Col>
  )
}

import React from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'
import Margin from '../../components/Margin'
import Badge from '../../components/Badge'
import LikeButton from '../../containers/LikeButton'
import colors from '../../styles/colors'

const WrappedContainer = styled(Container)`
  max-width: 600px;
  min-height: calc(100vh - 130px);
`

const ProjectPage = ({ project }) => {
  const {
    title,
    description,
    projectUrl,
    categories,
    helpDescription,
    addedBy
  } = project

  return (
    <WrappedContainer color={colors.white} className='pt-5 px-4'>
      <h3>{title}</h3>
      <div className='d-flex justify-content-between pt-3'>
        <div>
          <span>
            <i className='fa fa-globe' />
            <a href={projectUrl}>&nbsp;{projectUrl}</a>
          </span>
        </div>
        <div>
          <span><i className='fa fa-user-circle-o' />&nbsp;{addedBy.username}</span>
        </div>
        <div>
          {categories && categories.map((category, index) => (
            <Badge key={index} color='info'>{category}</Badge>
          ))}
        </div>
      </div>
      <Margin className='my-2' />
      <h5 className='mt-4'>Project Details</h5>
      <p>{description}</p>
      <h5>Project Help Requirements</h5>
      <p>{helpDescription}</p>
      <Margin className='mt-4 mb-2' />
      <div className='d-flex justify-content-between pt-2'>
        <LikeButton project={project} />
        <div>
          <p className='text-muted'>No comments</p>
        </div>
      </div>
    </WrappedContainer>
  )
}

export default ProjectPage

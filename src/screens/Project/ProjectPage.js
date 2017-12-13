import React from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'
import Margin from '../../components/Margin'
import Badge from '../../components/Badge'
import colors from '../../styles/colors'

const WrappedContainer = styled(Container)`
  max-width: 600px
`

const ProjectPage = ({ project }) => {
  const {
    title,
    description,
    projectUrl,
    categories,
    helpDescription,
    addedBy,
    likeCount,
    commentsCount
  } = project
  console.log(project)
  return (
    <WrappedContainer color={colors.white} className='my-5 py-5 px-4'>
      <h3>{title}</h3>
      <div className='d-flex justify-content-between pt-3'>
        <div>
          <a href={projectUrl}><i className='fa fa-globe' />&nbsp;{projectUrl}</a>
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
        <div>
          <p className='text-muted'><i className='fa fa-heart-o' />&nbsp;{likeCount} Likes</p>
        </div>
        <div>
          <p className='text-muted'>{commentsCount} Comments</p>
        </div>
      </div>
    </WrappedContainer>
  )
}

export default ProjectPage

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tooltip } from 'reactstrap'

import { likeProject, dislikeProject } from '../store/actions/projects'

class LikeButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tooltipOpen: false
    }
    this.toggleTooltip = this.toggleTooltip.bind(this)
    this.onLikeClick = this.onLikeClick.bind(this)
  }

  toggleTooltip () {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  onLikeClick () {
    const { isAuthenticated, likeProject, dislikeProject } = this.props
    const { liked, slug: projectId } = this.props.project
    if (isAuthenticated && !liked) {
      likeProject(projectId)
    } else if (isAuthenticated && liked) {
      dislikeProject(projectId)
    } else {
      this.toggleTooltip()
    }
  }

  render () {
    const { liked, likeCount } = this.props.project
    const buttonStyle = {
      cursor: 'pointer'
    }
    return (
      <div>
        <p className='text-muted'><i
          className={`fa ${liked ? 'fa-heart' : 'fa-heart-o'}`}
          style={buttonStyle}
          id='likeButton'
          onClick={this.onLikeClick}
        />
          &nbsp;{likeCount} Likes
        </p>
        <Tooltip placement='bottom' isOpen={this.state.tooltipOpen} target='likeButton' toggle={this.toggle}>
            Login to like this project
        </Tooltip>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {likeProject, dislikeProject})(LikeButton)

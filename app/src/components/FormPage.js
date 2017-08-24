import React from 'react'
import PropTypes from 'prop-types'
import { Container, Segment, Grid} from 'semantic-ui-react'

import Navbar from './Navbar'

const FormPage = (props) => {
  return(
    <Container fluid className='inverted-bg'>
      <Navbar inverted/>
      <Grid centered={props.centered} columns={1}>
        <Container text className='block-container'>
          <Segment basic padded>
            {props.children}
          </Segment>
        </Container>
      </Grid>
    </Container>
  )
}

FormPage.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default FormPage

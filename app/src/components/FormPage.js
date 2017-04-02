import React from 'react'
import { Container, Segment, Grid} from 'semantic-ui-react'

import Navbar from './Navbar'

const FormPage = (props) => {
  return(
    <Container fluid className='inverted-bg'>
      <Segment basic inverted className='navbar-bg'>
        <Navbar inverted/>
      </Segment>
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

export default FormPage

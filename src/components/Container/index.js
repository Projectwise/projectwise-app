import { Container } from 'reactstrap'
import styled from 'styled-components'

import colors from '../../styles/colors'

export default styled(Container)`
  background-color: ${props => props.color || colors.light};
  ${props => props.fluid ? 'padding-left: 0px;' : null}
  ${props => props.fluid ? 'padding-right: 0px' : null}
`

import { Badge as RBadge } from 'reactstrap'
import styled from 'styled-components'

const Badge = styled(RBadge)`
  border-radius: 2px;
  margin-left: 4px;
  margin-right: 4px;
  &:first-child: {
    margin-left: 0
  }
`

export default Badge

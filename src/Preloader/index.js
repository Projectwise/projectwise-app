import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

const WrapperContainer = styled(Container)`
  width: 100%;
  height: 100%
`

const load8 = styled.keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
`

const LoaderDiv = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load8} 1.1s infinite linear;
  animation: ${load8} 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`

export default () => (
  <WrapperContainer className='mx-auto my-auto'>
    <LoaderDiv />
  </WrapperContainer>
)

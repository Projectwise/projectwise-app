import React from 'react'
import styled, { keyframes } from 'styled-components'

import Container from '../Container'
import colors from '../../styles/colors'

const WrapperContainer = styled(Container)`
  width: 100%;
  height: calc(100vh - 130px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const load8 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
`

const LoaderDiv = styled.div`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.6em solid rgba(0, 0, 0, 0.2);
  border-right: 0.6em solid rgba(0, 0, 0, 0.2);
  border-bottom: 0.6em solid rgba(0, 0, 0, 0.2);
  border-left: 0.6em solid #000000;
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
  <WrapperContainer fluid color={colors.white} className='mx-auto my-auto'>
    <LoaderDiv />
  </WrapperContainer>
)

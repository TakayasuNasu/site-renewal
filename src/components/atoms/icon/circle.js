import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${VW(48)};
  height: ${VW(48)};
  ${breakpoint('md')`
    width: 48px;
    height: 48px;
  `}
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
  * {
    width: 80%;
    height: 80%;
  }
`

const CircleIcon = props => (
  <Div>{props.children}</Div>
)

export default CircleIcon
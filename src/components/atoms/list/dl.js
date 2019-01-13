import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'

const DL = styled.dl`
  dd{
    margin-top: ${props => VW(props.mtsdd || 8)};
    ${breakpoint('md')`
      margin-top: ${props => props.mtpdd || '8px'};
    `}
  }
`

const DTerms = props => (
  <DL>{props.children}</DL>
)

export default DTerms
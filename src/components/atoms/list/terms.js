import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'

const DT = styled.dt`
  margin-top: ${props => VW(props.mtsp || 24)};
  ${breakpoint('md')`
    margin-top: ${props => props.mtpc || '24px'};
  `}
  color: ${props => props.color || '#898989'};
  font-size: ${props => props.ss * 2 || 3.2}rem;
  ${breakpoint('md')`
    font-size: ${props => props.ps || 1.6}rem;
  `}
  font-weight: ${props => props.weight || 500};
  line-height: ${props => props.lineHeight || 1};
`

const DTerms = props => (
  <DT mtsp={props.mtsp}
      mtpc={props.mtpc}
      color={props.color}
      ss={props.ss}
      ps={props.ps}
      weight={props.weight}
      lineHeight={props.lineHeight}>{props.children}</DT>
)

export default DTerms
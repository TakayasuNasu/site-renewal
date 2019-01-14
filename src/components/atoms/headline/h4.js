import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const HeadLine = styled.h4`
  color: ${props => props.color || '#898989'};
  font-size: ${props => props.ss * 2 || 2.8}rem;
  ${breakpoint('md')`
    font-size: ${props => props.ps || 1.4}rem;
  `}
  font-weight: ${props => props.weight || 500};
  line-height: ${props => props.lineHeight || 1};
`

const H4 = props => <HeadLine
  color={props.color}
  ss={props.ss}
  ps={props.ps}
  weight={props.weight}
  lineHeight={props.lineHeight}>{props.children}</HeadLine>

export default H4
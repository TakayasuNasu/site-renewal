import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const DD = styled.dd`
  color: ${props => props.color || '#898989'};
  font-size: ${props => props.ss * 2 || 3.2}rem;
  ${breakpoint('md')`
    font-size: ${props => props.ps || 1.6}rem;
  `}
  font-weight: ${props => props.weight || 500};
  line-height: ${props => props.lineHeight || 1};
`

const DDescriptions = props => (
  <DD>{props.children}</DD>
)

export default DDescriptions
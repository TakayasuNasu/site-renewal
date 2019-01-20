import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'

const Section = styled.section`
  margin-top: ${VW(30)};
  ${breakpoint('md')`
    margin-top: 0;
  `}
  width: 100%;
  ${breakpoint('md')`
    width: 41.666%;
  `}

`

const Map = () => (
  <Section>
  </Section>
)

export default Map
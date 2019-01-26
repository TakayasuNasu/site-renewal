import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'

const Section = styled.section`
  margin-top: ${VW(30)};
  ${breakpoint('md')`
    margin-top: 80px;
  `}
  width: 100%;
  height: ${VW(400)};
  ${breakpoint('md')`
    width: 41.666%;
    height: auto;
  `}

`

const Map = () => (
  <Section>
    <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7548.29311589117!2d139.7027808982332!3d35.69296142504212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1548500676736" width="100%" height="100%"></iframe>
  </Section>
)

export default Map
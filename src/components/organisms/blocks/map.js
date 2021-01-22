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
    <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20829.33292621297!2d-123.16616946193606!3d49.26376457932929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673b7472328b7%3A0xf6b4e65508a4c7e9!2sW%20Broadway%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1611304781570!5m2!1sen!2sca" width="100%" height="100%"></iframe>
  </Section>
)

export default Map
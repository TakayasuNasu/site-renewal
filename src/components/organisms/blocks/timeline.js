import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { FaCode } from "react-icons/fa";
import { TiDeviceLaptop, TiEdit, TiHtml5 } from "react-icons/ti";
import H3 from '../../atoms/headline/h3'
import H4 from '../../atoms/headline/h4'
import Rectangle from '../../molecules/panel/rectangle'
import { VW } from '../../style-utils'

const Section = styled.section`
  padding-top: ${VW(80)};
  ${breakpoint('md')`
    padding-top: 80px;
  `}
  background-color: rgb(238,238,238);
`

const UL = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  ${breakpoint('md')`
    max-width: 960px;
  `}
`

const LI = styled.li`
  width: 100%;
  ${breakpoint('md')`
    max-width: 50%;
  `}
`

const Timeline = () => (
  <Section>
    <UL>
      <LI>
        <Rectangle>
          <H4>Senior Software Engineer</H4>
        </Rectangle>
      </LI>
    </UL>
  </Section>
)

export default Timeline
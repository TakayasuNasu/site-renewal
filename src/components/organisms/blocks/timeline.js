import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { TiDeviceLaptop, TiEdit, TiHtml5 } from "react-icons/ti";
import H3 from '../../atoms/headline/h3'
import H4 from '../../atoms/headline/h4'
import Rectangle from '../../molecules/panel/rectangle'
import CircleIcon from '../../atoms/icon/circle'
import { VW } from '../../style-utils'

const Section = styled.section`
  padding-top: ${VW(80)};
  ${breakpoint('md')`
    padding-top: 80px;
  `}
  background-color: rgb(238,238,238);
`

const UL = styled.ul`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  ${breakpoint('md')`
    max-width: 960px;
  `}
  &:before{
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${VW(18)};
    ${breakpoint('md')`
      left: 50%;
    `}
    content: " ";
    width: 1px;
    background-color: #bababa;
  }
`

const LI = styled.li`
  display: flex;
  justify-content: space-between;
  ${breakpoint('md')`
    flex-direction: row-reverse;
  `}
  width: 100%;
  ${breakpoint('md')`
    max-width: 50%;
  `}
  &+li{
    margin-top: ${VW(20)};
    ${breakpoint('md')`
      margin-top: 20px;
    `}
  }
  div{
    &:nth-of-type(1) {
      margin-top: ${VW(22)};
      ${breakpoint('md')`
        margin-top: 24px;
        margin-right: -20px;
      `}
    }
  }
`

const RightLI = styled(LI)`
  ${breakpoint('md')`
    flex-direction: row;
    margin-left: 50%;
  `}
  div{
    &:nth-of-type(1) {
      ${breakpoint('md')`
        margin-left: -18px;
        margin-right: 0;
      `}
    }
  }
`

const Timeline = () => (
  <Section>
    <UL>
      <LI>
        <CircleIcon><TiDeviceLaptop /></CircleIcon>
        <Rectangle isLeft={true}>
          <H4>Senior Software Engineer</H4>
        </Rectangle>
      </LI>
      <RightLI>
        <CircleIcon><TiDeviceLaptop /></CircleIcon>
        <Rectangle>
          <H4>Senior Software Engineer</H4>
        </Rectangle>
      </RightLI>
      <LI>
        <CircleIcon><TiDeviceLaptop /></CircleIcon>
        <Rectangle isLeft={true}>
          <H4>Senior Software Engineer</H4>
        </Rectangle>
      </LI>
    </UL>
  </Section>
)

export default Timeline
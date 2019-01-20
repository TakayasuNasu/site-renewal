import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { TiDeviceLaptop, TiEdit, TiHtml5 } from "react-icons/ti";
import H3 from '../../atoms/headline/h3'
import Rectangle from '../../molecules/panel/rectangle'
import CircleIcon from '../../atoms/icon/circle'
import { VW } from '../../style-utils'

const Section = styled.section`
  padding-top: ${VW(80)};
  padding-bottom: ${VW(60)};
  ${breakpoint('md')`
    padding-top: 80px;
    padding-bottom: 60px;
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
      margin-top: -80px;
    `}
  }
  >div{
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

const Grid = styled.main`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 100%;
  grid-template-columns: 100%;
  -ms-grid-rows: ${VW(32)} ${VW(10)} ${VW(24)} ${VW(10)} ${VW(24)} ${VW(30)} auto;
  grid-template-rows: ${VW(32)} ${VW(10)} ${VW(24)} ${VW(10)} ${VW(24)} ${VW(30)} auto;
  ${breakpoint('md')`
    -ms-grid-rows: 32px 10px 24px 10px 24px 30px auto;
    grid-template-rows: 32px 10px 24px 10px 24px 30px auto;
  `}
  p{
    font-size: 3.2rem;
    ${breakpoint('md')`
      font-size: 1.6rem;
    `}
    line-height: 1.6;
  }
`

const Timeline = () => (
  <Section>
    <UL>
      <LI>
        <CircleIcon color='#2879ff'><TiDeviceLaptop /></CircleIcon>
        <Rectangle isLeft={true}>
          <Grid>
            <H3>Senior Software Engineer</H3>
            <div />
            <p>Mar 2014 - Present</p>
            <div />
            <p>Fakebook</p>
            <div />
            <p>Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p>
          </Grid>
        </Rectangle>
      </LI>
      <RightLI>
        <CircleIcon color='#01c853'><TiDeviceLaptop /></CircleIcon>
        <Rectangle borderColor='#01c853'>
          <Grid>
            <H3>Senior Software Engineer</H3>
            <div />
            <p>Mar 2014 - Present</p>
            <div />
            <p>Fakebook</p>
            <div />
            <p>Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p>
          </Grid>
        </Rectangle>
      </RightLI>
      <LI>
        <CircleIcon color='#fec107'><TiDeviceLaptop /></CircleIcon>
        <Rectangle borderColor='#fec107' isLeft={true}>
          <Grid>
            <H3>Senior Software Engineer</H3>
            <div />
            <p>Mar 2014 - Present</p>
            <div />
            <p>Fakebook</p>
            <div />
            <p>Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p>
          </Grid>
        </Rectangle>
      </LI>
    </UL>
  </Section>
)

export default Timeline
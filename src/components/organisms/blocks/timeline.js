import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { TiDeviceLaptop } from "react-icons/ti";
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
            <H3>Full Stuck Developer / Technical Director</H3>
            <div />
            <p>Jun 2017 - August 2020</p>
            <div />
            <p>Medix inc.</p>
            <div />
            <p>As project leader, I selected technologies and supported members of the project team.</p>
            <p>Created SPA for centralized management which useful knowledge within the company that was stored in various locations. That SPA is made with Docker, Laravel, Graphql and Vue.js.</p>
          </Grid>
        </Rectangle>
      </LI>
      <RightLI>
        <CircleIcon color='#01c853'><TiDeviceLaptop /></CircleIcon>
        <Rectangle borderColor='#01c853'>
          <Grid>
            <H3>Senior Web Developer</H3>
            <div />
            <p>November 2014 - October 2016</p>
            <div />
            <p>Strawbag inc</p>
            <div />
            <p>Took on a wide range of tasks like Requirement Definition, Research, System Design, Implementation, Testing, Deployment, Task Management almost every project because that's company had only a few programmer.</p>
          </Grid>
        </Rectangle>
      </RightLI>
      <LI>
        <CircleIcon color='#fec107'><TiDeviceLaptop /></CircleIcon>
        <Rectangle borderColor='#fec107' isLeft={true}>
          <Grid>
            <H3>Junior Web Developer</H3>
            <div />
            <p>April 2013 - October 2014</p>
            <div />
            <p>BTM inc</p>
            <div />
            <p>Runs a Linux workshop in the company, lecturing on the basics of Linux and how to build an environment using Vagrant and Chef.</p>
            <p>Continued to release Smartphone game which over 100 php files, built with over 100 tables, used by over 10,000 people daily consistently.</p>
          </Grid>
        </Rectangle>
      </LI>
      <RightLI>
        <CircleIcon color='#FF4081'><TiDeviceLaptop /></CircleIcon>
        <Rectangle borderColor='#FF4081'>
          <Grid>
            <H3>Junior Web Developer</H3>
            <div />
            <p>Jun 2012 - March 2013</p>
            <div />
            <p>I-Freek</p>
            <div />
            <p>Created a script in php to migrate DB data and migrated over 10,000 records to another DB without any problems.</p>
            <p>Modified an existing program made with Perl and deploy it on Linux while checking the Apache conf file with Vim.</p>
          </Grid>
        </Rectangle>
      </RightLI>
    </UL>
  </Section>
)

export default Timeline
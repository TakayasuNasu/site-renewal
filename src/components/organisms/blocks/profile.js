import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { FaCode } from "react-icons/fa";
import { TiDeviceLaptop, TiEdit, TiHtml5 } from "react-icons/ti";
import H3 from '../../atoms/headline/h3'
import H4 from '../../atoms/headline/h4'
import { VW } from '../../style-utils'

const Wrapper = styled.div`
  padding-top: ${VW(80)};
  ${breakpoint('md')`
    padding-top: 80px;
  `}
  background-color: rgb(238,238,238);
  h3{
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    ${breakpoint('md')`
      max-width: 960px;
    `}
  }
`

const Section = styled.section`
  display: block;
  ${breakpoint('md')`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (50%)[2];
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
  `}
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  ${breakpoint('md')`
    max-width: 960px;
  `}
`

const Article = styled.article`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: ${VW(24)} ${VW(30)} auto ${VW(24)};
  grid-template-columns: ${VW(24)} ${VW(30)} auto ${VW(24)};
  -ms-grid-rows: ${VW(44)} ${VW(34)} ${VW(44)} ${VW(30)} ${VW(16)} auto ${VW(44)};
  grid-template-rows: ${VW(44)} ${VW(34)} ${VW(44)} ${VW(30)} ${VW(16)} auto ${VW(44)};
  ${breakpoint('md')`
    -ms-grid-columns: 24px 30px auto 24px;
    grid-template-columns: 24px 30px auto 24px;
    -ms-grid-rows: 44px 34px 44px 30px 16px auto 44px;
    grid-template-rows: 44px 34px 44px 30px 16px auto 44px;
  `}
  margin-top: ${VW(40)};
  ${breakpoint('md')`
    margin-top: 30px;
  `}
  ${breakpoint('md')`
    width: 95%;
    max-width: 450px;
  `}
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
  svg{
    width: 100%;
    height: 100%;
  }
  h4, p{
    -ms-grid-column: 2;
    -ms-grid-column-span: 2;
    grid-column: 2 / 4;
  }
  div{
    &:nth-of-type(1){
      grid-column: 1 / 5;
    }
    &:nth-of-type(5){
      grid-column: 1 / 5;
    }
    &:nth-of-type(8){
      grid-column: 1 / 5;
    }
  }
  p{
    font-size: 3.2rem;
    ${breakpoint('md')`
      font-size: 1.6rem;
    `}
    line-height: 1.6;
  }
`


const Profile = () => (
  <Wrapper>
    <H3>What I do</H3>
    <Section>
      <Article>
        <div /><div />
        <FaCode color='#2879ff' />
        <div /><div /><div /><div />
        <H4 ss={1.8} ps={1.8}>Full Stack</H4>
        <div /><div />
        <p>i'm familiar with Backend, Frontend, and Mobile programing, also I'm good at creating System Architecture.</p>
      </Article>
      <Article>
        <div /><div />
        <TiDeviceLaptop color='#01c853' />
        <div /><div /><div /><div />
        <H4 ss={1.8} ps={1.8}>Experience</H4>
        <div /><div />
        <p>i have experience large and small project. in addition Social game, web application development, landing page coding, and UX/UI.</p>
      </Article>
      <Article>
        <div /><div />
        <TiEdit color='#7C4DFF' />
        <div /><div /><div /><div />
        <H4 ss={1.8} ps={1.8}>Ambition</H4>
        <div /><div />
        <p>I study myself a new programming language every year. Then I like to incorporate modern technology into my work.</p>
      </Article>
      <Article>
        <div /><div />
        <TiHtml5 color='orange' />
        <div /><div /><div /><div />
        <H4 ss={1.8} ps={1.8}>Strategy</H4>
        <div /><div />
        <p>I can select technologies based on the technology level of my team members. I've led many successful projects with my coworker.</p>
      </Article>
    </Section>
  </Wrapper>
)

export default Profile
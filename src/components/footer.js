import React from 'react'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Element } from 'react-scroll'

import H3 from './atoms/headline/h3'
import SNS from './organisms/blocks/sns'
import Contact from './organisms/blocks/contact'
import Map from './organisms/blocks/map'
import { VW } from './style-utils'

const Section = styled.footer`
  display: block;
  ${breakpoint('md')`
    display: flex;
  `}
  margin-left: auto;
  margin-right: auto;
  padding-top: ${VW(60)};
  ${breakpoint('md')`
    padding-top: 60px;
  `}
  width: 95%;
  ${breakpoint('md')`
    max-width: 960px;
  `}
`

const Div = styled.div`
  margin-top: ${VW(60)};
  margin-bottom: ${VW(100)};
  ${breakpoint('md')`
    margin-top: 80px;
    margin-bottom: 80px;
  `}
  text-align: center;
  >*{
    margin-top: ${VW(24)};
    ${breakpoint('md')`
      margin-top: 40px;
    `}
  }
`

const Footer = () => (
  <Element name="contact">
    <Section>
      <Contact />
      <Map />
    </Section>
    <Div>
      <H3>Thank You For Visiting.</H3>
      <p>TKY {new Date().getFullYear()}. All rights reserved.</p>
      <SNS />
    </Div>
  </Element>
)

export default Footer
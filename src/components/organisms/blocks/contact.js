import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import H3 from '../../atoms/headline/h3'
import H4 from '../../atoms/headline/h4'
import { VW } from '../../style-utils'

const Section = styled.section`
  width: 100%;
  ${breakpoint('md')`
    width: 58.3333%;
  `}
`

const Div = styled.div`
  margin-top: ${VW(60)};
  ${breakpoint('md')`
    margin-top: 60px;
  `}
  padding: ${VW(46)} ${VW(24)} ${VW(46)} ${VW(24)};
  ${breakpoint('md')`
    padding: 46px 24px 46px 24px;
  `}
  background-color: rgb(238,238,238);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${VW(20)} ${VW(34)} ${VW(20)} ${VW(20)} ${VW(34)} ${VW(20)} ${VW(20)} ${VW(80)} ${VW(30)} ${VW(40)};
  ${breakpoint('md')`
    grid-template-rows: 20px 34px 20px 20px 34px 20px 20px 80px 30px 40px;
  `}
  margin-top: ${VW(30)};
  ${breakpoint('md')`
    margin-top: 30px;
  `}
`

const Contact = () => (
  <Section>
    <H3>Contact</H3>
    <Div>
      <H4>Hey There, happy to hear from you.</H4>
      <Form>

      </Form>
    </Div>
  </Section>
)

export default Contact
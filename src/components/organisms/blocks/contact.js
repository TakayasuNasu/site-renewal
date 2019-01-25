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

const Textfield = styled.div`
  position: relative;
`

const input = styled.input`
  box-sizing: border-box;
  display: block;
  padding: 0.125rem 0.125rem 0.0625rem;
  width: 100%;
  font-size: 3.6rem;
  line-height: 1.9;
  border-color: transparent;
  background: none;
  box-shadow: none;
  border-bottom:1px solid #757575;
  transition: all 0.28s ease;
  &:focus{
    outline: none;
  }
  &:focus, &:valid{
    ~ label{
      top: ${VW(-20)};
      font-size: 3rem;
      color:#5264AE;
    }
  }
`

const InputName = styled(input)`
`

const Highlight = styled.span`
  position:absolute;
  height:60%;
  width:100px;
  top:25%;
  left:0;
  pointer-events:none;
  opacity:0.5;
`

const Bar = styled.span`
  display:block;
  position:relative;
  width:300px;
  &::before, &::after{
    content:'';
    height:2px;
    width:0;
    bottom:1px;
    position:absolute;
    background:#5264AE;
    transition:0.2s ease all;
  }
  &::before{
    left: 50%;
  }
  &::after{
    right: 50%;
  }
`

const Label = styled.label`
  position:absolute;
  color:#999;
  font-size: 3.6rem;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all;
`

const Contact = () => (
  <Section>
    <H3>Contact</H3>
    <Div>
      <H4>Hey There, happy to hear from you.</H4>
      <Form>
        <div />
        <Textfield>
          <InputName type="text" name="name" required="required" />
          <Highlight />
          <Bar />
          <Label>Name*</Label>
        </Textfield>
      </Form>
    </Div>
  </Section>
)

export default Contact
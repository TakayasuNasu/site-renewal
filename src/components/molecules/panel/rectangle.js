import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'


const Div = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: ${VW(24)} auto ${VW(24)};
  grid-template-columns: ${VW(25)} auto ${VW(25)};
  -ms-grid-rows: ${VW(30)} auto ${VW(30)};
  grid-template-rows: ${VW(30)} auto ${VW(30)};
  ${breakpoint('md')`
    -ms-grid-columns: 24px auto 24px;
    grid-template-columns: 24px auto 24px;
    -ms-grid-rows: 30px auto 30px;
    grid-template-rows: 30px auto 30px;
  `}
  position: relative;
  width: calc(100% - ${VW(65)});
  ${breakpoint('md')`
    width: calc(100% - 50px);
  `}
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
  border-top: ${VW(3)} solid ${props => props.borderColor || '#2879ff'};
  ${breakpoint('md')`
    border-top: 3px solid ${props => props.borderColor || '#2879ff'};
  `}
  .area01{
    grid-column: 1 / 4;
  }
  &:before {
    content: " ";
    display: inline-block;
    opacity: 0.2;
    position: absolute;
    top: ${VW(28)};
    left: ${VW(-12)};
    ${breakpoint('md')`
      top: 28px;
      ${props => {
      if (props.isLeft) {
        return `
        left: auto;
        right: -13px;
      `} else {
        return `
          left: -12px;
        `}
    }}
    `}
    border-color: transparent rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 13px 0 13px 13px;
  }
  &:after {
    content: " ";
    position: absolute;
    display: inline-block;
    top: ${VW(28)};
    left: ${VW(-10)};
    ${breakpoint('md')`
      top: 30px;
      ${props => {
      if (props.isLeft) {
        return `
          left: auto;
          right: -10px;
        `} else {
        return `
            left: -10px;
          `}
    }}
    `}
    border-top: 10px solid transparent;
    border-left: 0 solid #ffffff;
    border-right: 10px solid #ffffff;
    border-bottom: 10px solid transparent;
    ${breakpoint('md')`
    ${props => {
      if (props.isLeft) {
        return `
        border-left: 10px solid #ffffff;
        border-right: 0 solid #ffffff;
      `}
    }}
    `}
  }
`

const Rectangle = props => (
  <Div borderColor={props.borderColor} isLeft={props.isLeft}>
    <div className='area01' />
    <div />
    <div>
      {props.children}
    </div>
  </Div>
)

export default Rectangle
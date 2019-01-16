import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'
import Circle from '../../atoms/icon/circle'


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
  border-top: ${VW(3)} solid #2879ff;
  .area01{
    grid-column: 1 / 4;
  }
  &:before {
    content: " ";
    display: inline-block;
    opacity: 0.2;
    position: absolute;
    top: 27px;
    right: -13px;
    border-color: transparent rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 13px 0 13px 13px;
  }
`

const Rectangle = props => (
  <Div>
    <div className='area01' />
    <div />
    <div>
      {props.children}
    </div>

  </Div>
)

export default Rectangle
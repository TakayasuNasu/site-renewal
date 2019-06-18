import React, { useContext } from 'react'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { VW, Pseudo } from '../../style-utils'
import { SideMenuContext } from '../../../store/side-menu'

const Div = styled.div`
  display: flex;
  align-items: center;
  width: ${VW(45)};
  height: ${VW(45)};
  ${breakpoint('md')`
    width: ${props => props.pw || 45}px;
    height: ${props => props.ph || 45}px;
  `}
  cursor: pointer;
`

const share = `
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`

const Span = styled.span`
  display: block;
  position: relative;
  width: ${VW(45)};
  height: ${VW(5)};
  ${breakpoint('md')`
    width: 45px;
    height: 5px;
  `}
  ${share}
  background: ${props => props.active ? 'transparent' : props.bg || '#898989'};
  &::before, &::after{
    ${ Pseudo(VW(45), VW(5)) }
    ${share}
    ${breakpoint('md')`
      width: 45px;
      height: 5px;
    `}
    background: ${props => props.bg || '#898989'};
  }
  &::before{
    top: ${props => props.active ? 0 : VW(-10)};
    ${breakpoint('md')`
      top: ${props => props.active ? 0 : '-10px'};
    `}
    transform: ${props => props.active ? 'rotate(45deg)' : 'none'};
  }
  &::after{
    bottom: ${props => props.active ? 0 : VW(-20)};
    ${breakpoint('md')`
      bottom: ${props => props.active ? 0 : '-20px'};
    `}
    transform: ${props => props.active ? 'rotate(-45deg)' : 'none'};
  }
`

const MenuButon = props => {
  const [isExpanded, setExpanded] = useContext(SideMenuContext)
  return (
    <Div onClick={() => setExpanded(!isExpanded)}>
      <Span bg={props.bg} active={isExpanded} />
    </Div>
  )
}

export default MenuButon
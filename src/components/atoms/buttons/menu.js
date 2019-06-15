import React, { Component } from 'react'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { VW, Pseudo } from '../../style-utils'

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

class MenuButon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ active: !this.state.active})
  }

  render() {
    return (
      <Div onClick={this.handleClick}>
        <Span bg={this.props.bg} active={this.state.active} />
      </Div>
    )
  }
}

export default MenuButon
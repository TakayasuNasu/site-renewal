import React from 'react'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { VW, Pseudo } from '../../style-utils'

const Anchor = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: ${props => VW(props.sw || 76)};
  height: ${props => VW(props.sh || 40)};
  ${breakpoint('md')`
    width: ${props => props.pw || 120}px;
    height: ${props => props.ph || 40}px;
  `}
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: ${props => props.bg || '#2ecc71'};
  transition: background-color .3s;
  &:hover{
    background-color: #27ae60;
  }
  &::after{
    ${ Pseudo('10px', '10px')}
  }
`

const Paragraph = styled.p`
  color: ${props => props.color || '#ecf0f1'};
  font-size: ${props => props.ss * 2 || 3.6}rem;
  ${breakpoint('md')`
    font-size: ${props => props.ps || 2}rem;
  `}
`

const ContactButton = props => (
  <Anchor
    sw={props.sw}
    pc={props.pw}
    sh={props.sh}
    ph={props.ph}
    bg={props.bg}>
    <Paragraph color={props.color} ss={props.ss}>{props.children}</Paragraph>
  </Anchor>
)

export default ContactButton
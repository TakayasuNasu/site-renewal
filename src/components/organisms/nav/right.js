import React, { useContext } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-scroll'
import { useMedia } from 'use-media'
import { FaEnvelope, FaRegFolder, FaRegFile, FaFileAlt, FaBookOpen } from "react-icons/fa";

import { SideMenuContext } from '../../../store/side-menu'
import CircleImg from '../../atoms/img/circle'
import H2 from '../../atoms/headline/h2'
import SNS from '../blocks/sns'
import { VW } from '../../style-utils'

const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: 0;
  width: ${props => props.isExpanded? 75:0}vw;
  min-height: 150vh;
  ${breakpoint('md')`
    width: ${props => props.isExpanded? 300:0}px;
  `}
  background-color: rgb(43, 43, 43);
  overflow: hidden;
  transition: .3s;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: auto ${VW(30)} auto ${VW(30)} auto ${VW(40)} auto ${VW(30)} auto;
  justify-items: center;
  margin-top: ${VW(30)};
  ${breakpoint('md')`
    margin-top: 30px;
    grid-template-rows: auto 30px auto 30px auto 40px auto 30px auto;
  `}
`

const UL = styled.ul`
  width: 100%;
  a{
    display: flex;
    padding-left: ${VW(16)};
    height: ${VW(60)};
    align-items: center;
    font-size: 4.2rem;
    text-align: left;
    color: #969696;
    ${breakpoint('md')`
      height: 60px;
      padding-left: 16px;
      font-size: 2.4rem;
    `}
    &.active{
      color: #ffffff;
    }
  }
  svg{
    margin-right: ${VW(16)};
    ${breakpoint('md')`
      margin-right: 16px;
    `}
  }
`

const Footer = styled.footer`
  font-size: ${VW(16)};
  color: #969696;
  align-self: end;
  ${breakpoint('md')`
    font-size: 1.6rem;
  `}
`

const Right = () => {
  const [isExpanded] = useContext(SideMenuContext)
  const md = useMedia({ minWidth: 768 })
  return (
    <Nav isExpanded={isExpanded} id="side-menu">
      <Container>
        <CircleImg />
        <div></div>
        <H2 color="#ffffff" ss={3.6} ps={3.6}>Takayasu Nasu</H2>
        <div></div>
        <SNS />
        <div></div>
        <UL>
          {md? null:(
            <React.Fragment>
              <li>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={8} duration={500}>
                  <FaFileAlt />Skills
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="profile" spy={true} smooth={true} offset={8} duration={500}>
                  <FaRegFolder />Profile
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={8} duration={500}>
                  <FaRegFile />Timeline
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={8} duration={500}>
                  <FaEnvelope />Contact
                </Link>
              </li>
            </React.Fragment>
          )}
          <li>
            <a href="https://blog.i-nasu.com">
              <FaBookOpen />Blog-ja
            </a>
          </li>
        </UL>
        <div></div>
        <Footer>
          <p>TKY {new Date().getFullYear()}. All rights reserved.</p>
        </Footer>
      </Container>
    </Nav>
  )
}

export default Right
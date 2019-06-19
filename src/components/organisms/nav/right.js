import React, { useContext } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-scroll'

import { SideMenuContext } from '../../../store/side-menu'

const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: 0;
  width: ${props => props.isExpanded? 30:0}vw;
  height: 100vh;
  ${breakpoint('md')`
    width: ${props => props.isExpanded? 40:30}vw;
    `}
  background: rgba(0,20,60,.9);
  overflow: hidden;
  transition: .3s;
`

const Right = () => {
  const [isExpanded] = useContext(SideMenuContext)
  return (
    <Nav isExpanded={isExpanded} id="side-menu">
      <ul>
        <li>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={8} duration={500}>
            Skills
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Right
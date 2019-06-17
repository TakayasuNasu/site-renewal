import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-scroll'

import { SideMenuContext } from '../../../store/side-menu'

const Nav = styled.nav`
  margin-left: auto;
  margin-right: 0;
  width: ${props => props.isExpanded? 30:0}vw;
  height: 100vh;
  ${breakpoint('md')`
    width: 40vw;
    `}
  background: rgba(0,20,60,.9);
  overflow: hidden;
`

const Right = () => {
  const [isExpanded, setExpanded] = useContext(SideMenuContext)
  console.log(123)
  useEffect(() => {
    console.log(isExpanded)
  })
  return (
    <Nav isExpanded={isExpanded} onClick={() => setExpanded(false)}>
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
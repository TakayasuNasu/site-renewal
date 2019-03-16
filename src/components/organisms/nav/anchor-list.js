import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'


const Nav = styled.nav`
  margin-left: 4em;
  height: 100%;
`

const UL = styled.ul`
  display: flex;
  height: 100%;
  cursor: pointer;
  >li{
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    font-size: 2rem;
    a{
      color: #898989;
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 2px;
        left: 0;
        width:0;
        background-color: #01c853;
        transition: 0.3s ease;
      }
    }
    .active{
      &:after{
        width: 100%;
      }
    }
  }
`

const AnchorList = () => (
  <Nav>
    <UL>
      <li>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={8} duration={500}>
          Skills
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="profile" spy={true} smooth={true} offset={8} duration={500}>
          Profile
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={8} duration={500}>
          Timeline
        </Link>
      </li>
    </UL>
  </Nav>
)

export default AnchorList
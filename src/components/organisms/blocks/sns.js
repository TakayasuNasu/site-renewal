import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { VW } from '../../style-utils'

const UL = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${VW(24)};
  ${breakpoint('md')`
    height: 24px;
  `}
  a{
    margin-left: ${VW(10)};
    margin-right: ${VW(10)};
    ${breakpoint('md')`
      margin-left: 30px;
      margin-right: 30px;
    `}
    color: #898989;
  }
  svg{
    font-size: ${VW(20)};
    ${breakpoint('md')`
      font-size: 2rem;
    `}
  }
`

const SNS = () => (
  <UL>
    <li><a href='https://www.facebook.com/takayasu.nasu.1' target="_blank"><FaFacebook /></a></li>
    <li><a href='https://twitter.com/taka7beckham' target="_blank"><FaTwitter /></a></li>
    <li><a href='https://www.linkedin.com/in/takayasu-nasu-b8054413b/' target="_blank"><FaLinkedinIn /></a></li>
    <li><a href='https://github.com/TakayasuNasu' target="_blank"><FaGithub /></a></li>
  </UL>
)

export default SNS
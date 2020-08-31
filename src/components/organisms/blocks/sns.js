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
    <li><a href='https://www.facebook.com/takayasu.nasu.1'  rel="noreferrer noopener"  target="_blank"><FaFacebook aria-label="Facebook" /></a></li>
    <li><a href='https://twitter.com/taka7beckham'  rel="noreferrer noopener"  target="_blank"><FaTwitter aria-label="Twitter" /></a></li>
    <li><a href='https://www.linkedin.com/in/takayasu-nasu-b8054413b/'  rel="noreferrer noopener"  target="_blank"><FaLinkedinIn aria-label="LinkedIn" /></a></li>
    <li><a href='https://github.com/TakayasuNasu'  rel="noreferrer noopener"  target="_blank"><FaGithub aria-label="Github" /></a></li>
  </UL>
)

export default SNS
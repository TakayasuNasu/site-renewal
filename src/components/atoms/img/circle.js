import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'
import Image from '../../../images/face.jpg'

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: ${VW(180)};
  height: ${VW(180)};
  ${breakpoint('md')`
    width: 240px;
    height: 240px;
  `}
  border-radius: 50%;
  background: url(${Image});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
`

const CircleImg = () => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: {eq: "face.jpg"}) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `}
    render={data => {
      console.log(data.file.childImageSharp.fixed)
      return <Div />
    }
    }
  />
)

export default CircleImg

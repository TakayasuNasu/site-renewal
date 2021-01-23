import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { VW } from '../../style-utils'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: ${VW(180)};
  height: ${VW(180)};
  ${breakpoint('md')`
    width: 240px;
    height: 240px;
  `}
`

const Div = ({ className }) => (
  <Wrapper>
    <StaticQuery
      query={graphql`
      query {
        file(relativePath: {eq: "face.jpg"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 240)  {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      `}
      render={data => {
        const img = data.file.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="div"
            className={className}
            fluid={img}
          />
        )
      }
      }
    />
  </Wrapper>
)

const CircleImg = styled(Div)`
  width: ${VW(180)};
  height: ${VW(180)};
  ${breakpoint('md')`
    width: 240px;
    height: 240px;
  `}
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  &::before {
    border-radius: 50%;
  }
`

export default CircleImg

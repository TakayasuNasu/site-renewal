import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-scroll'

import { VW } from '../style-utils'
import H2 from '../atoms/headline/h2'
import H3 from '../atoms/headline/h3'
import CircleImg from '../atoms/img/circle'
import SNS from '../organisms/blocks/sns'
import ContactButton from '../atoms/buttons/contact'
import DL from '../atoms/list/dl'
import DT from '../atoms/list/terms'
import DD from '../atoms/list/description'
import { Grid, GridArea } from '../atoms/styles'
import { matchSmartphone, matchTablet } from '../../utils/matchMedia'

const Div = styled(BackgroundImage)`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top;
`

const About = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${VW(160)};
  ${breakpoint('md')`
    padding-top: 20em;
  `}
  width: 95%;
  ${breakpoint('md')`
    max-width: 960px;
  `}
`

const Section = styled(Grid)`
  padding-top: ${VW(40)};
  padding-bottom: ${VW(40)};
  ${breakpoint('md')`
    padding-top: 60px;
    padding-bottom: 60px;
  `}
  background-color: #fefefe;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
  > * {
    text-align: center;
  }
`

class MV extends Component {

  constructor(props) {
    super(props)
    this.state = {
      column: this.getColumn(),
      row: this.getRow(),
      area: this.getArea()
    }
    this.styleSetting = this.styleSetting.bind(this)
  }

  getColumn() {
    if (matchSmartphone()) {
      return ['auto']
    }
    if (matchTablet()) {
      return [
        ['auto'],
        ['auto'],
      ]
    } else {
      return ['auto']
    }
  }

  getRow() {
    if (matchSmartphone()) {
      return [180, 40, 24, 40, 26, 20, 44, 20, 40, 40, 'auto']
    }
    if (matchTablet()) {
      return ['42px', '40px', '64px', '40px', '40px', '40px', 'auto']
    } else {
      return [180, 40, 24, 40, 26, 20, 44, 20, 40, 40, 'auto']
    }
  }

  getArea() {
    if (matchSmartphone()) {
      return [
        ['img'],
        ['gap01'],
        ['sns'],
        ['gap02'],
        ['name'],
        ['gap03'],
        ['ocupation'],
        ['gap04'],
        ['contact'],
        ['gap05'],
        ['dl'],
      ]
    }
    if (matchTablet()) {
      return [
        ['img', 'name'],
        ['img', 'gap03'],
        ['img', 'ocupation'],
        ['img', 'gap04'],
        ['img', 'contact'],
        ['gap01', 'gap05'],
        ['sns', 'dl'],
      ]
    } else {
      return [
        ['img'],
        ['gap01'],
        ['sns'],
        ['gap02'],
        ['name'],
        ['gap03'],
        ['ocupation'],
        ['gap04'],
        ['contact'],
        ['gap05'],
        ['dl'],
      ]
    }
  }

  styleSetting() {
    this.setState({ column: this.getColumn(), row: this.getRow(), area: this.getArea() })
  }

  componentDidMount() {
    window.addEventListener('resize', this.styleSetting)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.styleSetting)
  }

  render() {
    return (
      <StaticQuery
      query={graphql`
      query {
        mv_sp:file(relativePath: {eq: "bg/mv_sp.png"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 240)  {
              ...GatsbyImageSharpFluid
            }
          }
        },
        mv_pc:file(relativePath: {eq: "bg/mv_pc.png"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 240)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      `}
      render={data => {
        const img = matchTablet()? data.mv_pc.childImageSharp.fluid : data.mv_sp.childImageSharp.fluid
        return (
        <Div
          Tag="div"
          fluid={img}
        >
          <About>
            <Section
              as='section'
              columns={this.state.column}
              rows={this.state.row}
              areas={this.state.area}>
              <Container />
            </Section>
          </About>
        </Div>
        )
      }}
      />
    )
  }
}

export default MV

const Container = () => (
  <React.Fragment>
    <GridArea name='img'>
      <CircleImg />
    </GridArea>
    <GridArea name='gap01' />
    <GridArea name='sns'>
      <SNS />
    </GridArea>
    <GridArea name='gap02' />
    <GridArea name='name'>
      <H2 ps={4.2}>Takayasu Nasu</H2>
    </GridArea>
    <GridArea name='gap03' />
    <GridArea name='ocupation'>
      <H3 ps={2} lineHeight={1.6}>Programmer<br />Full stack Engineer</H3>
    </GridArea>
    <GridArea name='gap04' />
    <GridArea name='contact'>
      <Link to="contact" smooth={true} duration={1000}>
        <ContactButton internal={true}>contact</ContactButton>
      </Link>
    </GridArea>
    <GridArea name='gap05' />
    <GridArea name='dl'>
      <DL>
        <DT mtsp={0.1} mtpc='8px'>Address</DT>
        <DD>Shinjuku, Tokyo</DD>
        <DT>Email</DT>
        <DD>taka.beckham@gmail.com</DD>
      </DL>
    </GridArea>
  </React.Fragment >
)
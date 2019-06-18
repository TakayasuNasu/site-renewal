import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

import Header from './header'
import Footer from './footer'
import { theme } from './themes'
import { GridArea } from './atoms/styles'
import { VW } from './style-utils'
import { matchSmartphone, matchTablet } from '../utils/matchMedia'
import Store from '../store/store'
import './layout.css'

const Outer = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.bg};
`

Outer.defaultProps = {
  theme: {
    color: '#787878',
  }
}

const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto;
  grid-template-columns: auto;
  -ms-grid-rows: ${VW(70)} auto auto;
  grid-template-rows: ${VW(70)} auto auto;
  grid-template-areas: 'header' 'body' 'footer';
  ${breakpoint('md')`
    -ms-grid-rows: 70px auto auto;
    grid-template-rows: 70px auto auto;
  `}
`

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: this.getColumn(),
      row: this.getRow(),
    }
    this.styleSetting = this.styleSetting.bind(this)
  }

  getColumn() {
    if (matchSmartphone()) {
      return ['auto']
    }
    if (matchTablet()) {
      return ['auto']
    } else {
      return ['auto']
    }
  }

  getRow() {
    if (matchSmartphone()) {
      return [70, 'auto', 'auto']
    }
    if (matchTablet()) {
      return ['70px', 'auto', 'auto']
    } else {
      return [70, 'auto', 'auto']
    }
  }

  styleSetting() {
    this.setState({ column: this.getColumn(), row: this.getRow() })
  }

  componentDidMount() {
    window.addEventListener('resize', this.styleSetting)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.styleSetting)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Store>
          <Grid>
            <GridArea name='header'>
              <Header />
            </GridArea>
            <GridArea name='body'>
              <Outer>
                {this.props.children}
              </Outer>
            </GridArea>
            <GridArea name='footer'>
              <Footer />
            </GridArea>
          </Grid>
        </Store>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
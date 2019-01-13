import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components';

import Header from './header'
import { theme } from './themes'
import { Grid, GridArea } from './atoms/styles'
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
    if (window.matchMedia("(max-width:766px)").matches) {
      return ['auto']
    }
    if (window.matchMedia("(min-width:767px)").matches) {
      return ['auto']
    }
  }

  getRow() {
    if (window.matchMedia("(max-width:766px)").matches) {
      return [70, 'auto', 70]
    }
    if (window.matchMedia("(min-width:767px)").matches) {
      return ['70px', 'auto', '70px']
    }
  }

  styleSetting() {
    this.setState({ column: this.getColumn(), row: this.getRow() })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid
          columns={this.state.column}
          rows={this.state.row}
          areas={[
            ['header'],
            ['body'],
            ['footer'],
          ]}>
          <GridArea name='header'>
            <Header />
          </GridArea>
          <GridArea name='body'>
            <Outer>
              {this.props.children}
            </Outer>
          </GridArea>
          <GridArea name='footer'>
            <footer>
              Footer
            </footer>
          </GridArea>
        </Grid>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
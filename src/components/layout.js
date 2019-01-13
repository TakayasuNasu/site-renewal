import React from 'react'
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

const Layout = props => (
  <ThemeProvider theme={theme}>
    <Grid
      columns={['auto']}
      columnsMd={['auto']}
      rows={[70, 'auto', 70]}
      rowsMd={['70px', 'auto', '120px']}
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
          {props.children}
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
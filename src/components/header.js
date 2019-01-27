import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import H1 from '../components/atoms/headline/h1'
import ContactButton from '../components/atoms/buttons/contact'
import AnchorList from '../components/organisms/nav/anchor-list'
import MenuButon from '../components/atoms/buttons/menu'
import { VW } from './style-utils'

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: rgba(255,255,255,0.8);
`

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  height: ${VW(70)};
  ${breakpoint('md')`
    max-width: 960px;
    height: 70px;
  `}
`

const NavBlock = styled.div`
  display: none;
  ${breakpoint('md')`
    display: block;
  `}
  height: 100%;
`

const Header = () => (
  <Wrapper>
    <HeaderBlock>
      <H1 ps={2.4}>@TakayasuNasu</H1>
      <NavBlock>
        <AnchorList />
      </NavBlock>
      <ContactButton>contact</ContactButton>
      <MenuButon />
    </HeaderBlock>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header

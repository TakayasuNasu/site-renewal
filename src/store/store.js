import React from 'react'

import SideMenuProvider from './side-menu'

const Store = ({ children }) => (
  <SideMenuProvider>
    { children }
  </SideMenuProvider>
)

export default Store
import React, { useState } from 'react'

export const SideMenuContext = React.createContext(false)

const SideMenuProvider = ({ children }) => {
  const [isExpanded, setExpanded] = useState(false)
  return (
    <SideMenuContext.Provider value={[isExpanded, setExpanded]}>
      {children}
    </SideMenuContext.Provider>
  )
}

export default SideMenuProvider
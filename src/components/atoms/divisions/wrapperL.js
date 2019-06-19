import React, { useContext } from "react"

import { WrapperBase } from '../styles'
import { SideMenuContext } from '../../../store/side-menu'
import { closeIfExpanded } from '../../../utils/closeIfExpanded'

const WrapperL = props => {
  const [isExpanded, setExpanded] = useContext(SideMenuContext)
  return (
    <WrapperBase onClick={(e) => closeIfExpanded(e, isExpanded, setExpanded)}>
     {props.children}
    </WrapperBase>
  )
}

export default WrapperL
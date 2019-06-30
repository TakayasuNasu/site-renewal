import React, { useContext } from "react"
import styled from 'styled-components';

import { SideMenuContext } from '../../../store/side-menu'
import { closeIfExpanded } from '../../../utils/closeIfExpanded'

const Div = styled.div`
`

const WrapperL = props => {
  const [isExpanded, setExpanded] = useContext(SideMenuContext)
  return (
    <Div onClick={(e) => closeIfExpanded(e, isExpanded, setExpanded)}>
     {props.children}
    </Div>
  )
}

export default WrapperL
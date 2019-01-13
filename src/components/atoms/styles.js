import styled from "styled-components"
import breakpoint from 'styled-components-breakpoint';

const vw = distance => {
  if (isNaN(distance)) {
    return distance
  }
  const value = (distance / 375) * 100
  return value + 'vw'
}

export const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: ${({ columns }) => columns.join(" ")};
  grid-template-columns: ${({ columns }) => columns.join(" ")};
  -ms-grid-rows: ${({ rows }) => rows.map(vw).join(" ")};
  grid-template-rows: ${({ rows }) => rows.map(vw).join(" ")};
  ${breakpoint('md')`
    -ms-grid-columns: ${({ columnsMd }) => columnsMd.join(" ")};
    grid-template-columns: ${({ columnsMd }) => columnsMd.join(" ")};
    -ms-grid-rows: ${({ rowsMd }) => rowsMd.join(" ")};
    grid-template-rows: ${({ rowsMd }) => rowsMd.join(" ")};
  `}
  grid-template-areas: ${({ areas }) =>
    areas.map(r => `'${r.join(" ")}'`).join(" ")};
  width: 100%;
  height: 100%;
`

export const GridArea = styled.div`
  grid-area: ${p => p.name};
  width: 100%;
  height: 100%;
`

export const WrapperBase = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  max-width: ${props => vw(props.sw) || '95vw'};
  ${breakpoint('md')`
    width: 90%;
    max-width: ${props => props.pw || 960}px;
  `}
  > * {
    margin-top: 8vw;
    ${breakpoint('md')`
      margin-top: 40px;
    `}
  }
`
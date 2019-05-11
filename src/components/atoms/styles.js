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
  -ms-grid-columns: ${({ columns }) => Array.isArray(columns) ? columns.join(' ') : columns};
  grid-template-columns: ${({ columns }) => Array.isArray(columns) ? columns.join(' ') : columns};
  -ms-grid-rows: ${({ rows }) => Array.isArray(rows) ? rows.map(vw).join(' ') : rows};
  grid-template-rows: ${({ rows }) => Array.isArray(rows) ? rows.map(vw).join(' ') : rows};
  grid-template-areas: ${({ areas }) =>
    Array.isArray(areas) ? areas.map(r => `'${r.join(' ')}'`).join(' ') : areas};
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
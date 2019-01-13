export const VW = distance => (distance / 375) * 100 + 'vw'
export const Pseudo = (w, h) => `
  content: '';
  position: absolute;
  display: block;
  top: 0;
  buttom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: ${w};
  height: ${h};
`
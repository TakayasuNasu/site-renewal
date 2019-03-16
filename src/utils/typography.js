import Typography from "typography"
import theme from 'typography-theme-st-annes'
theme.googleFonts.push({
  name: 'Noto+Sans+JP',
  styles: ['400'],
})
theme.bodyFontFamily = ['Noto Sans JP', 'Roboto', 'serif']
const typography = new Typography(theme)
export default typography
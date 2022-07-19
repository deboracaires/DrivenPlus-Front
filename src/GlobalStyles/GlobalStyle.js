import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyled = createGlobalStyle`
  ${reset}
  *{
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100vh;
        background-color: #0E0E13;
    }
    @media(max-width: 630px) {
  overflow-x: hidden !important;
}
`

export default GlobalStyled;
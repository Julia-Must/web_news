import { colorsLight } from './palette';




import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html, body {
      font-family: ${props => props.theme.fontFamily};
      font-size: 16px;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      background-color: ${colorsLight.background}
    }
 
    
    a.App-link {
      text-decoration: none;
      color: ${props => (props.BlackColor ? 'blue' : 'black')};
      &:visited {
        color: grey;
      } 
      
     a{
      text-decoration: none;
      color: ${props => (props.RedColor ? 'blue' : 'black')};
     
    }
        
  `;


export default GlobalStyles;
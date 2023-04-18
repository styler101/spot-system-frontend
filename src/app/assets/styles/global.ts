import { createGlobalStyle } from "styled-components";
import backgroundImage from "../images/background.jpg";

export default createGlobalStyle`
 *{
  padding:0;
  margin:0;
  outline: 0;
  box-sizing: border;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
 }

 h1, h2, h3, h4, h5, h6{
  font-size: 32px;
 }

  button{
    cursor: pointer;
  }

  html,body,#root{
    width:100%;
    height:100%;
    background-image: url(${backgroundImage});
    background-size:cover;
  }
  a{
    text-decoration: none;
  }
`;

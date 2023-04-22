import styled, { createGlobalStyle } from "styled-components";
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

  ::-webkit-scrollbar {
  width: 5px;
  border-radius: 10px 0 10px ;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 450px;
  flex: 1;
  margin-top: 16px;
  background-color: #fff;
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 5px 5px 5px rgba(150, 150, 150, 0.3);
  display: flex;
  flex-direction: column;

  p {
    width: 100%;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    margin: 8px 0;
  }
`;

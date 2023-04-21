import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
      transform: rotate(0deg);
    }
  to{
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  width: inherit;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0;

  div {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 5px solid #ccc;
    border-left-color: blue;
    animation: ${rotate} 0.8s ease-in infinite;
  }
`;

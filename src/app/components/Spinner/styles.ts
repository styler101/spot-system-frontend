import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: #ccc;
  width: inherit;
  height: inherit;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface LoaderProps {
  width: string;
  height: string;
}

const rotate = keyframes`
  to{
    transform: rotate(360deg);
  }

  from{
    transform: rotate(0deg);
  }

`;
export const Loader = styled.div<LoaderProps>`
  width: ${(props) => props.width || "12px"};
  height: ${(props) => props.height || "12px"};
  border-radius: 50%;
  border: 4px solid rgba(110, 110, 110, 0.2);
  border-left-color: #fff;
  animation: ${rotate} 0.8s ease-in infinite;
`;

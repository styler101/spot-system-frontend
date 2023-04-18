import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ccc;
`;

interface LoaderProps {
  width: string;
  height: string;
}
export const Loader = styled.div<LoaderProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
`;

import styled, { css } from "styled-components";

interface InputProps {
  error: boolean;
}

export const Input = styled.input<InputProps>`
  margin: 0;
  padding: 0;
  width: 380px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #c8c8c8;
  margin-top: 8px;
  padding-left: 14px;
  font-size: 15px;
  color: #1a1a1d;

  ${(props) =>
    props.error &&
    css`
      border-color: #f05a5b;
      background-color: #fce4e4;
      input {
        color: #fce4e4;
      }
    `}
`;

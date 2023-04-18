import styled from "styled-components";

export const Button = styled.button`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #c8c8c8;
  font-size: 15px;
  background-color: #f05a5b;
  color: #fff;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  margin-top: 14px;

  &:hover {
    filter: brightness(90%);
  }

  &:disabled {
    background-color: #ccc !important;
  }
`;

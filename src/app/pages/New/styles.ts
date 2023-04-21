import styled from "styled-components";

export const Title = styled.h3`
  width: 100%;
  font-size: 18px;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  label {
    width: 100%;
    margin: 8px 0;

    input {
      width: 450px;
    }
    strong > span {
      font-weight: normal;
      color: #c8c8c8;
      font-size: 14px;
    }
  }
`;

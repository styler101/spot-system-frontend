import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 390px;
  flex: 1;
  margin-top: 40px;
  background-color: #fff;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 5px 5px 5px rgba(150, 150, 150, 0.3);
  display: flex;
  flex-direction: column;

  p {
    width: 100%;
    font-size: 18px;
    line-height: 20px;
  }
`;

export const Field = styled.div`
  width: 100%;
  padding-top: 8px;
  margin-top: 16px;

  label {
    font-weight: normal;
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

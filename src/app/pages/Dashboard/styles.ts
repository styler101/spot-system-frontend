import styled from "styled-components";

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

export const GridArea = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 310px;
`;

export const Footer = styled.div``;

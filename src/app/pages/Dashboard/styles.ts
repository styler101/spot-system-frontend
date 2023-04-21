import styled from "styled-components";

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

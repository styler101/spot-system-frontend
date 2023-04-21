import * as S from "./styles";
import { DomainData } from "../../protocols";

type CardProps = {
  item: DomainData;
};

export function Card(props: CardProps) {
  const { company, price_jsx, thumbnail_jsx } = props.item;
  return (
    <S.Container>
      {thumbnail_jsx}
      <strong>{company}</strong>
      <span> {price_jsx}</span>
    </S.Container>
  );
}

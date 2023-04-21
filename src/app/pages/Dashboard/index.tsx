import { useState } from "react";
import { Card } from "./components";
import { Button } from "@/app/components/Form/Button";
import logo from "@/app/assets/images/logo.svg";
import * as S from "./styles";

export function Dashboard() {
  const [data, setData] = useState([]);
  return (
    <S.Container>
      <img src={logo} />
      <S.Wrapper>
        <p>
          Aqui Você consegue conferir os principaís <strong>spots</strong>{" "}
          ofertados.
        </p>
        <S.GridArea>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.GridArea>
        <S.Footer>
          <Button type="button"> Novo Spot</Button>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
}

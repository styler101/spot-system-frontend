import React, { useEffect } from "react";
import { listSpotsUseCase } from "./custom-hooks";
import { Card } from "./components";
import { Button } from "@/app/components/Form/Button";
import logo from "@/app/assets/images/logo.svg";
import * as S from "./styles";

export function Dashboard() {
  const { loading, data, loadData } = listSpotsUseCase();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.Container>
      <img src={logo} />
      <S.Wrapper>
        <p>
          Aqui Você consegue conferir os principaís <strong>spots</strong>{" "}
          ofertados.
        </p>
        <S.GridArea>
          {loading ? (
            <h1>Carregando.. </h1>
          ) : (
            <React.Fragment>
              {data.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </React.Fragment>
          )}
        </S.GridArea>
        <S.Footer>
          <Button type="button"> Novo Spot</Button>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
}

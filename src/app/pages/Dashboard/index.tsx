import React, { useEffect } from "react";
import { listSpotsUseCase } from "./custom-hooks";
import { Card } from "./components";
import { Button, Loader } from "@/app/components";
import { Container, Wrapper } from "@/app/assets/styles/global";
import logo from "@/app/assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export function Dashboard() {
  const { loading, data, loadData } = listSpotsUseCase();
  const navigate = useNavigate();
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <img src={logo} />
      <Wrapper>
        <p>
          Aqui Você consegue conferir os principaís <strong>spots</strong>{" "}
          ofertados.
        </p>
        {loading ? (
          <Loader />
        ) : (
          <S.GridArea>
            <React.Fragment>
              {data.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </React.Fragment>
          </S.GridArea>
        )}
        <S.Footer>
          <Button type="button" onClick={() => navigate("/new")}>
            Novo Spot
          </Button>
        </S.Footer>
      </Wrapper>
    </Container>
  );
}

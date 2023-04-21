import React from "react";
import { Input, Button } from "@/app/components";
import { Container, Wrapper } from "@/app/assets/styles/global";
import logo from "@/app/assets/images/logo.svg";
import * as S from "./styles";

export function New() {
  return (
    <Container>
      <img src={logo} alt="logo do projeto" />
      <Wrapper>
        <S.Title> Preencha os campos abaixo para criar um spot </S.Title>
        <S.Form>
          <label>
            <strong> Link da Logo do Spot *</strong>
            <Input
              error={false}
              name="company"
              placeholder="Informe o link da imagem do spot"
            />
          </label>
          <label>
            <strong> Empresa *</strong>
            <Input
              error={false}
              name="company"
              placeholder="Nome da companhia"
            />
          </label>
          <label>
            <strong>
              Tecnologias* <span>(separadas por vírgula) </span>
            </strong>
            <Input
              error={false}
              name="company"
              placeholder="Informe as tecnologias usadas no spot"
            />
          </label>
          <label>
            <strong>
              Valor da diária
              <span> (em branco para GRATUITO) </span>
            </strong>
            <Input
              error={false}
              name="company"
              placeholder="Informe o valor da diária"
            />
          </label>
          <Button> Salvar</Button>
        </S.Form>
      </Wrapper>
    </Container>
  );
}

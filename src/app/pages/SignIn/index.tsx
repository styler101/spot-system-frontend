import React from "react";
import { Input, Button } from "@/app/components/Form";
import logo from "@/app/assets/images/logo.svg";
import * as S from "./styles";

export function SignIn() {
  return (
    <S.Container>
      <img src={logo} alt="Logo do projeto" />
      <S.Form>
        <p>
          Ofereça <strong> spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa.
        </p>
        <div>
          <label htmlFor="email">
            <span> E-mail* </span>
            <Input placeholder="Digite o seu melhor email" />
            <Button type="submit"> Entrar</Button>
          </label>
        </div>
      </S.Form>
    </S.Container>
  );
}

import React from "react";
import { ErrorLabel, Button, Input } from "@/app/components";
import { authenticationUseCase } from "./custom-hooks";
import logo from "@/app/assets/images/logo.svg";
import * as S from "./styles";

export function SignIn() {
  const { loadings, form } = authenticationUseCase();
  const {
    register,
    formState: { isValid, errors },
  } = form;

  console.log(isValid);

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
            <Input
              placeholder="Digite o seu melhor email"
              {...register("email")}
              error={Boolean(errors.email)}
            />
            {errors.email?.message && (
              <ErrorLabel message={errors.email.message} />
            )}
            <Button type="submit"> Entrar</Button>
          </label>
        </div>
      </S.Form>
    </S.Container>
  );
}

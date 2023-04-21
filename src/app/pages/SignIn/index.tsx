import React from "react";
import { authenticationUseCase } from "./custom-hooks";
import { ErrorLabel, Spinner, Button, Input } from "@/app/components";
import { Container } from "@/app/assets/styles/global";
import logo from "@/app/assets/images/logo.svg";
import * as S from "./styles";

export function SignIn() {
  const { loadings, form, onSumbit } = authenticationUseCase();
  const { handleSubmit } = form;
  const { loading } = loadings;
  const {
    register,
    formState: { isValid, errors },
  } = form;

  return (
    <Container>
      <img src={logo} alt="Logo do projeto" />
      <S.Form onSubmit={handleSubmit(onSumbit)}>
        <p>
          Ofereça <strong> spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa.
        </p>
        <S.Field>
          <label htmlFor="email">
            <span> E-mail* </span>
            <Input
              placeholder="Digite o seu melhor email"
              {...register("email")}
              autoComplete="off"
              error={Boolean(errors.email)}
            />
            {errors.email?.message && (
              <ErrorLabel message={errors.email.message} />
            )}
            <Button type="submit" disabled={loading || !isValid}>
              {loading ? (
                <Spinner width="16px" height="16px" />
              ) : (
                <React.Fragment> Salvar</React.Fragment>
              )}
            </Button>
          </label>
        </S.Field>
      </S.Form>
    </Container>
  );
}

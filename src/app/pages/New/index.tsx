import React from "react";
import { Input, Button, ErrorLabel } from "@/app/components";
import { useValidationUseCase, saveSpotUseCase } from "./custom-hooks";
import { Container, Wrapper } from "@/app/assets/styles/global";
import logo from "@/app/assets/images/logo.svg";
import * as S from "./styles";

export function New() {
  const { form } = useValidationUseCase();
  const {
    register,
    getValues,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = form;
  const { loading, onSubmit } = saveSpotUseCase();

  return (
    <Container>
      <img src={logo} alt="logo do projeto" />
      <Wrapper>
        <S.Title> Preencha os campos abaixo para criar um spot </S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <strong> Link da Logo do Spot *</strong>
            <Input
              error={Boolean(errors?.thumbnail?.message)}
              placeholder="Informe o link da imagem do spot"
              {...register("thumbnail")}
            />
            {errors?.thumbnail && errors.thumbnail.message && (
              <ErrorLabel message={errors.thumbnail.message} />
            )}
          </label>
          <label>
            <strong> Empresa *</strong>
            <Input
              error={Boolean(errors?.company?.message)}
              placeholder="Nome da companhia"
              {...register("company")}
            />
            {errors?.company && errors.company.message && (
              <ErrorLabel message={errors.company.message} />
            )}
          </label>
          <label>
            <strong>
              Tecnologias* <span>(separadas por vírgula) </span>
            </strong>
            <Input
              error={Boolean(errors?.techs?.message)}
              placeholder="Informe as tecnologias usadas no spot"
              {...register("techs")}
            />
            {errors?.techs && errors.techs.message && (
              <ErrorLabel message={errors.techs.message} />
            )}
          </label>
          <label>
            <strong>
              Valor da diária
              <span> (em branco para GRATUITO) </span>
            </strong>
            <Input
              error={false}
              placeholder="Informe o valor da diária"
              {...register("price")}
            />
          </label>
          <Button type="submit" disabled={!isValid}>
            Salvar
          </Button>
        </S.Form>
      </Wrapper>
    </Container>
  );
}

import React from "react";
import { SpinnerProps } from "./interfaces";
import * as S from "./styles";

export function Spinner(props: SpinnerProps) {
  const { width = "16px", height = "16px" } = props;
  return (
    <S.Container>
      <S.Loader width={width} height={height} />
    </S.Container>
  );
}

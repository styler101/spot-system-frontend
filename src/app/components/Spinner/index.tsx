import { SpinnerProps } from "./interfaces";
import * as S from "./styles";

export function Spinner(props: SpinnerProps) {
  const { width, height } = props;
  return (
    <S.Container>
      <S.Loader width={width} height={height} />
    </S.Container>
  );
}

import * as S from "./styles";

export type ErrorLabelProps = {
  message: string;
};

export function ErrorLabel(props: ErrorLabelProps) {
  const { message } = props;
  return <S.ErrorLabel> {message}</S.ErrorLabel>;
}

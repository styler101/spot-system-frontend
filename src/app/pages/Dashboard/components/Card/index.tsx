import * as S from "./styles";

export function Card() {
  return (
    <S.Container>
      <img
        src={
          "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
        }
        alt="image de um spot"
      />
      <strong>App Statidum</strong>
      <span> R$ 90.00</span>
    </S.Container>
  );
}

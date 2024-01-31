import * as S from "./styleShowTotal";

function ShowTotal({ valor }) {
  return (
    <S.WrapperResult>
      <p>R${valor}</p>
    </S.WrapperResult>
  );
}

export default ShowTotal;

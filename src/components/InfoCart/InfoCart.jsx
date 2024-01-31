import * as S from "./styleInfoCart";

function InfoCart({ title, placeholder, nomeBtn }) {
  return (
    <S.WrapperInfo>
      <p>{title}</p>
      <div>
        <input type="text" placeholder={placeholder} />
        <button>{nomeBtn}</button>
      </div>
    </S.WrapperInfo>
  );
}

export default InfoCart;

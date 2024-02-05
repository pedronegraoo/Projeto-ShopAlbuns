// import * as S from "./styleInfoCart";
import * as S from "../InputCupom/styleInputCupom";

function InputCep({ title, placeholder, nomeBtn }) {
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

export default InputCep;

import * as S from "./styleInputCupom";
import { useState } from "react";
import useStore from "../../hooks/useStore";

function InputCupom({ title, placeholder, nomeBtn }) {
  const { descontoCupom } = useStore();
  const [cupom, setCupom] = useState();

  function handleChange(ev) {
    setCupom(ev.target.value);
  }

  function handleClick() {
    if (cupom === "MEUCUPOM10") {
      console.log("APLICOU");
      descontoCupom(0.1);
    }
  }

  return (
    <S.WrapperInfo>
      <p>{title}</p>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={cupom}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          {nomeBtn}
        </button>
      </div>
    </S.WrapperInfo>
  );
}

export default InputCupom;

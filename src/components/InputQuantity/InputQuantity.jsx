import * as S from "./styleInputQuantity";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import useStore from "../../hooks/useStore";

function InputQuantity({ album }) {
  const [count, setCount] = useState(1);
  const { plusQuantity, minusQuantity, totalSum } = useStore();

  useEffect(() => {
    setCount((state) => {
      if (album.quantity > 1) {
        state = album.quantity;
      }
      return state;
    });
  }, []);

  return (
    <S.WrapperInputQuantity>
      <button
        onClick={() => {
          minusQuantity(album);
          setCount(album.quantity);
          totalSum();
          // modificaValor();
        }}
      >
        <CiCircleMinus />
      </button>

      <input
        type="text"
        disabled
        // value={count === undefined ? 1 : album.quantity}
        value={count < 2 ? 1 : album.quantity}
      />

      <button
        onClick={() => {
          plusQuantity(album);
          setCount(album.quantity);
          totalSum();
          // modificaValor();
        }}
      >
        <CiCirclePlus />
      </button>
    </S.WrapperInputQuantity>
  );
}

export default InputQuantity;

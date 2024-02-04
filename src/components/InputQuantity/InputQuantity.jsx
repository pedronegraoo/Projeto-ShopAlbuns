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
        disabled={count === 1}
        onClick={() => {
          minusQuantity(album);
          setCount(album.quantity);
          totalSum();
        }}
      >
        <CiCircleMinus />
      </button>

      <input type="text" disabled value={count} />

      <button
        disabled={count === 9}
        onClick={() => {
          plusQuantity(album);
          setCount(album.quantity);
          totalSum();
        }}
      >
        <CiCirclePlus />
      </button>
    </S.WrapperInputQuantity>
  );
}

export default InputQuantity;

import * as S from "./styleInfoValuesCart";
import ButtonCart from "../ButtonCart/ButtonCart";
import useStore from "../../hooks/useStore";

function InfoValuesCart() {
  const { priceTotal, storeAlbum } = useStore();

  // FUNCIONA TAMBÉM
  const cartTotal = storeAlbum.reduce(
    (acc, album) => acc + album.price * album.quantity,
    0
  );

  return (
    <S.WrapperFinalizar>
      <S.WrapperValues>
        <div>
          <p>Subtotal</p>
          <span>R${priceTotal}</span>
        </div>

        <div>
          <p>Valor Total</p>
          <span>R${priceTotal}</span>
        </div>
      </S.WrapperValues>

      <ButtonCart nameBtn={`Finalizar pedido`} />
    </S.WrapperFinalizar>
  );
}

export default InfoValuesCart;

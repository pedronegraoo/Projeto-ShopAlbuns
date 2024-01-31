import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/cart";
import TableCart from "../../components/TableCart/TableCart";
import InfoCart from "../../components/InfoCart/InfoCart";
import ButtonCart from "../../components/ButtonCart/ButtonCart";
import InfoValuesCart from "../../components/InfoValuesCart/InfoValuesCart";

function Cart() {
  return (
    <LayoutGlobal.Section>
      <S.TitleCart>
        <h5>Carrinho de compras</h5>
        <ButtonCart nameBtn={`Finalizar pedido`} />
      </S.TitleCart>

      <S.SectionCart>
        <TableCart />

        <S.DivInfoCart>
          <InfoCart
            title={`Cupom de Desconto`}
            placeholder={``}
            nomeBtn={`Aplicar`}
          />

          <InfoCart
            title={`Simular Frete`}
            placeholder={`Digite o seu CEP`}
            nomeBtn={`Simular `}
          />

          <InfoValuesCart />
        </S.DivInfoCart>
      </S.SectionCart>
    </LayoutGlobal.Section>
  );
}

export default Cart;

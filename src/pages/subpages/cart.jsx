import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/cart";
import TableCart from "../../components/TableCart/TableCart";
import ButtonCart from "../../components/ButtonCart/ButtonCart";
import InfoValuesCart from "../../components/InfoValuesCart/InfoValuesCart";
import TableCartMobile from "../../components/TableCartMobile/TableCartMobile";
import InputCep from "../../components/InputCep/InputCep";
import InputCupom from "../../components/InputCupom/InputCupom";

function Cart() {
  return (
    <LayoutGlobal.Section>
      <S.TitleCart>
        <h5>Carrinho de compras</h5>
        <ButtonCart nameBtn={`Finalizar pedido`} />
      </S.TitleCart>

      <S.SectionCart>
        <div className="divTableCart">
          <TableCart />
        </div>

        <div className="divTableCartMobile">
          <TableCartMobile />
        </div>

        <S.DivInfoCart>
          <InputCupom
            title={`Cupom de Desconto`}
            placeholder={``}
            nomeBtn={`Aplicar`}
          />

          <InputCep
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

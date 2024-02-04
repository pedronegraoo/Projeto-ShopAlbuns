import * as S from "./styleTableCartMobile";
import FormatCurrency from "../../utils/FormatCurrency";
import { FaRegTrashAlt } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import useStore from "../../hooks/useStore";

function TableCartMobile() {
  const { storeAlbum, removeAlbumInStore } = useStore();

  return (
    <S.WrapperTableCartMobile>
      <table>
        <tbody>
          {storeAlbum.length === 0 && (
            <div className="emptyCart">
              <GiShoppingCart className="imgEmptyCart" />
              <p>Carrinho vazio</p>
            </div>
          )}
          {storeAlbum.map((album) => (
            <tr key={album.id}>
              <td>
                <img
                  className="imgProduct"
                  src={album.img}
                  alt={`imagem do album ${album.name}`}
                />
              </td>

              <td>
                <div>
                  <h5>Álbum {album.name}</h5>
                </div>

                <div>
                  <p>
                    <span>Preço:</span> {FormatCurrency(album.price, "BRL")}
                  </p>
                </div>

                <div>
                  <p>
                    <span>QTD:</span> {album.quantity}
                  </p>
                </div>

                <div>
                  <p>
                    <span>Subtotal:</span>
                    R$ {album.price * album.quantity}
                  </p>
                </div>
              </td>

              <td>
                <button onClick={() => removeAlbumInStore(album.id)}>
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.WrapperTableCartMobile>
  );
}

export default TableCartMobile;

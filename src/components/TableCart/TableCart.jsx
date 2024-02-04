import FormatCurrency from "../../utils/FormatCurrency";
import * as S from "./styleTableCart";
import { FaRegTrashAlt } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import useStore from "../../hooks/useStore";

function TableCart() {
  const { storeAlbum, removeAlbumInStore } = useStore();

  return (
    <S.DivTableCart>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>QTD</th>
            <th>Subtotal</th>
          </tr>
        </thead>

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

                <div>
                  <h5>Álbum {album.name}</h5>
                </div>
              </td>
              <td>{FormatCurrency(album.price, "BRL")}</td>
              <td>{album.quantity}</td>
              <td>R$ {album.price * album.quantity}</td>
              <td>
                <button onClick={() => removeAlbumInStore(album.id)}>
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.DivTableCart>
  );
}

export default TableCart;

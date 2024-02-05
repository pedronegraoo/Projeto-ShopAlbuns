import * as S from "./styleCardOff";
import { FaRegTrashAlt } from "react-icons/fa";
import InputQuantity from "../InputQuantity/InputQuantity";
import FormatCurrency from "../../utils/FormatCurrency";
import useStore from "../../hooks/useStore";

function CardOffCanvas() {
  const { storeAlbum, removeAlbumInStore } = useStore();

  return (
    <>
      {storeAlbum.map((album) => (
        <S.CardOffCanvas key={album.id}>
          <img src={album.img} alt={`imagem do album ${album.name}`} />

          <div className="detailsAlbum">
            <h6>Álbum {album.name}</h6>

            <div className="priceInput">
              <p className="priceAlbum">{FormatCurrency(album.price, "BRL")}</p>

              <InputQuantity album={album} />
            </div>
          </div>

          <div className="btnTrash">
            <S.BtnTrash
              onClick={() => {
                removeAlbumInStore(album.id);
              }}
            >
              <FaRegTrashAlt />
            </S.BtnTrash>
          </div>
        </S.CardOffCanvas>
      ))}
    </>
  );
}

export default CardOffCanvas;

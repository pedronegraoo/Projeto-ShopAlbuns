import { Link } from "react-router-dom";
import * as S from "./stylecardAlbum";
import FormatCurrency from "../../utils/FormatCurrency";

function CardAlbum({ id, img, name, artist, releaseYear, price }) {
  return (
    <S.Card>
      <img src={img} alt={`imagem do album ${name}`} />

      <S.ContentCard>
        <div>
          <h4>{name}</h4>
          <p>
            Artista: <span>{artist}</span>
          </p>
          <p>Ano: {releaseYear}</p>
          <p>
            <span>{FormatCurrency(price, "BRL")}</span>
          </p>

          <Link to={`${id}`} className="buttonBuy">
            Comprar
          </Link>
        </div>
      </S.ContentCard>
    </S.Card>
  );
}

export default CardAlbum;

import FormatCurrency from "../../utils/FormatCurrency";
import { CardAlbum } from "./styleCardHomeAlbums";

function CardHomeAlbums({ img, name, price }) {
  return (
    <CardAlbum>
      <img src={img} alt={`imagem do ${name}`} />

      <div>
        <h2>{name}</h2>
        <p>{FormatCurrency(price, "BRL")}</p>
      </div>
    </CardAlbum>
  );
}

export default CardHomeAlbums;

import { CardArtist } from "./styleCardHomeArtist";

function CardHomeArtist({ img, name }) {
  return (
    <CardArtist>
      <img src={img} alt={`imagem do ${name}`} />

      <h2>{name}</h2>
    </CardArtist>
  );
}

export default CardHomeArtist;

import { Link } from "react-router-dom";
import * as S from "./stylecardArtist";

function CardArtist({ img, name, age, state }) {
  return (
    <S.Card>
      <img src={img} alt={`imagem do ${name}`} />

      <S.ContentCard>
        <div>
          <h2>{name}</h2>
          <p>Idade: {age}</p>
          <p>Estado: {state}</p>
        </div>

        <Link to={name} className="linkSaibaMais">
          Álbuns
        </Link>
      </S.ContentCard>
    </S.Card>
  );
}

export default CardArtist;

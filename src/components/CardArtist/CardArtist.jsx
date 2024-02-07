import { Link } from "react-router-dom";
import * as S from "./stylecardArtist";
import useStore from "../../hooks/useStore";

function CardArtist({ img, name, age, state }) {
  const { setUploadedImage } = useStore();

  function loadImage() {
    setUploadedImage(false);
  }

  return (
    <S.Card>
      <img src={img} onLoad={loadImage} alt={`imagem do ${name}`} />
      {/* <img src={img} alt={`imagem do ${name}`} /> */}

      <S.ContentCard>
        <div>
          <h2 className="name-artist">{name}</h2>
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

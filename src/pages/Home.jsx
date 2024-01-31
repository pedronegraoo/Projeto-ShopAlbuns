import { Link } from "react-router-dom";
import CardHomeAlbums from "../components/CardHomeAlbum/CardHomeAlbums";
import CardHomeArtist from "../components/CardHomeArtist/CardHomeArtist";
import Carrossel from "../components/Carrossel/Carrossel";
import * as S from "../styles/home";
import imgAlbum1 from "../assets/albums/albumGigantes.jpg";
import imgAlbum2 from "../assets/albums/albumDosPredios.png";
import imgAlbum3 from "../assets/albums/albumLume.jpg";
import imgAlbum4 from "../assets/albums/albumDacoromode.jpg";
import imgArtist1 from "../assets/artists/bk.jpg";
import imgArtist2 from "../assets/artists/ret.jpg";
import imgArtist3 from "../assets/artists/veigh2.jpg";
import imgArtist4 from "../assets/artists/tz.jpg";

function Home() {
  return (
    <>
      <Carrossel />

      <S.SectionHome>
        <h1>
          E aí mano, seja bem-vindo ao <span>Shop Albums</span>
        </h1>

        <S.ContentSection>
          <h2 className="titleContent">Álbuns disponíveis</h2>

          <S.WrapperCard>
            <CardHomeAlbums img={imgAlbum1} name={"gigantes"} price={59.99} />
            <CardHomeAlbums img={imgAlbum3} name={"lume"} price={59.99} />
            <CardHomeAlbums
              img={imgAlbum2}
              name={"Dos prédios"}
              price={59.99}
            />
            <CardHomeAlbums img={imgAlbum4} name={"Dacoromode"} price={59.99} />
          </S.WrapperCard>

          <Link to="albums" className="linkAlbum">
            Ver mais
          </Link>
        </S.ContentSection>

        <S.ContentSection>
          <h2 className="titleContent">Artistas em destaque </h2>

          <S.WrapperCard>
            <CardHomeArtist img={imgArtist2} name={"Filipe Ret"} />
            <CardHomeArtist img={imgArtist1} name={"Bk"} />
            <CardHomeArtist img={imgArtist3} name={"Veigh"} />
            <CardHomeArtist img={imgArtist4} name={"Tz da Coronel"} />
          </S.WrapperCard>

          <Link to="artist" className="linkArtist">
            Ver mais
          </Link>
        </S.ContentSection>
      </S.SectionHome>
    </>
  );
}

export default Home;

import { useEffect, useState } from "react";
import albumsDB from "../database/albums.json";
import CardAlbum from "../components/CardAlbum/CardAlbum";
import * as LayoutGlobal from "../styles/layoutArtistAlbum";
import * as S from "../styles/albums";
import TitlePages from "../components/Title/TitlePages";
import InputFilterAlbums from "../components/InputFilterAlbums/InputFilterAlbums";
import Loading from "../components/Spinner/Spinner";

// ESTOU UTILIZANDO O useEffect e useState para treinar o uso para quando for usar uma API
function Albums() {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    albumsDB.sort((a, s) => {
      if (a.name < s.name) {
        return -1;
      } else {
        return true;
      }
    });

    setAlbums(albumsDB);
    setFilteredAlbums(albumsDB);
  }, []);

  return (
    <>
      <LayoutGlobal.Section>
        <S.DivTitleInput>
          <TitlePages title={"álbuns"} />
          <InputFilterAlbums
            albums={albums}
            setFilteredAlbums={setFilteredAlbums}
          />
        </S.DivTitleInput>

        <S.ContainerCardsAlbums>
          {filteredAlbums.length === 0 && <Loading />}

          {filteredAlbums.map((album) => (
            <CardAlbum
              key={album.id}
              id={album.id}
              img={album.img}
              name={album.name}
              artist={album.artist}
              releaseYear={album.releaseYear}
              price={album.price}
            />
          ))}
        </S.ContainerCardsAlbums>
      </LayoutGlobal.Section>
    </>
  );
}

export default Albums;

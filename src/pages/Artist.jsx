import { useState, useEffect } from "react";
import artistsDB from "../database/artists.json";
import * as LayoutGlobal from "../styles/layoutArtistAlbum";
import * as S from "../styles/artist";
import CardArtist from "../components/CardArtist/CardArtist";
import TitlePages from "../components/Title/TitlePages";
import InputFilterArtists from "../components/InputFilterArtist/InputFilterArtists";
import Loading from "../components/Spinner/Spinner";
import useStore from "../hooks/useStore";

// ESTOU UTILIZANDO O useEffect e useState para treinar o uso para quando for usar uma API
function Artist() {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const { uploadedImage } = useStore();

  useEffect(() => {
    artistsDB.sort((a, s) => {
      if (a.name < s.name) {
        return -1;
      } else {
        return true;
      }
    });

    setArtists(artistsDB);
    setFilteredArtists(artistsDB);
  }, []);

  return (
    <>
      <LayoutGlobal.Section>
        <S.DivTitleInput>
          <TitlePages title={"álbuns"} />
          <InputFilterArtists
            artists={artists}
            setFilteredArtists={setFilteredArtists}
          />
        </S.DivTitleInput>

        {/* SEMPRE COLOCAR O PARÊNTESES DEPOIS DA ARROW FUNCTION PARA ELE RETORNAR OS VALORES */}
        <S.ContainerCards>
          {/* LOADING CONSIDERANDO O CARREGAMENTO DAS IMAGENS */}
          {/* {uploadedImage && <Loading />} */}

          {/* LOADING CONSIDERANDO O CARREGAMENTO DOS ITENS */}
          {filteredArtists.length === 0 && <Loading />}

          {filteredArtists.map((artist) => (
            <CardArtist
              key={artist.id}
              img={artist.img}
              name={artist.name}
              age={artist.age}
              state={artist.state}
            />
          ))}
        </S.ContainerCards>
      </LayoutGlobal.Section>
    </>
  );
}

export default Artist;

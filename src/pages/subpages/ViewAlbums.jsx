import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/albums";
import { useParams } from "react-router-dom";
import CardAlbum from "../../components/CardAlbum/CardAlbum";
import { TitleViewAlbum } from "../../styles/viewAlbums";
import useStore from "../../hooks/useStore";

export default function ViewAlbums() {
  const { getAllAlbunsArtist } = useStore();
  const { id } = useParams();

  const products = getAllAlbunsArtist(id);

  return (
    <LayoutGlobal.Section>
      <TitleViewAlbum>Álbuns do {id.toUpperCase()}</TitleViewAlbum>

      <S.ContainerCardsAlbums>
        {products.map((item) => (
          <CardAlbum
            key={item.id}
            img={item.img}
            name={item.name}
            artist={item.artist}
            releaseYear={item.releaseYear}
            price={item.price}
          />
        ))}
      </S.ContainerCardsAlbums>
    </LayoutGlobal.Section>
  );
}

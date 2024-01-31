import albumsDB from "../../database/albums.json";
import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/albums";
import { useParams } from "react-router-dom";
import CardAlbum from "../../components/CardAlbum/CardAlbum";
import { useEffect, useState } from "react";
import { TitleViewAlbum } from "../../styles/viewAlbums";

export default function ViewAlbums() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    albumsDB.map((album) => {
      if (id === album.artist) {
        setProducts((state) => {
          const newState = [...state, album];
          return newState;
        });
      }
    });
  }, []);

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

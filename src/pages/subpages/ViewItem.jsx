import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/viewItem";
import albumsDB from "../../database/albums.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OffCanvasExample from "../../components/OffCanvas/OffCanvas";
import ListaPlaylist from "../../components/ListPlaylist/listPlaylist";
import FormatCurrency from "../../utils/FormatCurrency";
import ResponsiveExample from "../../components/OffCanvas/OffCanvas";

function ViewItem() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  // NÃO FOI POSSÍVEL FAZER DESSA FORMA POIS ELE ESTÁ TENTANDO RENDERIZAR O
  // ARRAY PLAYLIST ANTES DE RENDERIZAR O ARRAY PRODUCT
  // const [product, setProduct] = useState([]);

  useEffect(() => {
    albumsDB.map((album) => {
      if (album.id === +id) {
        setProducts((state) => {
          const newState = [...state, album];
          return newState;
        });
      }
    });

    // const teste = albumsDB.find((album) => (album.id === +id ? album : ""));
    // setProduct(teste);
  }, []);

  return (
    <>
      <LayoutGlobal.Section>
        <S.TitleViewProduct>{`Álbuns > Produtos`}</S.TitleViewProduct>

        {products.map((album) => (
          <div key={album.id}>
            <S.ContentViewProduct>
              <img src={album.img} alt={`imagem do álbum ${album.name}`} />

              <S.WrapperInfoAlbums>
                <div>
                  <h2>Álbum {album.name}</h2>
                  <h3>
                    Artista <span>{album.artist}</span>
                  </h3>
                </div>
                <div>
                  <p className="price">{FormatCurrency(album.price, "BRL")}</p>
                  <p className="subtitle-price">
                    em até 3x de R$19,99 sem juros
                  </p>
                </div>

                <div>
                  <OffCanvasExample
                    name={`comprar`}
                    placement={`end`}
                    scroll={`false`}
                    album={album}
                  />
                </div>

                <ListaPlaylist list={album.playlist} />
              </S.WrapperInfoAlbums>
            </S.ContentViewProduct>

            <hr />

            <S.WrapperDescription>
              <h4>Descrição</h4>
              <p className="description">{album.description}</p>
              <p className="year">
                Ano de lançamento: <span>{album.releaseYear}</span>
              </p>
            </S.WrapperDescription>
          </div>
        ))}

        {/* {
          <div key={product.id}>
            <S.ContentViewProduct>
              <img src={product.img} alt={`imagem do álbum ${product.name}`} />

              <S.WrapperInfoAlbums>
                <div>
                  <h2>Álbum {product.name}</h2>
                  <h3>
                    Artista <span>{product.artist}</span>
                  </h3>
                </div>
                <div>
                  <p className="price">
                    {FormatCurrency(+product.price, "BRL")}
                  </p>
                  <p>em até 3x de R$19,99 sem juros</p>
                </div>

                <div>
                  <OffCanvasExample
                    name={`comprar`}
                    placement={`end`}
                    album={product}
                  />
                </div>
                <ListaPlaylist list={product.playlist} />
              </S.WrapperInfoAlbums>
            </S.ContentViewProduct>

            <hr />

            <S.WrapperDescription>
              <h4>Descrição</h4>
              <p className="description">{product.description}</p>
              <p className="year">
                Ano de lançamento: <span>{product.releaseYear}</span>
              </p>
            </S.WrapperDescription>
          </div>
        } */}
      </LayoutGlobal.Section>
    </>
  );
}

export default ViewItem;

import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/viewItem";
import { useParams } from "react-router-dom";
import OffCanvasExample from "../../components/OffCanvas/OffCanvas";
import ListaPlaylist from "../../components/ListPlaylist/listPlaylist";
import FormatCurrency from "../../utils/FormatCurrency";
import useStore from "../../hooks/useStore";

function ViewItem() {
  const { getAlbum } = useStore();
  const { id } = useParams();

  const product = getAlbum(id);

  return (
    <>
      <LayoutGlobal.Section>
        <S.TitleViewProduct>{`Álbuns > Produto`}</S.TitleViewProduct>

        {
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
                    {FormatCurrency(product.price, "BRL")}
                  </p>
                  <p>em até 3x de R$19,99 sem juros</p>
                </div>

                <div>
                  <OffCanvasExample
                    name={`comprar`}
                    placement={`end`}
                    scroll={true}
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
        }
      </LayoutGlobal.Section>
    </>
  );
}

export default ViewItem;

import { Playlist } from "./styleListPlaylist";

function ListaPlaylist({ list }) {
  return (
    <Playlist>
      <h4>Playlist</h4>
      {list.length > 0 ? (
        list.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <h5>Atualizando playlist</h5>
      )}
    </Playlist>
  );
}

export default ListaPlaylist;

// https://miro.medium.com/v2/resize:fit:720/format:webp/1*lkDusuxTlMZhj7Bpe4-xcA.jpeg
// https://lastfm.freetls.fastly.net/i/u/770x0/557d66d863935724dbb9fc0284ffb728.jpg

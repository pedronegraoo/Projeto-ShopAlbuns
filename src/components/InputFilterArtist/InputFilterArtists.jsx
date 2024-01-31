import { useRef } from "react";
import { Input } from "../InputFilterAlbums/styleInputFilter";

function InputFilterArtists({ artists, setFilteredArtists }) {
  const input = useRef();

  function InputChange() {
    const newArtists = artists.filter((artist) =>
      artist.name.toLowerCase().includes(input.current.value.toLowerCase())
    );
    setFilteredArtists(newArtists);
  }

  return (
    <Input
      type="text"
      placeholder="Pesquisar"
      ref={input}
      onChange={InputChange}
    />
  );
}

export default InputFilterArtists;

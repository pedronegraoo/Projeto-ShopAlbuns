import { useRef } from "react";
import { Input } from "./styleInputFilter";

function InputFilterAlbums({ albums, setFilteredAlbums }) {
  const input = useRef();

  function InputChange() {
    const newAlbums = albums.filter((album) =>
      album.name.toLowerCase().includes(input.current.value.toLowerCase())
    );
    setFilteredAlbums(newAlbums);
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

export default InputFilterAlbums;

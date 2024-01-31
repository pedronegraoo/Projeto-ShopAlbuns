import { Link, useLocation } from "react-router-dom";
import * as S from "./styleHeader";
import logo from "../../assets/logo/logo5.jpg";
import { PiHandbag } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";
import useStore from "../../hooks/useStore";

function Header() {
  const { pathname } = useLocation();

  const { storeAlbum } = useStore();

  return (
    <S.HeaderStyle>
      <Link to="/" className="linkLogo">
        <img src={logo} alt="logo" />
      </Link>

      <nav className="navbar">
        <Link
          to="/"
          className={`navLinkPages ${pathname === "/" ? "active" : ""}`}
        >
          Início
        </Link>
        <Link
          to="albums"
          className={`navLinkPages ${pathname === "/albums" ? "active" : ""}`}
        >
          Álbuns
        </Link>
        <Link
          to="artist"
          className={`navLinkPages ${pathname === "/artist" ? "active" : ""}`}
        >
          Artistas
        </Link>
      </nav>

      <S.WrapperWalletPerson>
        <Link to="/" className="person">
          <BsFillPersonFill />
        </Link>

        <Link to="cart" className="wallet">
          <PiHandbag />
          {storeAlbum.length > 0 && (
            <span className="numberProducts">{storeAlbum.length}</span>
          )}
        </Link>
      </S.WrapperWalletPerson>
    </S.HeaderStyle>
  );
}

export default Header;

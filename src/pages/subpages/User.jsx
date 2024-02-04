import { Link } from "react-router-dom";
import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/user";

function User() {
  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <LayoutGlobal.Section>
      <S.WrapperFormUser>
        <S.FormUser onSubmit={handleSubmit}>
          <h3>Entrar</h3>

          <p>Acesse sua conta aqui</p>

          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
            <p className="messageError">Senhas distintas, tente novamente</p>
          </div>

          <button type="submit">Entrar</button>
        </S.FormUser>

        <S.WrapperButtonRegister>
          <p>Cadastre-se </p>
          <Link to="register" className="linkRegister">
            Criar conta
          </Link>
        </S.WrapperButtonRegister>
      </S.WrapperFormUser>
    </LayoutGlobal.Section>
  );
}

export default User;

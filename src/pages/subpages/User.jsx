import { Link } from "react-router-dom";
import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/user";
import { useRef, useState } from "react";

function User() {
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(ev) {
    const { name, value } = ev.target;

    setData((state) => {
      const newState = { ...state, [name]: value };
      return newState;
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    alert("Deu certo");
    setData({
      email: "",
      password: "",
    });
  }

  function validateInputs() {
    let valid = false;

    if (data.email) {
      let pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (pattern.test(data.email)) {
        valid = true;
      } else {
        valid = false;
        refEmail.current.style.border = "1px solid red";
        return valid;
      }
    } else {
      valid = false;
      return valid;
    }

    refEmail.current.style.border = "none";

    if (data.password) {
      let matchPassword =
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/;

      if (matchPassword.test(data.password)) {
        valid = true;
      } else {
        valid = false;
        refPassword.current.style.border = "1px solid red";
        return valid;
      }
    } else {
      valid = false;
      return valid;
    }

    refPassword.current.style.border = "none";

    return valid;
  }

  validateInputs();

  return (
    <LayoutGlobal.Section>
      <S.WrapperFormUser>
        <S.FormUser onSubmit={handleSubmit}>
          <h3>Entrar</h3>
          <p>Acesse sua conta aqui</p>

          <div>
            <label htmlFor="email">E-mail</label>
            <input
              ref={refEmail}
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              ref={refPassword}
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <p className="messageError">Senhas distintas, tente novamente</p>
          </div>

          <button type="submit" disabled={validateInputs() === false}>
            Entrar
          </button>
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

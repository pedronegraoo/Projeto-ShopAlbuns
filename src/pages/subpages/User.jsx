import { Link, useNavigate } from "react-router-dom";
import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/user";
import { useRef, useState } from "react";

function User() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(ev) {
    const { name, value } = ev.target;

    setData((state) => {
      const newState = { ...state, [name]: value };
      return newState;
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    navigate("/");
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
        return valid;
      }
    } else {
      valid = false;
      return valid;
    }

    if (data.password) {
      let matchPassword =
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/;

      if (matchPassword.test(data.password)) {
        valid = true;
      } else {
        valid = false;
        return valid;
      }
    } else {
      valid = false;
      return valid;
    }

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

import { useRef, useState } from "react";
import * as LayoutGlobal from "../../styles/layoutArtistAlbum";
import * as S from "../../styles/resgisterUser";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function RegisterUser() {
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const messageError = useRef(null);
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmpassword: "",
    day: "",
    month: "",
    year: "",
  });
  let replaceBirthday = /[^0-9]/gi;

  function handleChange(ev) {
    const { name, value } = ev.target;

    setInputValue((state) => {
      const newState = { ...state, [name]: value };
      return newState;
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    console.log(validateInputs());

    console.log({ inputValue });
    alert("Conta cadastrada com sucesso");
    setInputValue({
      fullName: "",
      email: "",
      password: "",
      confirmpassword: "",
      day: "",
      month: "",
      year: "",
    });
  }

  function validateInputs() {
    let valid = false;

    if (inputValue.fullName) {
      const splitString = inputValue.fullName.split(" ");

      if (splitString[1]) {
        valid = true;
      } else {
        refName.current.style.border = "1px solid red";
        valid = false;
        return valid;
      }
    } else {
      valid = false;
      return valid;
    }

    refName.current.style.border = "1px solid #000";

    if (inputValue.email) {
      let pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (pattern.test(inputValue.email)) {
        valid = true;
      } else {
        refEmail.current.style.border = "1px solid red";
        valid = false;
        return valid;
      }
    } else {
      valid = false;
      return valid;
    }

    refEmail.current.style.border = "1px solid #000";

    if (inputValue.password) {
      let matchPassword =
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/;

      if (matchPassword.test(inputValue.password)) {
        valid = true;
      } else {
        refPassword.current.style.border = "1px solid red";
        valid = false;
        return valid;
      }
    } else {
      valid = false;
      return valid;
    }

    refPassword.current.style.border = "1px solid #000";

    if (inputValue.confirmpassword) {
      if (inputValue.password === inputValue.confirmpassword) {
        valid = true;
      } else {
        valid = false;
        messageError.current.style.visibility = "visible";
        return valid;
      }
    } else {
      valid = false;
      return valid;
    }

    messageError.current.style.visibility = "hidden";

    return valid;
  }

  validateInputs();

  return (
    <LayoutGlobal.Section>
      <S.WrapperLinkBackPage>
        <Link to="/user" className="linkBackPage">
          <FaArrowLeftLong />
          {/* Voltar */}
        </Link>
      </S.WrapperLinkBackPage>

      <S.WrapperForm>
        <S.FormRegister onSubmit={handleSubmit}>
          <h3>Criar conta</h3>

          <div className="contentForm">
            <label htmlFor="fullName">Nome completo</label>
            <input
              ref={refName}
              type="text"
              name="fullName"
              value={inputValue.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="contentForm">
            <label htmlFor="email">E-mail</label>
            <input
              ref={refEmail}
              type="email"
              name="email"
              value={inputValue.email}
              onChange={handleChange}
            />
          </div>

          <div className="contentBirthday">
            <label htmlFor="birthday">Data de Nascimento</label>
            <div className="inputsBirthday">
              <input
                className="inputDay"
                type="text"
                name="day"
                maxLength={2}
                value={inputValue.day.replace(replaceBirthday, "")}
                onChange={handleChange}
              />
              <input
                className="inputMonth"
                type="text"
                name="month"
                maxLength={2}
                value={inputValue.month.replace(replaceBirthday, "")}
                onChange={handleChange}
              />
              <input
                className="inputYear"
                type="text"
                name="year"
                maxLength={4}
                value={inputValue.year.replace(replaceBirthday, "")}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contentForm">
            <label htmlFor="password">Senha</label>
            <input
              ref={refPassword}
              type="password"
              name="password"
              value={inputValue.password}
              onChange={handleChange}
            />
          </div>

          <div className="contentForm">
            <label htmlFor="confirmpassword">Confirma Senha</label>
            <input
              type="password"
              name="confirmpassword"
              value={inputValue.confirmpassword}
              onChange={handleChange}
            />
            <p ref={messageError} className="messageError">
              Senhas distintas, tente novamente
            </p>
          </div>

          <button type="submit" disabled={validateInputs() === false}>
            Cadastrar
          </button>
        </S.FormRegister>
      </S.WrapperForm>
    </LayoutGlobal.Section>
  );
}

export default RegisterUser;

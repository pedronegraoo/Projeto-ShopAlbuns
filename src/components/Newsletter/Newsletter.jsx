import * as S from "./styleNewsletter";
import { BsFillSendFill } from "react-icons/bs";

function Newsletter() {
  return (
    <>
      <S.WrapperNewsletter>
        <h3>Assine nosso Newsletter</h3>
        <div className="inputs-newsletter">
          <S.InputNews type="text" name="name" placeholder="Nome:" />
          <S.InputNews type="email" name="email" placeholder="E-mail:" />
          <S.ButtonNews className="btn-newsletter">Cadastrar</S.ButtonNews>
          <S.ButtonNews className="icon-btn-newsletter">
            <BsFillSendFill />
          </S.ButtonNews>
        </div>
      </S.WrapperNewsletter>
    </>
  );
}

export default Newsletter;

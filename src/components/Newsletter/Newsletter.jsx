import * as S from "./styleNewsletter";

function Newsletter() {
  return (
    <>
      <S.WrapperNewsletter>
        <h3>Assine nosso Newsletter</h3>
        <div className="inputs-newsletter">
          <S.InputNews type="text" placeholder="Nome:" />
          <S.InputNews type="text" placeholder="E-mail:" />
          <S.ButtonNews>Cadastrar</S.ButtonNews>
        </div>
      </S.WrapperNewsletter>
    </>
  );
}

export default Newsletter;

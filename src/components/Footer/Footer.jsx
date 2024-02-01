import * as S from "./styleFooter";
import logoCard from "../../assets/bandeira-de-bancos.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import Newsletter from "../Newsletter/Newsletter";

function Footer() {
  return (
    <>
      <Newsletter />

      <S.FooterStyle>
        <S.ContentTop>
          <div className="divRedesInstitucional">
            <div className="redesSociais">
              <a href="http://" target="_blank">
                <FaFacebook />
              </a>

              <a href="http://" target="_blank">
                <FaInstagram />
              </a>

              <a href="http://" target="_blank">
                <FaXTwitter />
              </a>
            </div>

            <div>
              <h5 className="title-footer">Institucional</h5>
              <ul>
                <li>Quem somos</li>
                <li>Contato</li>
              </ul>
            </div>
          </div>

          <div className="divAjudaeSuporte">
            <h5 className="title-footer">Ajuda e Suporte</h5>
            <ul>
              <li>Rastrear pedido</li>
              <li>Política de Troca</li>
              <li>Prazo de entrega</li>
            </ul>
          </div>

          <div className="divAtendimento">
            <h5 className="title-footer">Atendimento</h5>
            <ul>
              <li>
                <FaWhatsapp className="iconWhatsapp" />
                (00)90000-0000
              </li>
              <li>
                <TfiEmail className="iconEmail" />
                contatoalbum@email.com
              </li>
              <li>Atendimento das 10 ás 16h</li>
            </ul>
          </div>
        </S.ContentTop>

        <S.ContentBottom>
          <h5 className="title-footer">Pagamentos</h5>
          <img src={logoCard} alt="imagem cartões" />
        </S.ContentBottom>

        <S.ContentInfoMarca>
          <div className="content-info-marca">
            <h4>shop álbuns</h4>
            <ul>
              <li>
                <b>CNPJ</b>: 00.000.000/0000-11
              </li>
              <li>
                <b>Razão social</b>: StormMind
              </li>
              <li>
                <b>Endereço</b>: Rua dos bobos, 11-Gloria, Rio de janeiro-RJ
              </li>
            </ul>

            <p>© 2023 StorMind. Todos os direitos reservados.</p>
          </div>
        </S.ContentInfoMarca>
      </S.FooterStyle>
    </>
  );
}

export default Footer;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import * as S from "./styleOffCanvas";
import { Link } from "react-router-dom";
import CardOffCanvas from "../CardOffCanvas/CardOffCanvas";
import FormatCurrency from "../../utils/FormatCurrency";
import useStore from "../../hooks/useStore";
import style from "./styleOff.module.css";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const { addAlbumInStore, totalSum, priceTotal } = useStore();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <S.Section>
      <Button
        className="btnCanvas"
        onClick={() => {
          handleShow();
          addAlbumInStore(props.album);
          totalSum();
        }}
      >
        {name}
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        // className={style.canvas}
        // className={`${style.canvas} w-25`}
        // className={`w-auto`}
        // style={{ width: "auto" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Itens no carrinho</Offcanvas.Title>
        </Offcanvas.Header>

        <S.WrapperContentCanvas>
          <S.BodyCanvas>
            <CardOffCanvas />
          </S.BodyCanvas>

          <S.FooterCanvas>
            <S.ResumoPedido>
              <h6>Resumo do pedido</h6>

              <div>
                <p>Subtotal </p>
                <p>{FormatCurrency(priceTotal, "BRL")}</p>
              </div>
            </S.ResumoPedido>

            <Link to="/cart" className="linkCart">
              Ver carrinho
            </Link>
          </S.FooterCanvas>
        </S.WrapperContentCanvas>
      </Offcanvas>
    </S.Section>
  );
}

export default OffCanvasExample;

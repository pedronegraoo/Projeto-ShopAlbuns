import * as S from "./styleModalCart";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import useStore from "../../hooks/useStore";

function MyVerticallyCenteredModal(props) {
  return (
    <Link to="/">
      <Modal
        {...props}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Agradecemos a sua compra!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Confirmação de compra</h4>
          <p>
            Enviamos um e-mail confirmando sua compra junto com a nota fiscal.
            Acampanhe seu e-mail pois iremos enviar o código de rastreio do(s)
            produto(s)
          </p>
        </Modal.Body>

        <S.ModalFooter>
          <Modal.Footer>
            <Link to="/" onClick={props.onHide} className="btnClosed">
              Fechar
            </Link>
          </Modal.Footer>
        </S.ModalFooter>
      </Modal>
    </Link>
  );
}

function ModalCart({ nameBtn }) {
  const [modalShow, setModalShow] = useState(false);
  const { priceTotal, finishBuy } = useStore();

  return (
    <S.Section>
      {priceTotal > 0 ? (
        <Button
          className="btnModal"
          onClick={() => {
            setModalShow(true);
            finishBuy();
          }}
        >
          {nameBtn}
        </Button>
      ) : (
        <Button
          disabled
          className="btnModal"
          onClick={() => {
            setModalShow(true);
            finishBuy();
          }}
        >
          {nameBtn}
        </Button>
      )}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </S.Section>
  );
}

export default ModalCart;

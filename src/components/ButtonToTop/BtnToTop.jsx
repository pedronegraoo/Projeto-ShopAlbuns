import * as S from "./styleBtnToTop";
import { IoIosArrowUp } from "react-icons/io";
import useStore from "../../hooks/useStore";

function BtnToTop() {
  const { scrollTop, visible } = useStore();

  return (
    <div
      style={{ display: visible ? "block" : "none" }}
      className="wrapperBackToTop"
    >
      <S.BtnTop onClick={scrollTop}>
        <IoIosArrowUp className='iconBtnToTop' />
      </S.BtnTop>
    </div>
  );
}

export default BtnToTop;

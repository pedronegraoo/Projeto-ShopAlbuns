import Carousel from "react-bootstrap/Carousel";
import { DivCarousel } from "./styleCarrossel";
import img from "../../assets/carrossel/img-carrossel4.jpeg";

function Carrossel() {
  return (
    // <Carousel className={style.container} data-bs-theme="dark">
    <DivCarousel>
      <Carousel className="containerCarrossel" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="imgCarrossel"
            // className={style.imgCarrossel}
            src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarrossel"
            src="https://images.pexels.com/photos/159206/mixing-table-mixing-music-musician-159206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img className="imgCarrossel" src={img} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </DivCarousel>
  );
}

export default Carrossel;

import Carousel from "react-bootstrap/Carousel";
import style from "./carrossel.module.css";

function Carrossel() {
  return (
    <Carousel className={style.container} data-bs-theme="dark">
      <Carousel.Item>
        <img
          className={style.imgCarrossel}
          src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={style.imgCarrossel}
          // src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src="https://images.pexels.com/photos/159206/mixing-table-mixing-music-musician-159206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={style.imgCarrossel}
          // src="https://images.unsplash.com/photo-1466428996289-fb355538da1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src="https://images.pexels.com/photos/1128440/pexels-photo-1128440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;

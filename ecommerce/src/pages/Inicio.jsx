import { Carousel } from "react-bootstrap";

function Inicio() {
  return (
    <Carousel fade>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 banner-imagen"
          src="/imagenes/banner1.jpg"
          alt="Banner 1"
        />
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 banner-imagen"
          src="/imagenes/banner2.jpg"
          alt="Banner 2"
        />
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 banner-imagen"
          src="/imagenes/banner3.jpg"
          alt="Banner 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Inicio;
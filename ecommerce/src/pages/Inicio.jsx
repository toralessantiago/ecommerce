import { Carousel, Container } from "react-bootstrap";
import { productos } from "../../data/productos.js";
import { Link } from "react-router-dom";
import ProductoCard from "../components/ProductoCard";

import "../styles/inicio.css";
import "../styles/carousel.css";
import "../styles/layout.css";
import "../styles/ui-interacciones.css";

function Inicio() {
  const lanzamientos = productos.slice(0, 4);
  const ofertas = productos.slice(4, 8);
  const promociones = productos.slice(8, 12);

  return (
    <div>
      {/*CAROUSEL BANNERS*/}
      <Carousel
        fade
        controls={false}
        interval={4000}
        pause={false}
      >
        <Carousel.Item>
          <Link to="/producto/13">
            <img
              className="d-block w-100 banner-imagen"
              src="/imagenes/banner1.jpg"
              alt="Banner 1"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/producto/15">
            <img
              className="d-block w-100 banner-imagen"
              src="/imagenes/banner2.jpg"
              alt="Banner 2"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/producto/14">
            <img
              className="d-block w-100 banner-imagen"
              src="/imagenes/banner3.jpg"
              alt="Banner 3"
            />
          </Link>
        </Carousel.Item>
      </Carousel>

      {/*LANZAMIENTOS*/}
      <Container className="seccion">
        <div className="seccion-header">
          <h2 className="text-center fw-bold text-uppercase mt-4">LANZAMIENTOS</h2>
        </div>

        <div className="grid-productos">
          {lanzamientos.map((p) => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      </Container>

      {/*OFERTAS*/}
      <Container className="seccion">
        <div className="seccion-header">
          <h2 className="text-center fw-bold text-uppercase mt-4">OFERTAS</h2>
        </div>

        <div className="grid-productos">
          {ofertas.map((p) => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      </Container>

      {/*PROMOCIONES*/}
      <Container className="seccion">
        <div className="seccion-header">
          <h2 className="text-center fw-bold text-uppercase mt-4">PROMOCIONES</h2>
        </div>

        <div className="grid-productos">
          {promociones.map((p) => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Inicio;
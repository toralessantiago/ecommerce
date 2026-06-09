import { Container, Row, Col, Button } from 'react-bootstrap';
import imagenTienda from "/src/assets/imagen-tienda.png";
import imagenTienda2 from "/src/assets/tienda2.jpg";

function Nosotros() {
  return (
    <Container className="mt-md-4 mt-2">
      <Row className="align-items-center mb-5 gy-4">
        <Col xs={12} md={6} className="text-center text-md-start">
          <h1 className="display-4 fw-bold text-dark mb-3">Nosotros</h1>
          <h2 className="mb-4">Quiénes somos</h2>
          <p className="lead text-muted mb-4">
            APEX es una marca emergente de indumentaria y equipamiento deportivo orientada al alto rendimiento, que fusiona diseño innovador, tecnología textil y colaboraciones de primer nivel para potenciar a atletas y entusiastas del deporte.
          </p>
          <h2 className="mb-4">Nuestra propuesta</h2>
          <p className="lead text-muted mb-4">
            Máxima Transpirabilidad, Diseño Innovador y Rendimiento Superior. APEX no solo viste al deportista, sino que le brinda las herramientas técnicas necesarias para alcanzar su máximo potencial ("su ápice"), combinando comodidad diaria con la resistencia que exige el deporte competitivo.
          </p>
        </Col>

        <Col xs={12} md={6} className="text-center">
          <img
            src={ imagenTienda }
            alt="Ilustración de soporte"
            className="img-fluid mb-4"
            style={{ maxHeight: '350px', objectFit: 'contain' }}
          />

          <img
            src={ imagenTienda2 }
            alt="Ilustración de soporte"
            className="img-fluid"
            style={{ maxHeight: '350px', objectFit: 'contain' }}
          />
        </Col>
      </Row>




    </Container>
  );
}

export default Nosotros;
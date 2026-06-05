import { Container, Row, Col, Button } from 'react-bootstrap';
import miLogo from "/src/assets/logo.png";
import publicidadImg from "/src/assets/newProduct.png";

function Contacto() {
  return (
    <div className="contacto-page-container">
      <Container className="contacto-container">
        <Row className="align-items-center target-row">
          <Col xs={12} md={6} className="text-section">
            <h1 className="soporte-title">Soporte</h1>
            <p className="soporte-description">
              En nuestro espacio de soporte estamos comprometidos con brindarte la mejor experiencia. Ponete con nosotros, nos encantaría saber de vos, escuchar tus sugerencias o asistirte ante cualquier eventualidad con nuestra plataforma.
            </p>
            <Button 
              href="mailto:roaalanizz@gmail.com" 
              className="btn-soporte-secondary">
              Contáctanos
            </Button>
          </Col>
          
          <Col xs={12} md={6} className="image-section">
            <img 
              src={miLogo} 
              alt="Ilustración de soporte" 
              className="img-fluid soporte-ilustration"
            />
          </Col>
        </Row>

        <Row className="publicidad-row">
          <Col xs={12} lg={10} className="publicidad-col">
            <img 
              src={publicidadImg} 
              alt="Publicidad Línea Apex Pro" 
              className="publicidad-banner"
            />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Contacto;
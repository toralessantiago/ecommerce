import { Container, Row, Col, Button } from 'react-bootstrap';
import miLogo from "/src/assets/logo.png";
import publicidadImg from "/src/assets/newProduct.png";

function Contacto() {
  return (
      <Container className="mt-md-4 mt-2">
        
        <Row className="align-items-center mb-5 gy-4">
          <Col xs={12} md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold text-dark mb-3">Soporte</h1>
            <p className="lead text-muted mb-4">
              En nuestro espacio de soporte estamos comprometidos con brindarte la mejor experiencia. 
              Ponete con nosotros, nos encantaría saber de vos, escuchar tus sugerencias o asistirte 
              ante cualquier eventualidad con nuestra plataforma.
            </p>
            <Button 
              href="mailto:roaalanizz@gmail.com" 
              variant="dark" 
              className="px-4 py-2 fw-semibold rounded-pill shadow-sm">
              Contáctanos
            </Button>
          </Col>
          
          <Col xs={12} md={6} className="text-center">
            <img 
              src={miLogo} 
              alt="Ilustración de soporte" 
              className="img-fluid"
              style={{ maxHeight: '350px', objectFit: 'contain' }}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} lg={10} className="text-center">
            <img 
              src={publicidadImg} 
              alt="Publicidad Línea Apex Pro" 
              className="img-fluid rounded shadow-sm w-100"
            />
          </Col>
        </Row>

      </Container>
  );
}

export default Contacto;
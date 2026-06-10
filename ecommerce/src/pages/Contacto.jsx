import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Collapse,
  Alert,
} from "react-bootstrap";

import miLogo from "/src/assets/logo.png";
import publicidadImg from "/src/assets/newProduct.png";

function Contacto() {
  const LIMITE_MENSAJE = 500;

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [validated, setValidated] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setEnviado(true);
    setValidated(false);

    form.reset();

    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  return (
    <Container className="mt-md-4 mt-2">
      <Row className="align-items-center mb-5 gy-4">
        <Col xs={12} md={6} className="text-center text-md-start">
          <h1 className="display-4 fw-bold text-dark mb-3">Soporte</h1>

          <p className="lead text-muted mb-4">
            En nuestro espacio de soporte estamos comprometidos con brindarte la
            mejor experiencia. Ponete en contacto con nosotros, nos encantaría
            saber de vos, escuchar tus sugerencias o asistirte ante cualquier
            eventualidad con nuestra plataforma.
          </p>

          <Button
            variant="dark"
            className="px-4 py-2 fw-semibold rounded-pill shadow-sm"
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          >
            Contáctanos
          </Button>
        </Col>
      </Row>

      {/* FORMULARIO DESPLEGABLE */}

      <Collapse in={mostrarFormulario}>
        <div>
          <Row className="justify-content-center mb-5">
            <Col md={8} lg={7}>
              <div className="p-4 border rounded shadow-sm bg-white">
                <h3 className="mb-4 text-center">Formulario de Contacto</h3>

                {enviado && (
                  <Alert variant="success">
                    ¡Mensaje enviado correctamente!
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Ingresá tu nombre"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingresá tu nombre.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Ingresá tu apellido"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingresá tu apellido.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      placeholder="ejemplo@email.com"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingresá un email válido.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Comentarios, consultas o reclamos</Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={5}
                      required
                      value={mensaje}
                      maxLength={LIMITE_MENSAJE}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="Escribí tu mensaje..."
                      style={{
                        resize: "none",
                      }}
                    />
                    <div
                      className="text-end text-muted mb-4"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {mensaje.length}/{LIMITE_MENSAJE}
                    </div>

                    <Form.Control.Feedback type="invalid">
                      Este campo es obligatorio.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="dark" type="submit" className="px-5">
                      Enviar
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Collapse>

      <Row className="mt-5">
        <Col xs={12} className="d-flex justify-content-center">
          <img
            src={miLogo}
            alt="Soporte"
            className="img-fluid"
            style={{
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;

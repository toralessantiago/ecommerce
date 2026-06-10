import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../context/CarritoContext";
import CarritoItem from "../components/CarritoItem";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  Spinner,
  Modal,
} from "react-bootstrap";
import FormularioCompra from "../components/FormularioCompra";
import { PagoExitoso } from "../components/PagoExitoso";
import formatearPrecio from "../../utils/formatearPrecio";

import "../styles/carrito.css";

function Carrito() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [datosPago, setDatosPago] = useState(null);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [loading, setLoading] = useState(true);
  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0,
  );
  const cantidadUnidades = carrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0,
  );

  const finalizarSimulacion = (datos) => {
    setDatosPago(datos);
    setMostrarFormulario(false);
    setCompraExitosa(true);
    vaciarCarrito();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" />
        <p className="mt-3">Cargando carrito...</p>
      </Container>
    );
  }

  if (carrito.length === 0 && !compraExitosa) {
    return (
      <Container className="mt-5">
        <Card className="text-center">
          <Card.Body>
            <p>Carrito vacío</p>
            <p className="text-muted mb-0">
              Agregá algunos productos para comenzar tu compra.
            </p>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <>
      <Container className="mt-4">
        {compraExitosa ? (
          <PagoExitoso datos={datosPago} />
        ) : mostrarFormulario ? (
          <FormularioCompra
            alTerminar={finalizarSimulacion}
            totalAPagar={total}
          />
        ) : (
          <Row>
            <Col md={8}>
              {carrito.map((producto) => (
                <CarritoItem
                key={`${producto.id}-${producto.talle}`}
                producto={producto} />
              ))}
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <h4>Resumen de compra</h4>
                  <hr />
                  <p>Productos: {carrito.length}</p>
                  <p>Total unidades: {cantidadUnidades}</p>
                  <h5>Total: ${formatearPrecio(total)}</h5>
                  <Button
                    variant="dark"
                    className="w-100"
                    onClick={() => setMostrarFormulario(true)}
                  >
                    Finalizar compra
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="w-100 mt-2"
                    onClick={() => setMostrarConfirmacion(true)}
                  >
                    Vaciar carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>

      <Modal
        show={mostrarConfirmacion}
        onHide={() => setMostrarConfirmacion(false)}
        centered
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro de que desea vaciar el carrito?</Modal.Body>

        <Modal.Footer className="border-0">
          <Button
            variant="secondary"
            onClick={() => setMostrarConfirmacion(false)}
          >
            Cancelar
          </Button>

          <Button
            variant="danger"
            onClick={() => {
              vaciarCarrito();
              setMostrarConfirmacion(false);
            }}
          >
            Vaciar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Carrito;

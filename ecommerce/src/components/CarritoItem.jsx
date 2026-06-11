import { useContext } from "react";
import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";
import formatearPrecio from "../../utils/formatearPrecio";

function CarritoItem({ producto }) {
  const { incrementarCantidad, decrementarCantidad, eliminarDelCarrito } =
    useContext(CarritoContext);

  const imagen =
    Array.isArray(producto.imagenes) && producto.imagenes.length > 0
      ? `${import.meta.env.BASE_URL}${producto.imagenes[0]}`
      : null;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="align-items-center">
          <Col md={3}>
            {imagen && (
              <img
                src={imagen}
                alt={producto.nombre}
                className="img-fluid rounded"
              />
            )}
          </Col>

          {/* INFO */}
          <Col md={5}>
            <h5>{producto.nombre}</h5>

            {producto.talle && (
              <p className="mb-1">
                <strong>Talle:</strong> {producto.talle}
              </p>
            )}

            <p className="text-muted mb-1">
              Precio por unidad: ${formatearPrecio(producto.precio)}
            </p>

            <p className="fw-bold mb-0">
              Subtotal: ${formatearPrecio(producto.precio * producto.cantidad)}
            </p>
          </Col>

          <Col md={4}>
            <ButtonGroup className="mb-2">
              <Button
                variant="outline-secondary"
                onClick={() => decrementarCantidad(producto.id, producto.talle)}
              >
                -
              </Button>

              <Button variant="light" disabled>
                {producto.cantidad}
              </Button>

              <Button
                variant="outline-secondary"
                disabled={producto.cantidad >= producto.stock}
                onClick={() => incrementarCantidad(producto.id, producto.talle)}
              >
                +
              </Button>
            </ButtonGroup>

            <div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => eliminarDelCarrito(producto.id, producto.talle)}
              >
                Eliminar
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CarritoItem;

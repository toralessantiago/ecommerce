import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import CarritoItem from "../components/CarritoItem";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import FormularioCompra from "../components/FormularioCompra";
import { PagoExitoso } from "../components/PagoExitoso";

function Carrito() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [datosPago, setDatosPago] = useState(null);

  const { carrito } = useContext(CarritoContext);
  const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  const cantidadUnidades = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);

  const finalizarSimulacion = (datos) => {
    setDatosPago(datos);
    setMostrarFormulario(false);
    setCompraExitosa(true);
  };

  if (carrito.length === 0 && !compraExitosa) {
    return (
      <Container className="mt-5">
        <Card className="text-center">
          <Card.Body>
            <p>🛒 Carrito vacío</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      {compraExitosa ? (
        <PagoExitoso datos={datosPago} />
      ) : mostrarFormulario ? (
        <FormularioCompra alTerminar={finalizarSimulacion} totalAPagar={total} />
      ) : (
        <Row>
          <Col md={8}>
            {carrito.map(producto => (
              <CarritoItem key={producto.id} producto={producto} />
            ))}
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h4>Resumen de compra</h4>
                <hr />
                <p>Productos: {carrito.length}</p>
                <p>Total unidades: {cantidadUnidades}</p>
                <h5>Total: ${total.toFixed(2)}</h5>
                <Button
                  variant="dark"
                  className="w-100"
                  onClick={() => setMostrarFormulario(true)}
                >
                  Finalizar compra
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Carrito;
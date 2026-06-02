import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import CarritoItem from "../components/CarritoItem";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

function Carrito() {
    const { carrito } = useContext(CarritoContext);
    const total = carrito.reduce( (acc, producto) => acc + producto.precio * producto.cantidad, 0 );
    const cantidadUnidades = carrito.reduce( (acc, producto) => acc + producto.cantidad, 0 );

    if (carrito.length === 0) {
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
                <Button variant="dark" className="w-100">Finalizar compra</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      );
    }

export default Carrito;
import { useState } from "react";
import { Col, Container, Row, Form, Alert, Button } from "react-bootstrap";
import styles from "../../styles/global.css"
import { productos } from "../../data/productos";



function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [rangoDePrecio, setRangoDePrecio] = useState < [numero, numero] > ([0, 85000]);
  const [stock, setStock] = useState(false)

  const productosFiltrados = productos.filter((p) => {
    const busquedaPorNombre = (p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    const busquedaPorCategoria = (p.categoria === categoria);
    const busquedaPorPrecio = (p.precio >= rangoDePrecio[0] && p.precio <= rangoDePrecio[1])
    const busquedaPorStock = (p.stock > 0);

    return busquedaPorNombre && busquedaPorCategoria && busquedaPorPrecio && busquedaPorStock;
  })
  return (
    <div className="mt-4">
      <Container>
        <Form.Group className="mb-3">
          <Form.Label>Buscar producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribí el nombre del producto"
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <Form.Check label="Solo productos con stock"
            onChange={(e) => setStock(e.target.checked)}>

          </Form.Check>

        </Form.Group>

        {productosFiltrados.length === 0 && (
          <Alert variant="warning">Producto no encontrado</Alert>
        )}

        <Row className="g-4">
          {productosFiltrados.map((p) => (
            <Col md={3}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{p.nombre}</Card.Title>
                  <Card.Text>Precio: ${p.precio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );

}

export default Productos;
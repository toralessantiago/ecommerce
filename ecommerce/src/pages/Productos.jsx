import { useState } from "react";
import { Col, Container, Row, Form, Alert, Card, Button } from "react-bootstrap";
import "../../styles/global.css";
import { productos } from "../../data/productos";

import BotonAgregar from "../components/BotonAgregar";

function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [rangoDePrecio, setRangoDePrecio] = useState([0, 85000]);
  const [stock, setStock] = useState(false)
  const [hoveredId, setHoveredId] = useState(null);

  const productosFiltrados = productos.filter((p) => {
    const busquedaPorNombre = (p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    const busquedaPorCategoria = categoria === "Todas" ? true : p.categoria === categoria;
    const busquedaPorPrecio = (p.precio >= rangoDePrecio[0] && p.precio <= rangoDePrecio[1]);
    const busquedaPorStock = stock ? p.stock > 0 : true;

    return busquedaPorNombre && busquedaPorCategoria && busquedaPorPrecio && busquedaPorStock;
  })
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Categoría seleccionada: </Form.Label>

              <Form.Select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Todas">Todas</option>
                <option value="Indumentaria">Indumentaria</option>
                <option value="Calzado">Calzado</option>
                <option value="Abrigo">Abrigo</option>
                <option value="Accesorios">Accesorios</option>
              </Form.Select>
              <Form.Label>Buscar producto: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribí el nombre del producto"
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <Form.Check label="Solo productos con stock"
                onChange={(e) => setStock(e.target.checked)}>

              </Form.Check>
              <Form.Label>Rango de precio: ${rangoDePrecio[0]} a ${rangoDePrecio[1]}</Form.Label>
              <Form.Range
                min={0}
                max={85000}
                step={1000}
                value={rangoDePrecio[1]}
                onChange={(e) => setRangoDePrecio([0, e.target.value])}>
              </Form.Range>

            </Form.Group>
          </Col>
          <Col md={9}>
            {productosFiltrados.length === 0 && (
              <Alert variant="warning">Producto no encontrado</Alert>
            )}

            <Row className="g-4">
              {productosFiltrados.map((p) => (
                <Col md={3} key={p.id}>
                  <Card className="h-100">
                    <div
                      className="caja-imagen"
                      onMouseEnter={() => setHoveredId(p.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Card.Img variant="top"
                        src={hoveredId === p.id ? p.imagenhover : p.imagen}
                        className="imagen-fluida"
                        alt={`Fotografía de ${p.nombre}`} />
                    </div>
                    <Card.Body>
                      <Card.Title>{p.nombre}</Card.Title>
                      <Card.Text>Precio: ${p.precio}</Card.Text>
                      <BotonAgregar producto={p} />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default Productos;
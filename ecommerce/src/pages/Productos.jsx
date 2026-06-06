import { useState } from "react";
import { Col, Container, Row, Form, Alert } from "react-bootstrap";
import { productos } from "../../data/productos";
import ProductoCard from "../components/ProductoCard";
import "../styles/productos.css";
import "../styles/talles.css";

function Productos() {
  const [categoria, setCategoria] = useState("Todas");
  const [rangoDePrecio, setRangoDePrecio] = useState([0, 200000]);
  const [stock, setStock] = useState(false);

  const maxPrecio = Math.max(...productos.map((p) => p.precio));

  // FILTRO SOLO DE CATÁLOGO
  const productosFiltrados = productos.filter((p) => {
    const categoriaOk = categoria === "Todas" || p.categoria === categoria;

    const precioOk =
      p.precio >= rangoDePrecio[0] && p.precio <= rangoDePrecio[1];

    const stockOk = stock ? p.stock > 0 : true;

    return categoriaOk && precioOk && stockOk;
  });

  return (
    <div className="mt-4">
      <Container>
        <Row>
          {/* FILTROS */}
          <Col md={3}>
            <Form.Group className="filtros-productos mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Todas">Todas</option>
                <option value="Indumentaria">Indumentaria</option>
                <option value="Calzado">Calzado</option>
                <option value="Abrigo">Abrigo</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Futbol">Fútbol</option>
              </Form.Select>

              <div className="mt-3">
                <Form.Check
                  label="Solo productos con stock"
                  onChange={(e) => setStock(e.target.checked)}
                />
              </div>

              <div className="mt-3">
                <Form.Label>
                  Precio: ${rangoDePrecio[0]} - ${rangoDePrecio[1]}
                </Form.Label>

                <Form.Range
                  min={0}
                  max={maxPrecio}
                  step={1000}
                  value={rangoDePrecio[1]}
                  onChange={(e) =>
                    setRangoDePrecio([0, Number(e.target.value)])
                  }
                />
              </div>
            </Form.Group>
          </Col>

          {/* PRODUCTOS */}
          <Col md={9}>
            {productosFiltrados.length === 0 && (
              <Alert variant="warning">No se encontraron productos</Alert>
            )}

            <Row className="g-4">
              {productosFiltrados.map((p) => (
                <Col md={3} key={p.id}>
                  <ProductoCard producto={p} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
  console.log("TOTAL PRODUCTOS:", productos.length);
  console.log(productos);
}

export default Productos;

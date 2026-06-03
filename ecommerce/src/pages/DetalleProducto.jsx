import { useParams } from "react-router-dom";
import { productos } from "/data/productos";

import { useState } from "react";

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import BotonAgregar from "../components/BotonAgregar";
import "/styles/global.css";

function DetalleProducto() {
  const { id } = useParams();

  const producto = productos.find((p) => p.id === Number(id));

  // validación por si no existe el producto
  if (!producto) {
    return (
      <Container className="mt-5 text-center">
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }

  // array local de imágenes
  const imagenes = [producto.imagen, producto.imagenhover].filter(Boolean);

  // imagen principal
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);

  return (
    <Container className="mt-5">
      <Row className="g-4 align-items-start">
        {/* MINIATURAS */}
        <Col xs={12} md={2}>
          <div className="d-flex d-md-block gap-2 overflow-auto">
            {imagenes.map((img, index) => (
              <Card
                key={index}
                className="p-1 flex-shrink-0 miniatura-producto"
                onClick={() => setImagenSeleccionada(img)}
                style={{
                  cursor: "pointer",
                }}
              >
                <Card.Img src={img} />
              </Card>
            ))}
          </div>
        </Col>

        {/* IMAGEN PRINCIPAL */}
        <Col xs={12} md={5}>
          <img
            key={imagenSeleccionada}
            src={imagenSeleccionada}
            alt={producto.nombre}
            className="img-fluid w-100 rounded imagen-principal-animada"
            style={{
              maxHeight: "550px",
              objectFit: "contain",
            }}
          />
        </Col>

        {/* INFO PRODUCTO */}
        <Col xs={12} md={5}>
          <p className="text-muted mb-1">{producto.categoria}</p>

          <h1 className="fw-bold">{producto.nombre}</h1>

          <h2 className="my-4 fw-bold">${producto.precio}</h2>

          <p className="mb-4">{producto.descripcion}</p>

          <p>
            <strong>Stock:</strong>{" "}
            {producto.stock > 0 ? `${producto.stock} disponibles` : "Sin stock"}
          </p>

          <BotonAgregar producto={producto} />
        </Col>
      </Row>

      {/* DESCRIPCIÓN */}
      <Row className="mt-5">
        <Col>
          <h3 className="fw-bold mb-3">Descripción del producto</h3>

          <p>{producto.descripcion}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProducto;
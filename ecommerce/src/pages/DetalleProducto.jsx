import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { productos } from "../../data/productos";
import BotonAgregar from "../components/BotonAgregar";
import Error404 from "./Error404";
import formatearPrecio from "../../utils/formatearPrecio";

function DetalleProducto() {
  const { id } = useParams();

  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <Error404 />;
  }

  const imagenes =
    producto.imagenes ||
    [producto.imagen, producto.imagenhover].filter(Boolean);

  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);

  const [talle, setTalle] = useState("");
  const [errorTalle, setErrorTalle] = useState(false);

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
                style={{ cursor: "pointer" }}
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

        {/* INFO */}
        <Col xs={12} md={5}>
          <p className="text-muted mb-1">{producto.categoria}</p>

          <h1 className="fw-bold">{producto.nombre}</h1>

          <h2 className="my-4 fw-bold">${formatearPrecio(producto.precio)}</h2>

          <p>
            <strong>Stock:</strong>{" "}
            {producto.stock > 0 ? `${producto.stock} disponibles` : "Sin stock"}
          </p>

          {/* TALLES */}
          {producto.talles?.length > 0 && (
            <>
              <h5 className="mt-4 mb-2">Seleccionar talle</h5>

              <div className="talles-container mb-3">
                {producto.talles.map((t) => (
                  <button
                    key={t}
                    type="button"
                    disabled={producto.stock === 0}
                    aria-label={`Talle ${t}`}
                    className={`talle-chip ${talle === t ? "active" : ""} ${
                      producto.stock === 0 ? "disabled-talle" : ""
                    }`}
                    onClick={() => {
                      if (producto.stock === 0) return;
                      setTalle(t);
                      setErrorTalle(false);
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {errorTalle && (
            <p className="text-danger">
              Seleccioná un talle antes de continuar.
            </p>
          )}

          <BotonAgregar
            producto={producto}
            talle={talle}
            setErrorTalle={setErrorTalle}
          />
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

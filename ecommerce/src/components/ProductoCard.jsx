import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BotonAgregar from "./BotonAgregar";
import formatearPrecio from "../../utils/formatearPrecio";

function ProductoCard({ producto }) {
  const [hover, setHover] = useState(false);
  const [talle, setTalle] = useState("");
  const [errorTalle, setErrorTalle] = useState(false);

  const imagenes =
    Array.isArray(producto.imagenes) && producto.imagenes.length > 0
      ? producto.imagenes
      : [];

  const imagenPrincipal = imagenes[0] || "placeholder.png";

  const talles = Array.isArray(producto.talles) ? producto.talles : [];

  return (
    <Card
      className="producto-card-hover h-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setTalle("");
        setErrorTalle(false);
      }}
    >
      {/* IMAGEN */}
      <Link to={`/producto/${producto.id}`} style={{ textDecoration: "none" }}>
        <div className="producto-img-container">
          <Card.Img
            src={imagenPrincipal}
            alt={producto.nombre}
            className="producto-img"
          />
        </div>
      </Link>

      {/* INFO */}
      <Card.Body className="producto-body">
        <Card.Title className="titulo">
          <Link
            to={`/producto/${producto.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {producto.nombre}
          </Link>
        </Card.Title>

        <Card.Text className="precio">${formatearPrecio(producto.precio)}</Card.Text>

        {/* HOVER PANEL */}
        <div className={`hover-panel ${hover ? "show" : ""}`}>
          {/* TALLES */}
          {producto.stock > 0 && (
            <div className="talles-overlay">
              {talles.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`talle-chip ${talle === t ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    setTalle(t);
                    setErrorTalle(false);
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {/* ERROR */}
          {errorTalle && (
            <small className="text-danger d-block mb-2">
              Seleccioná un talle
            </small>
          )}

          {/* BOTÓN */}
          <BotonAgregar
            producto={producto}
            talle={talle}
            setErrorTalle={setErrorTalle}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;

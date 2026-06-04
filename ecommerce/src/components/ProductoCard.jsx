import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import BotonAgregar from "./BotonAgregar";

function ProductoCard({ producto }) {
  const [hover, setHover] = useState(false);

  return (
    <Card className="h-100">
      <Link to={`/producto/${producto.id}`}>
        <div
          className="caja-imagen"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ cursor: "pointer" }}
        >
          <Card.Img
            variant="top"
            src={hover ? producto.imagenhover : producto.imagen}
            className="imagen-fluida"
            alt={`Fotografía de ${producto.nombre}`}
          />
        </div>
      </Link>

      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>

        <Card.Text>
          ${producto.precio}
        </Card.Text>

        <BotonAgregar producto={producto} />
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;
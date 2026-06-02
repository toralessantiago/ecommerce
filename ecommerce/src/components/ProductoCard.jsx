import { productos } from "../../data/productos"
// import { onAgregar } from "../components/CarritoItem"
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

function ProductoCard({ producto }) {
  const [hover, setHover] = useState(false);

  return (
    <Card className="h-100">
      <div
        className="caja-imagen"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Card.Img
          variant="top"
          src={hover ? producto.imagenhover : producto.imagen}
          className="imagen-fluida"
          alt={`Fotografía de ${producto.nombre}`}
        />
      </div>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
        <Button variant="outline-primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;


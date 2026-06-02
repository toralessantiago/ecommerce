import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";

function BotonAgregar({ producto }) {

    const { agregarAlCarrito } = useContext(CarritoContext);

    return (
        <Button
            variant="outline-primary"
            disabled={producto.stock === 0}
            onClick={() => agregarAlCarrito(producto)}
        >
            {producto.stock === 0
                ? "Sin stock"
                : "Agregar al carrito"}
        </Button>
    );
}

export default BotonAgregar;
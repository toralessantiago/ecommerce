import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";

function BotonAgregar({ producto }) {

    const { carrito, agregarAlCarrito } = useContext(CarritoContext);
    const productoEnCarrito = carrito.find(item => item.id === producto.id);
    const cantidadEnCarrito = productoEnCarrito?.cantidad || 0;
    return (
        <Button
            variant="outline-primary"
            disabled={producto.stock === 0 || cantidadEnCarrito >= producto.stock}
            onClick={() => agregarAlCarrito(producto)}
        >
            {cantidadEnCarrito >= producto.stock
                ? "Sin stock"
                : "Agregar al carrito"}
        </Button>
    );
}

export default BotonAgregar;
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function BotonAgregar({
  producto,
  talle,
  cantidadEnCarrito = 0,
  setErrorTalle = () => {},
}) {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleClick = () => {
    if (producto.talles?.length > 0 && !talle) {
      setErrorTalle(true);
      return;
    }

    agregarAlCarrito({
      ...producto,
      talle,
    });
  };

  return (
    <button
      className="btn btn-dark w-100 mt-2"
      disabled={
        producto.stock === 0 ||
        cantidadEnCarrito >= producto.stock
      }
      onClick={handleClick}
    >
      {cantidadEnCarrito >= producto.stock
        ? "Sin stock"
        : "Agregar al carrito"}
    </button>
  );
}

export default BotonAgregar;
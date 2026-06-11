import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Button, Toast, ToastContainer } from "react-bootstrap";

function BotonAgregar({
  producto,
  talle,
  cantidadEnCarrito = 0,
  setErrorTalle = () => { },
}) {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    if (producto.talles?.length > 0 && !talle) {
      setErrorTalle(true);
      return;
    }

    agregarAlCarrito({
      ...producto,
      talle,
    });

    setShowToast(true);

  };

  return (
    <>
      <Button
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
      </Button>

      <ToastContainer 
        position="bottom-end" 
        className="p-3" 
        style={{ position: 'fixed', zIndex: 1050 }}
      >
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={3000} 
          autohide
          bg="success" 
        >
          <Toast.Body className="text-white fw-bold">
            ¡Agregado al carrito exitosamente!
          </Toast.Body>
        </Toast>
        </ToastContainer>
    </>
  );
}

export default BotonAgregar;
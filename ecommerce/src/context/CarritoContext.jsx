import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carritoPersistente");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  }
  );

  const [notificacion, setNotificacion] = useState(null); //nuevo-------------------

  useEffect(() => {
    localStorage.setItem("carritoPersistente", JSON.stringify(carrito));
  }, [carrito]);

  function agregarAlCarrito(producto) {
///Nuevo----------------------
    setNotificacion({
      tipo: "agregado",
      producto
      });
    console.log("Producto agregado:", producto.nombre);

    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find(
        (p) => p.id === producto.id && p.talle === producto.talle,
      );

      if (productoExistente) {
        if (productoExistente.cantidad >= producto.stock) {
          return carritoActual;
        }
        return carritoActual.map((prod) =>
          prod.id === producto.id && prod.talle === producto.talle
            ? { ...prod, cantidad: prod.cantidad + 1 }
            : prod,
        );
      } else {
        return [...carritoActual, { ...producto, cantidad: 1 }];
      }
    });
  }

  function eliminarDelCarrito(id, talle) {
    const productoEliminado = carrito.find(
      p => p.id === id && p.talle === talle
      );

    if (productoEliminado) {
      setNotificacion({
        tipo: "eliminado",
        producto: productoEliminado
      });
    }

    setCarrito((carritoActual) =>
      carritoActual.filter(
        (producto) => !(producto.id === id && producto.talle === talle),
      ),
    );
  }

  function incrementarCantidad(id, talle) {
    setCarrito((carritoActual) =>
      carritoActual.map((producto) =>
        producto.id === id &&
          producto.talle === talle &&
          producto.cantidad < producto.stock
          ? { ...producto, cantidad: producto.cantidad + 1 } 
          : producto,
      ),
    );
  }

  function decrementarCantidad(id, talle) {
    setCarrito((carritoActual) =>
      carritoActual.map((producto) =>
        producto.id === id && producto.talle === talle && producto.cantidad > 1
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto,
      ),
    );
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        notificacion, 
        setNotificacion,
        agregarAlCarrito,
        eliminarDelCarrito,
        incrementarCantidad,
        decrementarCantidad,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

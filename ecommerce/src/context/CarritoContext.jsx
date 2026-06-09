import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carritoPersistente");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  }
  );

  useEffect(() => {
    localStorage.setItem("carritoPersistente", JSON.stringify(carrito));
  }, [carrito]);

  function agregarAlCarrito(producto) {
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
          ? { ...producto, cantidad: producto.cantidad + 1 } //spread operator ... copia todo el producto, mantiene id nombre etc y aumenta solo la cantidad
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

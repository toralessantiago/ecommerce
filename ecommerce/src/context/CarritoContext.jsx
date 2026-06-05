import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CartProvider({ children }) {

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(producto) {
        setCarrito(carritoActual => {
            const productoExistente = carritoActual.find(p => p.id === producto.id);

            if (productoExistente) {
                if (productoExistente.cantidad >= producto.stock) {
                    return carritoActual;
                }
                return carritoActual.map(prod =>
                    prod.id === producto.id
                        ? {...prod, cantidad: prod.cantidad + 1}
                        : prod
                );
                } else {
                    return [...carritoActual, {...producto, cantidad: 1}];
                }
                });
            }

    function eliminarDelCarrito(id) {
         setCarrito(carrito.filter(producto => producto.id !== id));
        }

    function incrementarCantidad(id) {
        setCarrito(carritoActual => carritoActual.map(producto =>
            producto.id === id && producto.cantidad < producto.stock
                ? {...producto, cantidad: producto.cantidad + 1}
                : producto
            ));
        }

    function decrementarCantidad(id) {
        setCarrito(carritoActual => carritoActual.map(producto =>
            producto.id === id && producto.cantidad > 1
                ? {...producto, cantidad: producto.cantidad - 1}
                : producto
            ));
        }

    function vaciarCarrito() { setCarrito([]); }

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                incrementarCantidad,
                decrementarCantidad,
                vaciarCarrito
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
}
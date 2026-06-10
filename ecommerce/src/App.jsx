import "./styles/footer.css";
import "./styles/base.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Error404 from "./pages/Error404.jsx";
import { Routes, Route } from "react-router-dom";
import { BusquedaProvider } from "./context/BusquedaContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import { useContext } from "react";
import { CarritoContext } from "./context/CarritoContext";
import NotificacionCarrito from "./components/NotificacionCarrito";

function App() {
  const {
  notificacion,
  setNotificacion} = useContext(CarritoContext);

  return (
    <BusquedaProvider>
      <ScrollToTop />
      <Navbar />
      <div
      style={{
        position: "fixed",
        bottom: "40px",
        right: "20px",
        zIndex: 9999,
        maxWidth: "350px"
      }}
      >
      <NotificacionCarrito
      notificacion={notificacion}
      onClose={() => setNotificacion(null)}
      />
      </div>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </BusquedaProvider>
  );
}

export default App;

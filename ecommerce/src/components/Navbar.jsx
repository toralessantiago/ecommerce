import { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { BusquedaContext } from "../context/BusquedaContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import miLogo from "/logo-apex-2.svg";
import { BsCart3, BsSearch } from "react-icons/bs";
import { productos } from "../../data/productos";
import "../styles/navbar.css";

function Navbar() {
  const { carrito } = useContext(CarritoContext);
  const { busqueda, setBusqueda } = useContext(BusquedaContext);

  const [buscando, setBuscando] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navigate = useNavigate();

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes((busqueda || "").toLowerCase()),
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setBuscando(false);
        setMostrarResultados(false);
        setMenuAbierto(false);
      }
      if (e.key === "Enter" && busqueda.trim() !== "") {
        navigate("/productos");
        setBuscando(false);
        setMostrarResultados(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [busqueda, navigate]);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <nav className="navbar navbar-dark bg-dark py-2 py-lg-2">
        <div className="container-fluid d-flex flex-row align-items-center p-0">

          {/* LOGO */}
          <NavLink className="navbar-brand m-0" to="/">
            <img src={miLogo} alt="Logo" className="navbar-logo-img" />
          </NavLink>

          {/* LINKS — solo desktop */}
          <div className="d-none d-lg-flex gap-3 mx-3">
            <NavLink className="nav-link text-white" to="/productos">
              Productos
            </NavLink>
            <NavLink className="nav-link text-white" to="/nosotros">
              Nosotros
            </NavLink>
            <NavLink className="nav-link text-white" to="/contacto">
              Contacto
            </NavLink>
          </div>

          {/* ICONOS DERECHA */}
          <div className="ms-auto d-flex align-items-center gap-3">
            <button
              className="nav-link text-white bg-transparent border-0"
              onClick={() => {
                setBuscando(true);
                setMostrarResultados(true);
              }}
            >
              <BsSearch size={20} />
            </button>

            <NavLink
              className="nav-link text-white d-flex align-items-center gap-2"
              to="/carrito"
            >
              <BsCart3 size={22} />
              {carrito.reduce((total, p) => total + p.cantidad, 0)}
            </NavLink>

            {/* HAMBURGUESA — solo mobile */}
            <button
              className="nav-link text-white bg-transparent border-0 d-flex d-lg-none"
              onClick={() => setMenuAbierto((prev) => !prev)}
              aria-label="Abrir menú"
            >
              <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>
                {menuAbierto ? "✕" : "☰"}
              </span>
            </button>
          </div>

          {/* MODO BÚSQUEDA */}
          {buscando && (
            <div
              className="position-absolute top-0 start-0 w-100 bg-dark p-2 d-flex align-items-center gap-2"
              style={{ zIndex: 1000 }}
            >
              <input
                autoFocus
                type="text"
                className="form-control"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => {
                  setBusqueda(e.target.value);
                  setMostrarResultados(true);
                }}
              />
              <button
                className="btn btn-light"
                onClick={() => {
                  setBuscando(false);
                  setMostrarResultados(false);
                }}
              >
                ✕
              </button>

              {mostrarResultados && busqueda.trim() !== "" && (
                <div
                  className="position-absolute top-100 start-0 w-100 bg-white shadow"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  {productosFiltrados.slice(0, 5).map((p) => (
                    <Link
                      key={p.id}
                      to={`/producto/${p.id}`}
                      className="d-flex align-items-center gap-2 p-2 text-dark text-decoration-none border-bottom"
                      onClick={() => {
                        setBuscando(false);
                        setMostrarResultados(false);
                      }}
                    >
                      <img
                        src={p.imagenes?.[0]}
                        alt={p.nombre}
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                      <div>
                        <div>{p.nombre}</div>
                        <small>${p.precio}</small>
                      </div>
                    </Link>
                  ))}
                  {productosFiltrados.length === 0 && (
                    <div className="p-3 text-dark">No se encontraron productos</div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </nav>

      {/* MENÚ DESPLEGABLE MOBILE */}
      <div className={`navbar-menu-mobile ${menuAbierto ? "abierto" : ""}`}>
        <NavLink className="nav-link text-white px-4 py-3" to="/productos" onClick={cerrarMenu}>
          Productos
        </NavLink>
        <NavLink className="nav-link text-white px-4 py-3" to="/nosotros" onClick={cerrarMenu}>
          Nosotros
        </NavLink>
        <NavLink className="nav-link text-white px-4 py-3" to="/contacto" onClick={cerrarMenu}>
          Contacto
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
import { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { BusquedaContext } from "../context/BusquedaContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import miLogo from "/src/assets/logoSimple.jpeg";
import { BsCart3, BsSearch } from "react-icons/bs";
import { productos } from "../../data/productos";
import "../styles/navbar.css";

function Navbar() {
  const { carrito } = useContext(CarritoContext);
  const { busqueda, setBusqueda } = useContext(BusquedaContext);

  const [buscando, setBuscando] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const navigate = useNavigate();

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes((busqueda || "").toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setBuscando(false);
        setMostrarResultados(false);
      }

      if (e.key === "Enter" && busqueda.trim() !== "") {
        navigate("/productos");
        setBuscando(false);
        setMostrarResultados(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [busqueda, navigate]);

  return (
    <nav className="navbar navbar-dark bg-dark navbar-fijo">
      <div className="container-fluid d-flex align-items-center p-0">
        {/* LOGO */}
        <NavLink className="navbar-brand" to="/">
          <img
            src={miLogo}
            alt="Logo"
            className="navbar-logo-img"
          />
        </NavLink>

        {/* PRODUCTOS */}
        <div className="d-flex gap-3">
          <NavLink className="nav-link text-white" to="/productos">
            Productos
          </NavLink>
          <NavLink className="nav-link text-white" to="/contacto">
            Contacto
          </NavLink>
        <NavLink className="nav-link text-white" to="/nosotros">
            Nosotros
          </NavLink>
        </div>

        {/* LUPA + CARRITO */}
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

            {/* SUGERENCIAS */}
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
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />

                    <div>
                      <div>{p.nombre}</div>
                      <small>${p.precio}</small>
                    </div>
                  </Link>
                ))}

                {productosFiltrados.length === 0 && (
                  <div className="p-3 text-dark">
                    No se encontraron productos
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
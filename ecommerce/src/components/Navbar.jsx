import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { NavLink } from "react-router-dom";


function Navbar() {
  const { carrito } = useContext(CarritoContext);

  return(
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/productos">Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
           <NavLink className="nav-link" to="/carrito">🛒 {carrito.reduce((total, p) => total + p.cantidad, 0)}</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )


}

export default Navbar;
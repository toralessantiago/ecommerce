import { Link } from "react-router-dom";

function Error404() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "70vh", padding: "2rem" }}
    >

      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
        }}
      >
        404
      </h1>

      <h3 className="mb-3">
        No encontramos lo que estás buscando
      </h3>

      <p
        className="text-muted mb-4"
        style={{ maxWidth: "500px" }}
      >
        El producto o la página que intentás visitar no existe,
        fue movido o ya no está disponible.
      </p>

      <Link
        to="/"
        className="btn btn-dark px-4 py-2"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default Error404;
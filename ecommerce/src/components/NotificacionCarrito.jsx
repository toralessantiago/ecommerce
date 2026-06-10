import { Toast } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

function NotificacionCarrito({ notificacion, onClose }) {
  if (!notificacion) return null;

  return (
    <Toast
      show={true}
      onClose={onClose}
      delay={3000}
      autohide
      className="bg-white"
      style={{
        minWidth: "320px",
        opacity: 1,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
      }}
    >
      <Toast.Header className="d-flex align-items-center">
        <strong className="me-auto">
          {notificacion.tipo === "agregado" ? (
            <>
            <BsCheckCircleFill size={20} style={{ marginTop: "-1px" }} className="me-2 text-success" />
            Producto agregado
            </>
            ) : (
            <>
            <BsTrashFill size={20} style={{ marginTop: "-1px" }} className="me-2 text-danger"/>
            Producto eliminado 
            </>
        )}
        </strong>
      </Toast.Header>

      <Toast.Body>
        <div className="d-flex align-items-center">
          <img
            src={
              notificacion.producto.imagenes?.[0] ||
              notificacion.producto.imagen ||
              ""
            }
            alt={notificacion.producto.nombre}
            width="60"
            height="60"
            className="rounded me-3"
            style={{
              objectFit: "cover",
              flexShrink: 0,
            }}
          />

          <div>
            <div className="fw-bold">
                {notificacion.producto.nombre}
            </div>

            <small className="text-muted d-block">
                {notificacion.tipo === "agregado"
                ? "Agregado al carrito"
                : "Eliminado del carrito"}
            </small>

            {notificacion.producto.talle && (
            <small className="text-muted d-block">
            Talle: {notificacion.producto.talle}
            </small>
            )}
            </div>
        </div>
      </Toast.Body>
    </Toast>
  );
}

export default NotificacionCarrito;
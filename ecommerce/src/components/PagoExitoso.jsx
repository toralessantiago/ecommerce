import { Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PagoExitoso({ datos }) {
  const fechaHoy = new Date().toLocaleDateString('es-AR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
  });

  const detallesTransaccion = {
    monto: datos?.montoTotal || '$0.00',
    idTransaccion: 'APEX-' + Math.floor(Math.random() * 1000000000), 
    metodoPago: '**** ' + (datos?.tarjetaFinal || '0000'),
    fecha: fechaHoy,
    comercio: 'Apex Store',
    email: datos?.email || 'Sin correo registrado'
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
      <Card className="w-100 shadow-sm border-0" style={{ maxWidth: '450px' }}>
        <Card.Body className="p-4 p-md-5 text-center">
          
          <div className="d-flex justify-content-center mb-4">
            <div 
              className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" 
              style={{ width: '64px', height: '64px' }}
            >
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-success fw-bold fs-3 mb-2">¡Pago Exitoso!</h2>
            <p className="text-muted">
              Tu pago ha sido procesado correctamente. En breve recibirás un correo electrónico de confirmación.
            </p>
          </div>

          <div className="bg-light border rounded p-3 mb-4 text-start">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text-muted">Monto</span>
              <span className="fs-5 fw-bold">{detallesTransaccion.monto}</span>
            </div>
            
            <hr className="text-muted my-3" />
            
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">ID de Transacción</span>
              <Badge bg="white" text="dark" className="border fw-normal">
                {detallesTransaccion.idTransaccion}
              </Badge>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Método de Pago</span>
              <span className="fw-medium">{detallesTransaccion.metodoPago}</span>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Fecha</span>
              <span className="fw-medium">{detallesTransaccion.fecha}</span>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted">Comercio</span>
              <span className="fw-medium">{detallesTransaccion.comercio}</span>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center gap-2 text-muted small bg-primary bg-opacity-10 p-2 rounded mb-4">
            <span>Recibo enviado a {detallesTransaccion.email}</span>
          </div>

          <div className="d-grid gap-3">
            <Button variant="primary" size="lg" className="d-flex align-items-center justify-content-center">
              Descargar Recibo
            </Button>
            
            <Button as={Link} to="/" variant="outline-secondary" size="lg" className="d-flex align-items-center justify-content-center">
              Volver a la Tienda
            </Button>
          </div>

          <p className="text-muted small mt-4 mb-0">
            ¿Necesitas ayuda? Contacta a nuestro equipo en soporte@apexstore.com
          </p>
          
        </Card.Body>
      </Card>
    </div>
  );
}
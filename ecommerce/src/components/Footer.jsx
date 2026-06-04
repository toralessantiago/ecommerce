import React from 'react';

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* Sección Izquierda: Ubicación y Copyright */}
        <div className="footer-left">
          <span className="footer-location">
            <i className="bi bi-geo-alt-fill"></i> Argentina
          </span>
          <span className="footer-copyright">
            © 2026 Apex .Todos los derechos reservados.
          </span>
          <span className="footer-legal">
            Defensa de las y los Consumidores. Para reclamos,{' '}
            <a href="https://autogestion.produccion.gob.ar/consumidores" className="footer-link-inline">ingrese aquí</a>
          </span>
        </div>

        {/* Sección Derecha: Enlaces Corporativos */}
        <div className="footer-right">
          <a className="footer-nav-link">Términos y Condiciones</a>
          <a className="footer-nav-link">Política de privacidad y cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
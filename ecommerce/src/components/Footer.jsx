import React from 'react';

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-location">
            <i className="bi bi-geo-alt-fill"></i> Argentina
          </span>

          <span className="footer-copyright">
            © 2026 Apex .Todos los derechos reservados.
          </span>

          <span className="footer-legal">
            Defensa del Consumidor. Para reclamos,{' '}
            <a href="https://autogestion.produccion.gob.ar/consumidores" className="footer-link-inline">ingrese aquí</a>
          </span>
        </div>
        
        <div className="footer-right">
          <a href="https://www.argentina.gob.ar/terminos-y-condiciones" className="footer-nav-link">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
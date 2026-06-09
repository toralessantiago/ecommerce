import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-secondary py-3 px-3 px-md-5 border-top border-secondary border-opacity-10 fs-7 mt-4">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3" style={{ maxWidth: '1400px' }}>
        
        <div className="d-flex flex-column flex-sm-row flex-wrap align-items-start align-items-sm-center gap-3">
          <span className="text-white fw-semibold">
            <i className="bi bi-geo-alt-fill me-1"></i> Argentina
          </span>

          <span>
            © 2026 Apex. Todos los derechos reservados.
          </span>

          <span>
            Defensa del Consumidor. Para reclamos,{' '}
            <a href="https://autogestion.produccion.gob.ar/consumidores" className="text-secondary text-decoration-underline link-light">
              ingrese aquí
            </a>
          </span>
        </div>

        <div className="d-flex flex-column flex-md-row gap-2">
          <a href="https://www.argentina.gob.ar/terminos-y-condiciones" className="text-secondary text-decoration-none link-light">
            Términos y Condiciones
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../styles/carrito.css";

function FormularioCompra({ alTerminar, totalAPagar }) {
  const [validated, setValidated] = useState(false);
  const [procesando, setProcesando] = useState(false);

  const [vencimiento, setVencimiento] = useState("");

  const cambioVencimiento = (e) => {
    let input = e.target.value.replace(/\D/g, "");

    if (input.length > 4) input = input.slice(0, 4);

    if (input.length >= 3) {
      setVencimiento(`${input.slice(0, 2)}/${input.slice(2)}`);
    } else {
      setVencimiento(input);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setProcesando(true);

    const formData = new FormData(form);
    const numeroTarjeta = formData.get("numeroTarjeta") || "";

    const datosExtraidos = {
      email: formData.get("email"),
      tarjetaFinal: numeroTarjeta.slice(-4),
      montoTotal: `$${totalAPagar}`,
    };

    setTimeout(() => {
      setProcesando(false);
      setValidated(true);
      alTerminar(datosExtraidos);
    }, 2000);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h4 className="mb-3">Datos de Envío</h4>

      {procesando && (
        <div className="procesando-overlay">
          <div className="procesando-box text-center">
            <div className="spinner-circle mb-3"></div>
            <h5 className="fw-semibold mb-2">Confirmando transacción...</h5>
            <p className="text-muted mb-0">No cierres la página</p>
          </div>
        </div>
      )}

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNombre">
          <Form.Label>
            Nombre <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="nombre"
            required
            type="text"
            placeholder="Nombre/s"
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa tu nombre.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridApellido">
          <Form.Label>
            Apellido <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="apellido"
            required
            type="text"
            placeholder="Apellido/s"
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa tu apellido.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            placeholder="Ingresa tu email"
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa una email válido.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>
          Dirección 1 <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          name="direccion"
          type="text"
          placeholder="Ingresa tu dirección"
          required
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa una dirección válida.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Dirección 2</Form.Label>
        <Form.Control
          name="direccion2"
          className="sin-validacion"
          type="text"
          placeholder="Número de departamento o piso"
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>
            Provincia <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select name="provincia" required defaultValue="">
            <option value="" disabled>
              Elegí tu provincia
            </option>
            <option value="CABA">CABA</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Catamarca">Catamarca</option>
            <option value="Chaco">Chaco</option>
            <option value="Chubut">Chubut</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Entre Ríos">Entre Ríos</option>
            <option value="Formosa">Formosa</option>
            <option value="Jujuy">Jujuy</option>
            <option value="La Pampa">La Pampa</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Misiones">Misiones</option>
            <option value="Neuquén">Neuquén</option>
            <option value="Río Negro">Río Negro</option>
            <option value="Salta">Salta</option>
            <option value="San Juan">San Juan</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Santiago del Estero">Santiago del Estero</option>
            <option value="Tierra del Fuego">Tierra del Fuego</option>
            <option value="Tucumán">Tucumán</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Por favor selecciona tu provincia.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>
            Localidad <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="localidad"
            type="text"
            placeholder="Ingresa tu localidad"
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa una localidad válida.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>
            Código Postal <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="codigoPostal"
            placeholder="Ej: 1714"
            type="text"
            maxLength={5}
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un código postal válido.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <h4 className="mt-4 mb-3">Datos de Pago </h4>

      <Row className="mb-4">
        <Form.Group as={Col} md={4} controlId="formGridTipoPago">
          <Form.Label>
            Tipo<span className="text-danger">*</span>
          </Form.Label>
          <Form.Select name="medioPago" required defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="credito">Crédito</option>
            <option value="debito">Débito</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Por favor selecciona un tipo de tarjeta.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="formGridNumeroTarjeta">
          <Form.Label>
            Número de Tarjeta <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="numeroTarjeta"
            type="text"
            inputMode="numeric"
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={16}
            pattern="[0-9]{16}"
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingresa una tarjeta válida de 16 números.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={2} controlId="formGridVencimiento">
          <Form.Label>
            Vencimiento <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="vencimiento"
            type="text"
            placeholder="MM/AA"
            maxLength={5}
            inputMode="numeric"
            value={vencimiento}
            onChange={cambioVencimiento}
            required
          />
          <Form.Control.Feedback type="invalid">
            Requerido.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={2} controlId="formGridCvv">
          <Form.Label>
            CVV <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="cvv"
            type="password"
            placeholder="123"
            inputMode="numeric"
            maxLength={4}
            required
          />
          <Form.Control.Feedback type="invalid">
            Requerido.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          name="guardarDatos"
          type="checkbox"
          label="Guardar mis datos para futuras compras"
        />
      </Form.Group>

      <Button
        className="btn btn-dark w-100 mt-2"
        type="submit"
        disabled={procesando}
      >
        {procesando ? "Procesando..." : "Enviar y Pagar"}
      </Button>
    </Form>
  );
}

export default FormularioCompra;

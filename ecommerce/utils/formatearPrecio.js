function formatearPrecio(precio) {
  return precio.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

export default formatearPrecio;
export const formatearFecha = (fecha) => {
  const nuevaFecha = new Date(fecha.split("T")[0].split("-"));

  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return nuevaFecha.toLocaleDateString("es-ES", opciones);
};

export const formatearHora = (fecha) => {
  const separarHora = fecha.split("T")[1].split(":");
  const hora = separarHora[0];
  const minutos = separarHora[1];
  const segundos = separarHora[2].split(".")[0];
  const nuevaHora = `${hora}:${minutos}:${segundos}`;

  return nuevaHora;
};

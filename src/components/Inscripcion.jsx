function Inscripcion({ actividad, onEliminar }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{actividad.nombre}</h2>

        {/* Mensaje de Últimos Cupos */}
        {actividad.cupos > 0 && actividad.cupos <= 5 && (
          <p className="text-danger fw-bold">¡Últimos cupos!</p>
        )}

        {/* Mensaje de Cupo Gratis */}
        {actividad.precio === 0 && (
          <p className="text-success fw-bold">¡Cupo Gratis!</p>
        )}

        {/* Botón para Eliminar la Inscripción */}
        <button
          className="btn btn-danger"
          onClick={() => onEliminar(actividad.id)}
        >
          Eliminar inscripción
        </button>
      </div>
    </article>
  );
}

export default Inscripcion;
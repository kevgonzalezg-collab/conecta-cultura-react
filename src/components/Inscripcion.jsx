function Inscripcion({ inscripcion, onEliminar }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{inscripcion.nombre}</h2>
        <p>{inscripcion.categoria}</p>

        {inscripcion.precio <= 0 && (
          <p className="text-success fw-bold">¡Gratis!</p>
        )}

        {inscripcion.precio > 0 && (
          <p>${inscripcion.precio}</p>
        )}

        <button
          className="btn btn-primary"
          onClick={() => onEliminar(inscripcion.id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default Inscripcion;
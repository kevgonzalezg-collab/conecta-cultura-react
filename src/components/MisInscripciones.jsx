import Inscripcion from Inscripcion;

function MisInscripciones({ inscripciones, onEliminar }) {
  if (inscripciones.length === 0) {
    return <p className="text-muted">No tienes inscripciones guardadas.</p>;
  }

  return (
    <div className="row g-4">
      {inscripciones.map((actividad) => (
        <div className="col-12 col-md-6 col-lg-4" key={actividad.id}>
          <Inscripcion
            actividad={actividad}
            onEliminar={onEliminar}
          />
        </div>
      ))}
    </div>
  );
}

export default MisInscripciones;
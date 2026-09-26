import { useEffect, useState } from "react";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Cartelera from "./pages/Cartelera";
import MisInscripciones from "./components/MisInscripciones"; // <-- Asegúrate de importar tu componente
import { actividades } from "./data/actividades";

function App() {
  const [categoria, setCategoria] = useState("Todas");

  // Filtrado de actividades
  const visibles =
    categoria === "Todas"
      ? actividades
      : actividades.filter((actividad) => actividad.categoria === categoria);

  // Estado con inicialización en localStorage
  const [inscripciones, setInscripciones] = useState(() => {
    const guardadas = localStorage.getItem("inscripciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  // Agregar inscripción sin duplicados
  function inscribir(actividad) {
    const yaExiste = inscripciones.some((item) => item.id === actividad.id);
    if (yaExiste) return;

    setInscripciones([...inscripciones, actividad]);
  }

  // Eliminar inscripción por ID
  function eliminarInscripcion(id) {
    setInscripciones(inscripciones.filter((item) => item.id !== id));
  }

  // Guardar en localStorage cuando cambian las inscripciones
  useEffect(() => {
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
  }, [inscripciones]);

  return (
    <>
      <Cabecera />
      <Navegacion />
      
      <main className="container py-4">
        {/* Filtro por Categorías */}
        <select
          className="form-select mb-4"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          <option>Todas</option>
          <option>Música</option>
          <option>Artes visuales</option>
          <option>Deporte</option>
          <option>Cocina</option>
          <option>Periodismo</option>
          <option>Agricultura</option>
        </select>

        {/* Sección 1: Cartelera de Actividades */}
        <Cartelera
          actividades={visibles}
          onInscribir={inscribir}  {/* <-- Se cambió inscribirTemporal por inscribir */}
        />

        {/* Separador visual */}
        <hr className="my-5" />

        {/* Sección 2: Lista de Mis Inscripciones */}
        <section>
          <h2 className="h4 mb-3">Mis Inscripciones</h2>
          <MisInscripciones
            inscripciones={inscripciones}
            onEliminar={eliminarInscripcion}
          />
        </section>
      </main>
    </>
  );
}

export default App;
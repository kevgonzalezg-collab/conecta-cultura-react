function PiePagina() {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container">
        <p className="h3 mb-2">
          <strong>Conecta Cultura</strong>
        </p>

        <address>
          Contacto:{" "}
          <a href="mailto:hola@conectacultura.cl">
            hola@conectacultura.cl
          </a>
        </address>

        <p>
          <small>Proyecto académico · Desarrollo FullStack II</small>
        </p>

        <p className="mb-0">
          © 2026 Conecta Cultura
        </p>
      </div>
    </footer>
  );
}

export default PiePagina;
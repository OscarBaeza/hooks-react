import { useState, useEffect } from 'react';

function App() {

  const [texto, setTexto] = useState("")

  useEffect(() => document.title = texto, [texto])

  function cambiar(e) {
    setTexto(e.target.value)
  }

  return (
    <div>
      <h1>Cambiar el titulo de la pagina</h1>
      <p><input type="text" onChange={cambiar} /></p>
      <p>{texto}</p>
    </div>
  );
}

export default App;
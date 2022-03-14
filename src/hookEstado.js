import React, { useState } from 'react';

function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Presionaste {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Presiona
      </button>
    </div>
  );
}
export default Example;
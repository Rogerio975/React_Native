// Utilização do UseState.

import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // Atualiza o estado incrementando count
  };

  return (
    <div>
      <p>Você clicou {count} vezes.</p>
      <button onClick={handleClick}>Clique em mim</button>
    </div>
  );
}

export default MyComponent;

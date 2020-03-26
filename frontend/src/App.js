import React, { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(0);

  function incriment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      Contador: {counter}
      <button onClick={incriment}>Incrimentar</button>
    </div>
  );
}

export default App;

import React from 'react';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  }

  return (
    <Greetings name="김범진" optional="최한솔" onClick={onClick} />
  );
}

export default App;

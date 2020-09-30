import React from 'react';
import HelloWorld from './Helloworld'
import Bomb from './Bomb'
function App() {
  return (
    <main className='App'>
      <div>{<HelloWorld />}</div>
      <div>{<Bomb />}</div>
    </main>
  );
}

export default App;
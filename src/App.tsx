// import './App.css'

import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('test');

  return (
    <div className="App">
      <h1>Zustand-Demo-React-Vite-Typescript</h1>
      <p>Welcome to this Site!</p>
      <p>Message: {message}</p>
    </div>
  );
}

export default App;

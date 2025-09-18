// import './App.css'
// import { useState } from 'react';
import { InfoBox } from './components/InfoBox';
import { useStore } from './store';

function App() {
  // const [message, setMessage] = useState('test');
  const store = useStore((state) => state);
  const { message, setMessage } = store; // Deconstructuring => Don't need to repeat the store!

  const handleDisplayMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    // store.setMessage(e.target.value);
  };

  return (
    <div className="App">
      <h1>Zustand-Demo-React-Vite-Typescript</h1>
      <p>Welcome to this Site!</p>
      <main>
        <section className="controlArea">
          <div className="data">
            <label htmlFor="">Message:</label>
            <input
              type="text"
              value={message}
              // value={store.message}
              onChange={(e) => handleDisplayMessage(e)}
            />
            <p>
              Message: <span>{message}</span>
              {/* Message: <span>{store.message}</span> */}
            </p>
          </div>
        </section>

        <section className="dataArea">
          <InfoBox message={message}></InfoBox>
          {/* <InfoBox message={store.message}></InfoBox> */}
        </section>
      </main>
    </div>
  );
}

export default App;

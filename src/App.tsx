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

      <p>color 1: {store.colors[0]}</p>
      <main>
        <section className="controlArea">
          {/* MESSAGE */}
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

          {/* COLORS */}
          <div className="data">
            <label>Colors:</label>
            <div>
              <button onClick={() => store.addColor('blue')}>blue</button>
              <button onClick={() => store.addColor('red')}>red</button>
              <button onClick={() => store.addColor('yellow')}>yellow</button>
            </div>
            <button onClick={() => store.deleteColor()}>delete color</button>
            <button onClick={() => store.deleteAllColors([])}>
              delete all colors
            </button>
          </div>

          {/* MULTIPLE VALUES */}
          <div className="data">
            <label>Change multiple values:</label>
            <div>
              <button onClick={() => store.deleteVowelsAndColorRed()}>
                delete vowels from message and color red from colors
              </button>
            </div>
          </div>
        </section>

        <section className="dataArea">
          <InfoBox></InfoBox>
          {/* <InfoBox message = {message}></InfoBox> */}
          {/* <InfoBox message={store.message}></InfoBox> */}
        </section>
      </main>
    </div>
  );
}

export default App;

:root {
  --eth-blue: #88aaf1;
  --eth-violet: #c9b3f5;
  --eth-aqua: #b8faf6;
  --eth-peach: #f0cdc2;
}

body {
  margin: 0;
  background: #141414;
  color: var(--eth-blue);
  font-family: 'Press Start 2P', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#game-container {
  position: relative;
}

canvas {
  background: #1f1f2e;
  border: 4px solid var(--eth-violet);
  image-rendering: pixelated;
}

#overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 45, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#overlay.hidden {
  display: none;
}

#message {
  color: var(--eth-aqua);
  font-size: 12px;
  margin-bottom: 20px;
  text-align: center;
  padding: 0 10px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: #000;
  background: var(--eth-aqua);
  border: 2px solid var(--eth-blue);
  cursor: pointer;
}

button:hover {
  background: var(--eth-violet);
  border-color: var(--eth-peach);
}

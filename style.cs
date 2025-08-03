body {
  margin: 0;
  background: #000;
  color: #00FF00;
  font-family: 'Press Start 2P', monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
#game-container { position: relative; }
canvas {
  background: #000;
  image-rendering: pixelated;
  border: 4px solid #00FF00;
}
#overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#overlay.hidden { display: none; }
#message {
  color: #00FF00;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  padding: 0 10px;
}
button {
  margin: 5px;
  padding: 10px 20px;
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: #000;
  background: #00FF00;
  border: none;
  cursor: pointer;
}
button:hover { background: #0F0; }

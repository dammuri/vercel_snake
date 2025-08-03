const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const overlay = document.getElementById('overlay');
const messageEl = document.getElementById('message');
const playBtn = document.getElementById('play-btn');
const exitBtn = document.getElementById('exit-btn');

const tile = 20;
const cols = canvas.width / tile;
const rows = canvas.height / tile;
let snake, dir, gmPos, gmsEaten, gameLoop;

function resetGame() {
  snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
  dir = { x: 1, y: 0 };
  placeGM();
  gmsEaten = 0;
  clearInterval(gameLoop);
  gameLoop = setInterval(tick, 80); // extreme speed
  overlay.classList.add('hidden');
}

function placeGM() {
  gmPos = {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows)
  };
}

function tick() {
  const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

  head.x = (head.x + cols) % cols;
  head.y = (head.y + rows) % rows;

  snake.unshift(head);

  if (head.x === gmPos.x && head.y === gmPos.y) {
    gmsEaten++;
    if (gmsEaten >= 10) return winGame();
    placeGM();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.fillStyle = '#1f1f2e';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // GM food
  ctx.fillStyle = 'var(--eth-peach)';
  ctx.fillRect(gmPos.x * tile, gmPos.y * tile, tile, tile);
  ctx.fillStyle = 'var(--eth-blue)';
  ctx.font = '14px "Press Start 2P", monospace';
  ctx.fillText('GM', gmPos.x * tile + 2, gmPos.y * tile + tile - 4);

  // snake
  ctx.fillStyle = 'var(--eth-violet)';
  snake.forEach(seg => {
    ctx.fillRect(seg.x * tile, seg.y * tile, tile, tile);
  });
}

function winGame() {
  clearInterval(gameLoop);
  const code = Math.random().toString(36).substring(2, 10).toUpperCase();
  messageEl.innerHTML = `Here is your code,<br>congratz you made it 10 streak GM!<br><br><strong>${code}</strong>`;
  overlay.classList.remove('hidden');
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && dir.y === 0) dir = { x: 0, y: -1 };
  if (e.key === 'ArrowDown' && dir.y === 0) dir = { x: 0, y: 1 };
  if (e.key === 'ArrowLeft' && dir.x === 0) dir = { x: -1, y: 0 };
  if (e.key === 'ArrowRight' && dir.x === 0) dir = { x: 1, y: 0 };
});

let touchStart = null;
canvas.addEventListener('touchstart', e => {
  const t = e.touches[0];
  touchStart = { x: t.clientX, y: t.clientY };
}, { passive: false });

canvas.addEventListener('touchend', e => {
  const t = e.changedTouches[0];
  const dx = t.clientX - touchStart.x;
  const dy = t.clientY - touchStart.y;
  if (Math.abs(dx) > Math.abs(dy)) {
    dir = { x: dx > 0 ? 1 : -1, y: 0 };
  } else {
    dir = { x: 0, y: dy > 0 ? 1 : -1 };
  }
});

playBtn.addEventListener('click', resetGame);
exitBtn.addEventListener('click', () => {
  window.location.href = 'https://www.x.com/Ethereum_OS';
});

resetGame();

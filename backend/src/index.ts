import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import { GameState, Grid, createGrid, createShips, placeShip, randomlyPlaceShips, attackCell } from './game';

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let gameState: GameState;

function startNewGame(): void {
  gameState = {
    playerGrid: createGrid(10, 10),
    computerGrid: createGrid(10, 10),
    playerShips: createShips(),
    computerShips: createShips(),
    currentPlayer: 'player',
    winner: null,
  };
  randomlyPlaceShips(gameState.playerGrid, gameState.playerShips);
  randomlyPlaceShips(gameState.computerGrid, gameState.computerShips);
}

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on('newGame', () => {
    startNewGame();
    socket.emit('gameState', gameState);
  });

  socket.on('attackCell', (row: number, col: number) => {
    if (gameState.currentPlayer === 'player') {
      attackCell(gameState.computerGrid, row, col);
      gameState.currentPlayer = 'computer';
      io.emit('gameState', gameState);
    }
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

app.use(express.static('public'));

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

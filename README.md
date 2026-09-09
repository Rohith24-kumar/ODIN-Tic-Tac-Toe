# Tic Tac Toe 🎮

A simple, styled Tic Tac Toe game built with React + Vite. Players enter their names, take turns as X and O, and the game automatically detects wins and draws.

## Features

- **Player name input** – Enter custom names for Player 1 (X) and Player 2 (O)
- **Start / Reset controls** – Board stays disabled until both names are entered and Start is clicked
- **Turn indicator** – Shows whose turn it is by name, without shifting the layout
- **Win detection** – Checks all 8 winning lines (rows, columns, diagonals) after every move
- **Draw detection** – Flags a full board with no winner as a draw
- **Styled marks** – X and O render in different colors and a larger font size
- **Disabled-cell feedback** – Hovering a disabled cell shows a "not-allowed" cursor

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Plain CSS (no framework)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Deployment

This project deploys to [Vercel](https://vercel.com) with zero configuration:

1. Push the project to a GitHub repo.
2. On Vercel, click **Add New → Project** and select the repo.
3. Vercel auto-detects the Vite build settings (`vite build` → `dist`).
4. Click **Deploy**.

Alternatively, deploy directly from the terminal:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
├── src/
│   ├── App.jsx      # Main game component (state, logic, JSX)
│   ├── App.css       # Styling
│   └── main.jsx       # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

- `board` — a 9-item array representing each cell (`'X'`, `'O'`, or `null`)
- `isXNext` — tracks whose turn it is
- `gameStarted` — disables/enables the grid
- `winner` — set once a winning line is found; freezes the board
- `calculateWinner()` — checks all winning line combinations after each move

## License

This project is free to use and modify for learning purposes.

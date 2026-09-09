import { useState } from 'react'
import './App.css'
const WinnigLines=[
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function App() {
const [name1,setPlayer1]=useState('');
const [name2,setPlayer2]=useState('');
const [board,setBoard]=useState(Array(9).fill(null));
const [isXNext,setISXNext]=useState(true)
const[gameStarted,setGameStarted]=useState(false);
const [winner,setWiinner]=useState(null);

function handleCellCLick(index)
{
  if(board[index]|| !gameStarted || winner)return;
  const newBoard=[... board];
  newBoard[index]=isXNext ? 'X':'O';
  setBoard(newBoard);

  const result= calculateWinner(newBoard);
  if(result)
  {
    setWiinner(result);
  }else{
    setISXNext(!isXNext)
  }
}
const isDraw=!winner && board.every(cell=>cell!==null);

function calculateWinner(board){
  for(const[a,b,c]of WinnigLines)
  {
    if(board[a] && board[a]==board[b]&&board[a]==board[c])
    {
      return board[a];
    }
  }
  return null;
}


  return (
    <div className="border-code">
      <div className="game-info">
        

         <h3 className="game-title">
      Tik Tak Toe
    </h3>
        <label style={{ fontFamily: "'Caacupe One', sans-serif", fontSize: '2rem' }}>X's</label>
       <div className='game-input'>
        <input
          type="text"
          className="input-box"
          placeholder="Player 1"
          value={name1}
          onChange={(e)=>setPlayer1(e.target.value)}
        />

        <label style={{ fontFamily: "'Caacupe One', sans-serif", fontSize: '2rem' }}>O's</label>
        
        <input
          type="text"
          className="input-box"
          placeholder="Player 2"
          value={name2}
          onChange={(e)=>setPlayer2(e.target.value)}
        />

        <button 
        onClick={()=>setGameStarted(true)}
        disabled={!name1.trim()|| !name2.trim()}
        >Start</button>

        <button 
        onClick={()=>
          {setGameStarted(false)
            setPlayer1('')
            setPlayer2('')
            setBoard(Array(9).fill(null));
            setISXNext(true);
            setWiinner(null);
        }}
        >Reset Game</button>
        </div>
      </div>

       <div className="board-section">
        { (
          <p className='whos-turn'
         style={{ visibility: gameStarted ? 'visible' : 'hidden' }}>
           {winner
    ? `${winner === 'X' ? name1 : name2} Wins! 🎉`
    : isDraw
    ? "It's a Draw!"
    : `${isXNext ? name1 : name2}'s Turn ${isXNext ? 'X' : 'O'}`}

          </p>
        )}
  
    
      <div className="game-board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="grid-cell"
            style={{fontFamily:"'caacupe One',sans-sarif",
                    fontSize:'4.5rem',
                    color:cell=='X' ? '#ef4444' :cell== 'O' ? '#3b82f6':'#000000'
            }}
            disabled={!gameStarted|| cell!==null}
            onClick={()=>handleCellCLick(index)}  
          >
            {cell}
          </button>
        ))}
      </div>
        </div>
    </div>
  )
}
export default App

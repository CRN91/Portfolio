import './App.css';
import React, { useState } from "react";

function Square({value, onSquareClick}) {

  return (
    <button 
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({xIsNext, squares, onPlay}) {

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  function generateSquare(i) {
    return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />;
  }

  function generateBoardRow(row) {
    return <div className="board-row">
      {generateSquare(row * 3)}
      {generateSquare(row * 3 + 1)}
      {generateSquare(row * 3 + 2)}
    </div>;
  }

  function generateBoard() {
    return <>
      {generateBoardRow(0)}
      {generateBoardRow(1)}
      {generateBoardRow(2)}
    </>;
  }

  

  return (
    <>
    <div className="status">{status}</div>
    {generateBoard()}
  </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [ascending, setAscending] = useState(true);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  var moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // Making the last move be text rather than a button
  if (ascending) {
    console.log(moves);
    moves = moves.slice(0, -1);
    console.log(moves);
  } else {
    moves.reverse();
    moves = moves.slice(1, moves.length);
  }

  if (currentMove > 0) {
    moves.push(<li key="current">You are at move {currentMove}</li>);
  } else {
    moves.push(<li key="current">You are at game start</li>);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <button onClick={() => setAscending(!ascending)}>Toggle Sort</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

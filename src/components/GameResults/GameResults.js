import React from 'react';
import { checkGuess } from '../../game-helpers';

function GameResults({ words, answer }) {
  console.log(words)
  return (
    <div className="guess-results">
      {[...Array(6).keys()].map(rowIndex => {
        const word = words[rowIndex];
        const guessResult = word ? checkGuess(word, answer) : null;
        
        return (
          <p key={rowIndex} className="guess">
            {[...Array(5).keys()].map(cellIndex => {
              const letter = word?.[cellIndex] || '';
              const letterStatus = guessResult?.[cellIndex]?.status || '';
              const className = letterStatus ? `cell ${letterStatus}` : 'cell';
              
              return (
                <span key={cellIndex} className={className}>
                  {letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GameResults;

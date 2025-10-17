import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameResults from '../GameResults/GameResults';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [typedWords, setTypedWords] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() && gameStatus === 'playing') {
      const newWord = inputValue.trim().toUpperCase();
      
      // Add the new word to the list
      setTypedWords(prevWords => [...prevWords, newWord]);
      
      // Check if the word is correct
      if (newWord === answer) {
        setGameStatus('won');
      } else if (typedWords.length + 1 >= 6) {
        setGameStatus('lost');
      }
      
      // Clear the input
      setInputValue('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Banner for win/lose messages */}
      <Banner 
        gameStatus={gameStatus} 
        numOfGuesses={typedWords.length} 
        answer={answer} 
      />
      
      {/* Words display at the top */}
      <div style={{ padding: '20px 20px 10px 20px' }}>
        <GameResults words={typedWords} answer={answer} />
      </div>
      
      {/* Input at the bottom */}
      <div style={{ padding: '10px 20px 20px 20px', borderTop: '1px solid #ccc' }}>
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
          <label htmlFor="guess-input">Enter word:</label>
          <input 
            id="guessInput" 
            type="text" 
            maxLength={5}
            minLength={5}
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toUpperCase())}
            placeholder="Type a word and press Enter"
            disabled={gameStatus !== 'playing'}
          />
        </form>
      </div>
    </div>
  );
}

export default Game;

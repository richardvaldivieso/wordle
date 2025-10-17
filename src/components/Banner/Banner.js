import React from 'react';

function Banner({ gameStatus, numOfGuesses, answer }) {
  if (gameStatus === 'won') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  if (gameStatus === 'lost') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  }

  return null;
}

export default Banner;

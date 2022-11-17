import React from "react";
let luckyNumber = Math.trunc(Math.random() * 20) + 1;
let message = "Start guessing..";
let score = 20;
let userHighScore = 0;
let updateScroe = 20;
let updateMessage = "Start guessing..";
//const bodyColor ="green";
export default function Main({ setUserNunmber, userNumber }) {
  //let checkValue = 0
  function getNumber(e) {
    setUserNunmber(e.target.value);
  }
  // const displayMessage = (text) => (message.textContent = text);
  let guessValue = Number(userNumber);
  function calcualteFunc(e) {
    e.preventDefault();
    console.log(typeof Number(userNumber));

    if (guessValue === false) {
      message = "Type a number to guess....";
    } else if (guessValue !== luckyNumber) {
      if (score > 0) {
        message = guessValue > luckyNumber ? "Too High..." : "Too Low...";
        score--;
      } else {
        message = "You Lose the game....";
        score = 0;
      }
    } else if (guessValue === luckyNumber) {
      message = "Correct Number";
      if (score > userHighScore) {
        userHighScore = score;
      } else if (score < 0) {
        score = 0;
        userHighScore = score;
      }
    } else {
      message = "Enter a number to guess...";
    }

    setUserNunmber("");
    // setUserNunmber(Number(getNumber));
  }
  //restart
  function restartGame(e) {
    e.preventDefault();
    setUserNunmber("");
    console.log("restart");
    message = updateMessage;
    luckyNumber = Math.trunc(Math.random() * 20) + 1;
    score = updateScroe;
    if (score > userHighScore) {
      userHighScore = score;
    } else if (score < 0) {
      score = 0;
      userHighScore = score;
    }
  }
  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={restartGame}>
          Again!
        </button>
        <div className="number">?</div>
      </header>
      <main>
        <section className="left">
          <input
            type="number"
            className="guess"
            value={userNumber}
            onChange={getNumber}
          />
          <button className="btn check" onClick={calcualteFunc}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">
            <span role="img" aria-label="mark">
              💯
            </span>
            Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            <span role="img" aria-label="medal">
              🥇
            </span>
            Highscore: <span className="highscore">{userHighScore}</span>
          </p>
        </section>
      </main>
    </>
  );
}

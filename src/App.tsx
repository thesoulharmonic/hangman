import { useEffect, useState, useCallback } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import words from "./wordList.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Keyboard.module.css";
import "./App.css";

function getWord() {
    // generates a random word from the words json file
      return words[Math.floor(Math.random() * words.length)];
    }

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  //incorrect letters are the ones that are not in the word
  const inCorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 10;
  // splits the array and checks if every letter is included in the guessedLetters then == win 
  const isWinner = wordToGuess
  .split("")
  .every(letter => guessedLetters.includes(letter))


  const addGuessedLetter = useCallback(
    (letter: string) => {

      if (guessedLetters.includes(letter) || isLoser || isWinner ) return // if letter is already guessed return
      setGuessedLetters(currentLetters => [...currentLetters, letter]) // adds guessed letters to the end array  
  
    }, [guessedLetters, isWinner, isLoser] // pass all outcomes to array
    ) // 

  // user effect for handling keypresses
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      // checks if we pressed a letter between a-z
      if (!key.match(/^[a-z]$/)) return // if we didnt ignore
      // if we did continue on
      e.preventDefault()
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);
    //cleans up after press
    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters]);



  return (
    <>
      <div className="title">
        <div className="row">
          <h1>HANGMAN</h1>
        </div>
      </div>

      <div className="row">
        {/* <div className="wordPuzzle">{letters}</div> */}
        <div className="gameStatus">
        {/* Winner & loser alert */}
          {isWinner && "Winner! - Refresh to try again"} 
          {isLoser && "You Loser! - Refresh to try again"}
        </div>
        <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
        <HangmanWord
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
  
  {/* pass properties and functions to the keyboard */}
<Keyboard 
  disabled={isWinner || isLoser}
  activeLetters={guessedLetters.filter(letter => 
    wordToGuess.includes(letter)
  )}
  inactiveLetters={inCorrectLetters}
  addGuessedLetter={addGuessedLetter}
/>
      </div>
    </>
  );
}

export default App;

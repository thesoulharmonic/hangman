

// using typescript to set properties as it is cleaner for this project 

type HangmanWordProps  = {
    guessedLetters: string[]
    wordToGuess: string
}
export default function HangmanWord({ 
    guessedLetters, 
    wordToGuess, 
    }:
    HangmanWordProps) {


  return ( 

        <div className="wordPuzzleContainer">
       
      {/* <div className="wordPuzzle">{letters}</div> */}
      {wordToGuess.split('').map((letter, index) => 
       <span className="wordPuzzle" key={index}>
        <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}> {letter}</span>
           
          </span>
      )}
   
    </div>
  )
}

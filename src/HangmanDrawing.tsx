import { useState } from "react";
import { useEffect } from "react";

// using typescript to set properties as it is cleaner for this project 

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  // uses a switch statement based on numberOfGuesses to show the hangman progress 
  const [hangman, setHangman] = useState("../img/hangmandrawings/state1.GIF");

  useEffect(() => {
    switch (numberOfGuesses) {
      case 1:
        setHangman("../img/hangmandrawings/state2.GIF");
        break;
      case 2:
        setHangman("../img/hangmandrawings/state3.GIF");
        break;
      case 3:
        setHangman("../img/hangmandrawings/state4.GIF");
        break;
      case 4:
        setHangman("../img/hangmandrawings/state5.GIF");
        break;
      case 5:
        setHangman("../img/hangmandrawings/state6.GIF");
        break;
      case 6:
        setHangman("../img/hangmandrawings/state7.GIF");
        break;
      case 7:
        setHangman("../img/hangmandrawings/state8.GIF");
        break;
      case 8:
        setHangman("../img/hangmandrawings/state9.GIF");
        break;
      case 9:
        setHangman("../img/hangmandrawings/state10.gif");
        break;
        case 10:
            setHangman("../img/hangmandrawings/state11.GIF");
            break;
            default:
                setHangman("../img/hangmandrawings/state1.GIF"); // default to state 1
    }
  }, [numberOfGuesses]);

  return (
    <>
      <div className="row">
        <img src={hangman} className="hangmanState" alt="hangman"></img> 
        {/* import image source from switch above */}
      </div>

    </>
  );
}


import styles from "../Keyboard.module.css";

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

// using typescript to set properties as it is cleaner for this project 


type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

// pass properties to the function 
export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="alphabet">
      <div className="container">
        {/* maps array items to buttons  */}
        {KEYS.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            // sets stules based on status of button
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} 
        ${isActive ? styles.active : ""}
        ${isInactive ? styles.inactive : ""}
        `}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}

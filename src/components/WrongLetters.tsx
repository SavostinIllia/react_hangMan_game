import React from "react";

interface WrongLettersProps {
  wrongLetters: string[];
}

const WrongLetters: React.FC<WrongLettersProps> = ({ wrongLetters }) => {
  const renderWrongLetters = (): JSX.Element =>
    wrongLetters
      .map((letter, i) => <span key={i}>{letter}</span>)
      .reduce((prev: any, curr) => {
        if (prev === null) return [curr];
        else return [prev, ", ", curr];
      }, null);

  return (
    <div>
      {wrongLetters.length > 0 && <p>Wrong letters</p>}
      {renderWrongLetters()}
    </div>
  );
};

export default WrongLetters;

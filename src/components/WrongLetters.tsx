import React from "react";
import styled from "styled-components";

interface WrongLettersProps {
  wrongLetters: string[];
}

const WrongLettersWrapper = styled.div`
  flex: 0 0 50%;
  margin-top: 50px;
  color: #fff;
  @media (max-width: 600px) {
    flex: 0 0 100%;
  }
`;

const WrongLettersText = styled.p`
  font-size: 30px;
  padding-bottom: 15px;
`;

const WrongCurrentLetter = styled.span`
  font-size: 25px;
  margin-right: 5px;
`;

const WrongLetters: React.FC<WrongLettersProps> = ({ wrongLetters }) => {
  const renderWrongLetters = (): JSX.Element =>
    wrongLetters
      .map((letter, i) => (
        <WrongCurrentLetter key={i}>{letter}</WrongCurrentLetter>
      ))
      .reduce((prev: any, curr) => {
        if (prev === null) return [curr];
        else return [prev, ", ", curr];
      }, null);

  return (
    <WrongLettersWrapper>
      {wrongLetters.length > 0 && (
        <WrongLettersText>Wrong letters : </WrongLettersText>
      )}
      {renderWrongLetters()}
    </WrongLettersWrapper>
  );
};

export default WrongLetters;

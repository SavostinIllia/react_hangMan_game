import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HangFigure from "../components/HangFigure";
import Word from "../components/Word";
import WrongLetters from "../components/WrongLetters";

interface HangManGameContainerProps {
  selectedWord: string;
}
const HangManContainerSection = styled.section`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
`;

const HangManGameContainer: React.FC<HangManGameContainerProps> = ({
  selectedWord,
}) => {
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  useEffect(() => {
    const keyPressHandle = (event: KeyboardEvent) => {
      const { key, keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        const letter: string = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
          }
        }
      }
    };

    window.addEventListener("keydown", keyPressHandle);

    return () => window.removeEventListener("keydown", keyPressHandle);
  }, [correctLetters, wrongLetters]);

  return (
    <>
      <HangManContainerSection>
        <HangFigure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </HangManContainerSection>
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </>
  );
};

export default HangManGameContainer;

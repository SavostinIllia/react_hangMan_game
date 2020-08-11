import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HangFigure from "../components/HangFigure";
import Word from "../components/Word";
import WrongLetters from "../components/WrongLetters";
import { showNotification as show } from "../notificationHeleprs/showNotification";
import HelperPopup from "../components/HelperPopup";
import Popup from "../components/Popup";
interface HangManGameContainerProps {
  selectedWord: string;
  setGameInit(playeble: boolean): void;
  getSelectedWord(word: string): void;
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
  setGameInit,
  getSelectedWord,
}) => {
  const [playable, setPlayable] = useState<boolean>(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    const keyPressHandle = (event: KeyboardEvent) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter: string = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", keyPressHandle);

    return () => window.removeEventListener("keydown", keyPressHandle);
  }, [correctLetters, wrongLetters, playable]);

  function playAgainHandler() {
    setCorrectLetters([]);
    setWrongLetters([]);
    getSelectedWord("");
    setPlayable(!playable);
    setGameInit(false);
  }

  return (
    <>
      <HangManContainerSection>
        <HangFigure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </HangManContainerSection>
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgainHandler={playAgainHandler}
      />
      <HelperPopup showNotification={showNotification} />
    </>
  );
};

export default HangManGameContainer;

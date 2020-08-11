import React, { useEffect } from "react";
import { popupMessage as showPopupMessage } from "../notificationHeleprs/popupMessage";
import styled from "styled-components";

interface PopupProps {
  correctLetters: string[];
  wrongLetters: string[];
  selectedWord: string;
  setPlayable(playable: boolean): void;
  playAgainHandler(): void;
}

const PopupMesaageShowWrapper = styled.section`
  min-height: 0.1px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  opacity: 0;
`;

const PopupMessageContainer = styled.div`
  display: block;
  width: 450px;
  padding: 20px;
  background: #192a56;
  color: #fff;
  border-radius: 10px;
`;

const PopupMessageTextStatus = styled.h2`
  font-size: 35px;
  color: #fff;
  margin-bottom: 25px;
`;

const PopupMessageTextLose = styled.h3`
  font-size: 30px;
  color: #fff;
  margin-bottom: 25px;
`;

const PopupPlayAgainButton = styled.button`
  background: transparent;
  border: 1.5px solid #fff;
  font-size: 25px;
  border-radius: 10px;
  padding: 7px 15px;
  color: #fff;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: inset 10px 10px 5px 0 rgba(0, 0, 0, 0.7);
    transition: 0.3s ease-in-out;
  }
`;

const Popup: React.FC<PopupProps> = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgainHandler,
}) => {
  let popupMessage: string = "";
  let popupMessageSelectedWord: string = "";
  let playable = true;

  if (showPopupMessage(correctLetters, wrongLetters, selectedWord) === "win") {
    popupMessage = "Congratulations, You won 🥳";
    playable = false;
  }

  if (showPopupMessage(correctLetters, wrongLetters, selectedWord) === "lose") {
    popupMessage = "You lose 🤯";
    popupMessageSelectedWord = `...the selected word was : '${selectedWord}'`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <PopupMesaageShowWrapper
      style={popupMessage !== "" ? { minHeight: "100vh", opacity: 1 } : {}}
    >
      <PopupMessageContainer>
        <PopupMessageTextStatus>{popupMessage}</PopupMessageTextStatus>
        <PopupMessageTextLose>{popupMessageSelectedWord}</PopupMessageTextLose>
        <PopupPlayAgainButton onClick={playAgainHandler}>
          Play again
        </PopupPlayAgainButton>
      </PopupMessageContainer>
    </PopupMesaageShowWrapper>
  );
};
export default Popup;

import React, { useEffect, useState } from "react";
import GameInitializationForm from "../components/HangManWordInitFrom";
import HangManGameContainer from "./HangManGameContainer";
import styled from "styled-components";

const HangManHeader = styled.header<{ gameInit: boolean }>`
  font-size: 85px;
  padding-top: ${(props) => (props.gameInit ? "50px" : "120px")};
  transition: 0.3s ease-in-out;
  text-align: center;
  color: #fff;
`;

const EmojiWrapper = styled.span`
  display: inline-block;
  margin-left: 8px;
`;

const HangManPage: React.FC = () => {
  const [selectedWord, getSelectedWord] = useState<string>("");
  const [gameInit, setGameInit] = useState<boolean>(false);

  useEffect(() => {
    if (selectedWord.length) {
      setGameInit(true);
    }
  }, [selectedWord]);

  return (
    <>
      <HangManHeader gameInit={gameInit}>
        React HangMan Game
        <EmojiWrapper role="img" aria-label="HangMan">
          😵
        </EmojiWrapper>
      </HangManHeader>
      {gameInit ? (
        <HangManGameContainer
          selectedWord={selectedWord}
          setGameInit={setGameInit}
          getSelectedWord={getSelectedWord}
        />
      ) : (
        <GameInitializationForm
          getSelectedWord={(selectedWord) => getSelectedWord(selectedWord)}
        />
      )}
    </>
  );
};

export default HangManPage;

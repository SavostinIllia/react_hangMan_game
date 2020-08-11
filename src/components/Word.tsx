import React from "react";
import styled from "styled-components";

interface WordProps {
  selectedWord: string;
  correctLetters: string[];
}

const WordWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const WordLetter = styled.span`
  color: #fff;
  border-bottom: 2.5px solid #fff;
  padding-bottom: 10px;
  margin-right: 8px;
  display: inline-block;
  font-size: 25px;
  width: 25px;
  text-align: center;
`;

const Word: React.FC<WordProps> = ({ selectedWord, correctLetters }) => {
  return (
    <WordWrapper>
      {selectedWord.split("").map((letter: string, i: number) => {
        return (
          <WordLetter key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </WordLetter>
        );
      })}
    </WordWrapper>
  );
};

export default Word;

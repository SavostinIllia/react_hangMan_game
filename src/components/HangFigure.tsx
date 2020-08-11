import React from "react";
import styled from "styled-components";

interface HangFigureProps {
  wrongLetters: string[];
}

const FigureWrapper = styled.div`
  flex: 0 0 50%;
`;
const SvgHang = styled.svg<{ height: number; width: number }>`
  fill: transparent;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linecap: round;
  margin-top: 50px;
`;

const FigurePart = styled.line``;
const FigureCircle = styled.circle``;
const FigureRod = styled.line``;

const HangFigure: React.FC<HangFigureProps> = ({ wrongLetters }) => {
  const wrongLetterMistake: number = wrongLetters.length;

  return (
    <FigureWrapper>
      <SvgHang height={250} width={250}>
        {/* <!-- Rod --> */}
        <FigureRod x1="60" y1="20" x2="140" y2="20" />
        <FigureRod x1="140" y1="20" x2="140" y2="50" />
        <FigureRod x1="60" y1="20" x2="60" y2="230" />
        <FigureRod x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        {wrongLetterMistake > 0 && <FigureCircle cx="140" cy="70" r="20" />}

        {/* <!-- Body --> */}
        {wrongLetterMistake > 1 && (
          <FigurePart x1="140" y1="90" x2="140" y2="150" />
        )}

        {/* <!-- Arms --> */}
        {wrongLetterMistake > 2 && (
          <FigurePart x1="140" y1="120" x2="120" y2="100" />
        )}
        {wrongLetterMistake > 3 && (
          <FigurePart x1="140" y1="120" x2="160" y2="100" />
        )}
        {wrongLetterMistake > 4 && (
          <FigurePart x1="140" y1="150" x2="120" y2="180" />
        )}
        {wrongLetterMistake > 5 && (
          <FigurePart x1="140" y1="150" x2="160" y2="180" />
        )}

        {/* <!-- Legs --> */}
      </SvgHang>
    </FigureWrapper>
  );
};

export default HangFigure;

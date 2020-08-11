import React from "react";
import styled from "styled-components";

const SvgHang = styled.svg<{ height: number; width: number }>`
  fill: transparent;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linecap: round;
  margin-top: 50px;
`;

const FigurePart = styled.line`
  display: none;
`;

const FigureRod = styled.line``;

const HangFigure: React.FC = () => {
  return (
    <div>
      <SvgHang height={250} width={250}>
        {/* <!-- Rod --> */}
        <FigureRod x1="60" y1="20" x2="140" y2="20" />
        <FigureRod x1="140" y1="20" x2="140" y2="50" />
        <FigureRod x1="60" y1="20" x2="60" y2="230" />
        <FigureRod x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        <FigurePart cx="140" cy="70" r="20" />
        {/* <!-- Body --> */}
        <FigurePart x1="140" y1="90" x2="140" y2="150" />
        {/* <!-- Arms --> */}
        <FigurePart x1="140" y1="120" x2="120" y2="100" />
        <FigurePart x1="140" y1="120" x2="160" y2="100" />
        {/* <!-- Legs --> */}
        <FigurePart x1="140" y1="150" x2="120" y2="180" />
        <FigurePart x1="140" y1="150" x2="160" y2="180" />
      </SvgHang>
    </div>
  );
};

export default HangFigure;

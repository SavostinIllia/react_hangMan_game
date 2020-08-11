import React from "react";
import styled from "styled-components";

interface HelperPopupProps {
  showNotification: boolean;
}

const PopupNotification = styled.div`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translate(-50%);
  display: block;
  background: #192a56;
  border: 2px solid #192a56;
  border-radius: 10px;
  padding: 30px 15px;
  transition: 0.3s ease-in-out;
  color: #fff;
  font-size: 18px;
  opacity: 0.8;
  &.show {
    bottom: -10px;
    transition: 0.3s ease-in-out;
  }
`;

const HelperPopup: React.FC<HelperPopupProps> = ({ showNotification }) => {
  return (
    <PopupNotification className={showNotification ? "show" : ""}>
      You have entered this letter twice
    </PopupNotification>
  );
};
export default HelperPopup;

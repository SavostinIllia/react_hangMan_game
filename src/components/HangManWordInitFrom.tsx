import React, { useState } from "react";
import styled from "styled-components";

interface GameInitializationFormProps {
  getSelectedWord(word: string): void;
}

const SetWordForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  align-items: stretch;
  margin-top: 20px;
`;
const InputWordWrapper = styled.div`
  width: 60%;
  position: relative;
`;
const SetWordFormInput = styled.input`
  padding: 5px 15px;
  font-size: 25px;
  color: #fff;

  border: 1.5px solid #fff;
  background: transparent;
  border-radius: 5px;
  margin-right: 10px;
`;
const WordInputLabel = styled.label<{ errorLabel: string }>`
  color: ${(props) => (props.errorLabel ? "#c0392b" : null)};
  font-size: 25px;
  display: block;
  margin-bottom: 15px;
`;
const WordSubmitButton = styled.button`
  background: transparent;
  border: 1.5px solid #fff;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: inset 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
const WordShowButton = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
`;

const GameInitializationForm: React.FC<GameInitializationFormProps> = ({
  getSelectedWord,
}) => {
  const [selectedWordInit, setSelectedWord] = useState<string>("");
  const [errorLabel, setErrorLabel] = useState<string>("");
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedWord(e.target.value.trim());
  };

  const onSumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedWordInit.length <= 3) {
      setErrorLabel("The word can't be so short, must be at least 4 letters ");
      return;
    }
    getSelectedWord(selectedWordInit.trim().toLowerCase());
    setSelectedWord("");
  };

  return (
    <>
      <SetWordForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSumbitHandler(e)}
      >
        <WordInputLabel errorLabel={errorLabel}>
          {!errorLabel ? "" : errorLabel}
        </WordInputLabel>
        <InputWordWrapper>
          <SetWordFormInput
            type={!isShowResult ? "password" : "text"}
            value={selectedWordInit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e)
            }
          />
          <WordShowButton
            type="button"
            onMouseDown={() => setIsShowResult(!isShowResult)}
            onMouseUp={() => setIsShowResult(!isShowResult)}
          >
            {!isShowResult ? (
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-eye-fill"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            ) : (
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-eye-slash-fill"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z" />
                <path
                  fillRule="evenodd"
                  d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"
                />
              </svg>
            )}
          </WordShowButton>
        </InputWordWrapper>
        <WordSubmitButton type="submit">Set word</WordSubmitButton>
      </SetWordForm>
    </>
  );
};

export default GameInitializationForm;

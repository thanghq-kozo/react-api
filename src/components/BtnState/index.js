import React from "react";
import Button from "../Button";

function BtnState(props) {
  const dataWord = props.dataWord;
  const handleAgain = () => {
    dataWord.unshift(dataWord[dataWord.length - 1]);
    dataWord.pop();
    props.setDataWord(dataWord);
    props.setWordInfo(dataWord[dataWord.length - 1]);
    props.setResult(false);
  };
  const handleHard = () => {
    dataWord.pop();
    props.setDataWord(dataWord);
    props.setWordInfo(dataWord[dataWord.length - 1]);
    props.setResult(false);
  };
  const handleGood = () => {
    dataWord.pop();
    props.setDataWord(dataWord);
    props.setWordInfo(dataWord[dataWord.length - 1]);
    props.setResult(false);
  };
  const handleEasy = () => {
    dataWord.pop();
    props.setDataWord(dataWord);
    props.setWordInfo(dataWord[dataWord.length - 1]);
    props.setResult(false);
  };

  return (
    <div className="mb-3 text-center">
      <Button data={{ name: "Again" }} handleClick={handleAgain} />
      <Button data={{ name: "Hard" }} handleClick={handleHard} />
      <Button data={{ name: "Good" }} handleClick={handleGood} />
      <Button data={{ name: "Easy" }} handleClick={handleEasy} />
    </div>
  );
}

export default BtnState;

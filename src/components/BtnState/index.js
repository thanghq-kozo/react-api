import React from "react";
import Button from "../Button";

function BtnState(props) {
  const dataWord = props.dataWord;

  const handleNext = () => {
    dataWord.pop();
    props.setDataWord(dataWord);
    props.setWordInfo(dataWord[dataWord.length - 1]);
    props.setResult(false);
    if (dataWord.length === 0) alert("Done review en");
    props.setValues({ answer: "" });
    if (dataWord.length === 0) {
      props.setReviewEN(false);
      props.setReviewVI(false);
    }
  };

  const handleAgain = () => {
    dataWord.unshift(dataWord[dataWord.length - 1]);
    handleNext();
  };

  const handleHard = () => {
    handleNext();
  };

  const handleGood = () => {
    handleNext();
  };

  const handleEasy = () => {
    handleNext();
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

import React from "react";
import Button from "../Button";

function BtnState(props) {
  const dataWord = props.dataWord;

  const handleNext = () => {
    dataWord.pop();
    props.setDataWord(dataWord);
    props.setWordInfo(dataWord[dataWord.length - 1]);
    props.setResult(false);
    if (dataWord.length === 0) alert("Done review");
    props.setValues({ answer: "" });
  };

  const handleAgain = () => {
    dataWord.unshift(dataWord[dataWord.length - 1]);
    handleNext();
  };

  const handleHard = () => {
    handleNext();
    if (dataWord.length === 0) props.setReview(false);
  };

  const handleGood = () => {
    handleNext();
    if (dataWord.length === 0) props.setReview(false);
  };

  const handleEasy = () => {
    handleNext();
    if (dataWord.length === 0) props.setReview(false);
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

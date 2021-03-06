import Input from "../../components/Input";
import Button from "../../components/Button";
import Search from "../../components/Search";
import Suggest from "../../components/Suggest";
import { useState } from "react";
import Word from "../../components/WordVi";
import review from "../../review.json";

const DEFINE = {
  TRY_LEARN: 3,
};

function ReviewVI(props) {
  const [result, isResult] = useState(false);
  const [suggest, setSuggest] = useState(false);
  const [isClickButton, setIsClickButton] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [textNextFinish, setTextNextFinish] = useState("Next");
  const [isNext, setIsNext] = useState(0);

  const [values, setValues] = useState({ answer: "" });
  const [wordInfo, setWordInfo] = useState(review[review.length - 1]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const toggleButton = () => {
    setIsClickButton((isClickButton) => !isClickButton);
  };

  const compareString = (strFirst, strSecond) => {
    return strFirst.trim().toLowerCase() === strSecond.trim().toLowerCase();
  };

  const handleSubmit = () => {
    toggleButton();
    const isCorrect = compareString(values.answer, wordInfo.mean);
    isResult(isCorrect);
    if (!isCorrect) setIsNext((isNext) => ++isNext);
    if (isCorrect) {
      setIsNext(0);
      setSuggest(false);
    }
    if (isNext === DEFINE.TRY_LEARN - 1) setDisabled(true);
    toggleButton();
  };

  const handleNext = async () => {
    toggleButton();
    isResult(false);
    setSuggest(false);
    setDisabled(false);
    setIsNext(0);
    review.pop();
    setValues({ answer: "" });
    if (review.length !== 0) setWordInfo(review[review.length - 1]);
    if (review.length === 1) setTextNextFinish("Finish");
    if (review.length === 0) {
      alert("Congratulations");
      props.setReviewVI(false);
      props.setReviewEI(false);
    }
    toggleButton();
  };

  const handleSuggest = async () => {
    toggleButton();
    setSuggest(true);
    toggleButton();
  };

  return (
    <div>
      <div
        className="login-form my-5"
        style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="card">
          <div className="card-body">
            <div className="mb-3 text-center">
              <Word data={wordInfo} />
            </div>
            <div className="mb-3">
              <Input
                data={{
                  label: "ANSWER",
                  type: "text",
                  name: "answer",
                  pla: "Please enter your answer!!",
                }}
                disabled={disabled}
                value={values.answer}
                onChange={handleChange}
              />
            </div>
            {isNext > 0 && (
              <div className="mb-3 text-center">
                <span style={{ color: "red" }}>Error {isNext}</span>
              </div>
            )}
            <div className="text-center">
              {isNext >= DEFINE.TRY_LEARN || result ? (
                <Button
                  data={{ name: textNextFinish, className: "btn-secondary" }}
                  handleClick={handleNext}
                />
              ) : (
                <span>
                  <Button
                    isShow={isClickButton}
                    data={{ name: "Suggest" }}
                    handleClick={handleSuggest}
                  />

                  <Button
                    isShow={isClickButton}
                    data={{ name: "Submit" }}
                    handleClick={handleSubmit}
                  />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {result && wordInfo && <Search data={wordInfo} />}
      {suggest && <Suggest data={wordInfo.definitions.slice(0, 5)} />}
    </div>
  );
}

export default ReviewVI;

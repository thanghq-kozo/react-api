import { useState } from "react";
import WordLearn from "../../components/WordLearn";
import MultiPlayer from "../../components/MultiPlayer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Suggest from "../../components/Suggest";
import data from "../../review.json";
import BtnState from "../../components/BtnState";

function ReviewEN(props) {
  const [wordInfo, setWordInfo] = useState(data[data.length - 1]);
  const [dataWord, setDataWord] = useState(data);
  const [result, setResult] = useState(false);
  const [textNextFinish, setTextNextFinish] = useState("Next");
  const [values, setValues] = useState({ answer: "" });

  const compareString = (strFirst, strSecond) => {
    return strFirst.trim().toLowerCase() === strSecond.trim().toLowerCase();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const isCorrect = compareString(values.answer, wordInfo.word);
    setResult(isCorrect);
    if (!isCorrect) alert("Please check your answer again");
  };

  const handleNext = async () => {
    setResult(true);
    if (dataWord.length === 2) setTextNextFinish("Finish");
  };

  return (
    <div
      className="login-form my-5"
      style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="card">
        <div className="card-body">
          <div className="form-wrapper">
            <WordLearn data={wordInfo} result={result} />
            {!result ? (
              <div className="mb-3">
                <Input
                  data={{
                    label: "ANSWER",
                    type: "text",
                    name: "answer",
                    pla: "Please enter your answer!!",
                  }}
                  value={values.answer}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <>
                <Suggest
                  data={wordInfo.definitions.slice(0, 5)}
                  word={wordInfo.word}
                />

                <div className="mb-3">
                  <b>Audios:</b>
                  <MultiPlayer urls={wordInfo.audios.slice(0, 2)} />
                </div>
              </>
            )}
            <div className="text-center">
              {result ? (
                <BtnState
                  setWordInfo={setWordInfo}
                  dataWord={dataWord}
                  setDataWord={setDataWord}
                  setResult={setResult}
                  setReviewEN={props.setReviewEN}
                  setReviewVI={props.setReviewVI}
                  setValues={setValues}
                />
              ) : (
                <span>
                  <Button
                    data={{ name: "Submit" }}
                    handleClick={handleSubmit}
                  />
                  <Button
                    data={{ name: textNextFinish, className: "btn-secondary" }}
                    handleClick={handleNext}
                  />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewEN;

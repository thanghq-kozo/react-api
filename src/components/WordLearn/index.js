import { useEffect, useState } from "react";

function WordLearn(props) {
  const result = props.result;
  const [word, setWord] = useState("");
  const data = props.data;
  
  useEffect(() => {
    if (result) setWord(data.word);
    else {
      let w = "";
      const words = data.syllable.split("‧");
      const rndInt = Math.floor(Math.random() * words.length);
      for (let i = 0; i < words.length; i++) {
        if (i === rndInt) {
          words[i] = "__";
        }
        w = w + words[i];
      }
      setWord(w);
    }
  }, [result, data.word, data.syllable]);

  return (
    <div className="mb-3 text-center">
      <b>{word}</b> <span> - {data.type}</span> <span> - {data.mean}</span>
    </div>
  );
}

export default WordLearn;

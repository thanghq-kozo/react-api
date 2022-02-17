function WordLearn(props) {
  const data = props.data;
  const result = props.result;
  let word = "";
  if (result) word = data.word;
  else {
    const words = data.syllable.split("‧");
    const rndInt = Math.floor(Math.random() * words.length);
    for (let i = 0; i < words.length; i++) {
      if (i === rndInt) {
        words[i] = "__";
      }
      word = word + words[i];
    }
  }
  return (
    <div className="mb-3 text-center">
      <b>{word}</b> <span> - {data.type}</span> <span> - {data.mean}</span>
    </div>
  );
}

export default WordLearn;

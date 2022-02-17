function Word(props) {
  const { data } = props;
  const hidden = (word) => {
    let vi = "";
    let full = "";
    const words = word.split(" ");
    words.map((word) => {
      vi = " " + word[0];
      for (let index = 1; index < word.length; index++) {
        vi += " _";
      }
      full += vi + " ";
      return full;
    });
    return full;
  };

  return (
    <div className="mb-3 text-center">
      <span>{data.word}:&emsp;</span>
      <span>
        <label>{hidden(data.mean)}</label>
      </span>
    </div>
  );
}

export default Word;

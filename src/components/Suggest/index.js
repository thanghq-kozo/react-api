import "./Suggest.css";

function Suggest(props) {
  const data = props.data;
  const word = props.word;
  return (
    <div className="mb-3">
      <b>Definition Eng-Eng:</b>
      <br />
      {data.map((text, i) => {
        return (
          <div key={i} className="div-content">
            <p className="definition-upper">{text.replace(word, "...")}.</p>
          </div>
        );
      })}
    </div>
  );
}

export default Suggest;

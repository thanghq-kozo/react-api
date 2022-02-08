import './Search.css'
function Search(props) {
  let data = props.data;
  return (
    <div
      className="login-form my-5"
      style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="card">
        <div className="card-body">
          <div className="form-wrapper">
            <div className="mb-3">
              <b>Mean:</b> <span>{data.mean}</span>
            </div>
            <div className="mb-3">
              <b>Syllable:</b> <span>{data.syllable}</span>
            </div>
            <div className="mb-3">
              <b>WordFam:</b>
              <br />
              <b>&emsp;WordFamily:&emsp;</b>
              {data.wordFam["wordFamily"].map((text, i) => {
                return <span>{text}&emsp;</span>;
              })}
              <br />
              <b>&emsp;WordFamilyRaw:&emsp;</b>
              {data.wordFam["wordFamilyRaw"].map((text, i) => {
                return <span>{text}&emsp;</span>;
              })}
            </div>
            <div className="mb-3">
              <b>Pronounce:</b> <span>{data.pronounce}</span>
            </div>
            <div className="mb-3">
              <b>Type:</b> <span>{data.type}</span>
            </div>
            <div className="mb-3">
              <b>Definitions:</b>
              <br />
              {data.definitions.map((text, i) => {
                return <><span className="span-content">- {text}</span><br /></>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;

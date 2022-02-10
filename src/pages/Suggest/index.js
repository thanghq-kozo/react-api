import "./Suggest.css";

function Suggest(props) {
  const data = props.data;
  return (
    <div
      className="login-form my-5"
      style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="card">
        <div className="card-body">
          <div className="form-wrapper">
            <div className="mb-3">
              <b>Definitions:</b>
              <br />
              {data.map((text, i) => {
                return (
                  <div key={i} className="div-content">
                    <span>{i + 1 + ". " + text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggest;

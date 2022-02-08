function Input(props) {
  const { data, onChange, value } = props;

  return (
    <>
      <label className="form-label">{data.label}</label>
      <input
        className="form-control"
        type={data.type}
        name={data.name}
        value={value}
        placeholder={data.pla}
        onChange={onChange}
      />
    </>
  );
}

export default Input;

function Input(props) {
  const { data, onChange, value, disabled } = props;

  return (
    <>
      <label className="form-label">{data.label}</label>
      <input
        disabled={disabled}
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

function Button(props) {
  const { data, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`btn ${data.className || "btn-primary"}`}
    >
      {data.name}
    </button>
  );
}

export default Button;

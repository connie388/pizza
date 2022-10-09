import "../styles/radioButton.css";
export const RadioButton = ({
  border,
  index,
  name,
  id,
  label,
  value,
  onChange,
}) => {
  return (
    <label
      key={index}
      className={`${border ? "radio-no-border" : "radio-border"}`}
    >
      <input
        key={index}
        name={name}
        id={id}
        type="radio"
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

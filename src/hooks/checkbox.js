export const Checkbox = ({ name, label, value, onChange }) => {
  return (
    <label>
      <input name={name} type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

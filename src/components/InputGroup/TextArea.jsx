export default function TextArea({
  id,
  name,
  value,
  onChange,
  className = "",
  placeholder = "",
  ...rest
}) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      {...rest}
    />
  );
}
      
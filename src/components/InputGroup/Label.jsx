export default function Label({ htmlFor, label, className = "" }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label}
    </label>
  );
}

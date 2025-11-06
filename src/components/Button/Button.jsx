
function Button({ name, type, icon, text, className, ...rest }) {
  return (
    <>
      <button className={className} {...rest} type={type}>
        {name} {text} {icon}

      </button>
    </>
  );
}

export default Button;

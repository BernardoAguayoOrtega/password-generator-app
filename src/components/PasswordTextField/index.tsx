function PasswordTextField({ password = "" }) {
  return (
    <div aria-label='Password text field container'>
      <p>{password}</p>
      <button>Copy password to clipboard</button>
    </div>
  );
}

export default PasswordTextField;

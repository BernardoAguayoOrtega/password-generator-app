import PasswordGenerator from "../PasswordGenerator";
import PasswordTextField from "../PasswordTextField";

function PasswordGeneratorContainer() {
  return (
    <div>
      <PasswordTextField />
      <PasswordGenerator/>
    </div>
  );
}

export default PasswordGeneratorContainer;

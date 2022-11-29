import { render, screen } from "@testing-library/react";
import PasswordTextField from "..";

describe("PasswordTextField", () => {
  it("renders the password text field", () => {
    render(<PasswordTextField />);
    expect(screen.getByLabelText("Password text field container")).toBeInTheDocument();
  });
});

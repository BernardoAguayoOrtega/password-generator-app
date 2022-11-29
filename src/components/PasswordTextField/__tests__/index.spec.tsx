import { render, screen } from "@testing-library/react";
import userevent from '@testing-library/user-event'
import PasswordTextField from "..";

describe("PasswordTextField", () => {
  it("renders the password text field", () => {
    render(<PasswordTextField />);
    expect(
      screen.getByLabelText("Password text field container")
    ).toBeInTheDocument();
  });

  it("renders the password text field with a password", () => {
    render(<PasswordTextField password='password' />);
    expect(
      screen.getByLabelText("Password text field container")
    ).toBeInTheDocument();
  });

  it("renders the password text field with a copy button", () => {
    render(<PasswordTextField password='password' />);
    expect(
      screen.getByRole("button", { name: "Copy password to clipboard" })
    ).toBeInTheDocument();
  });

  it("should copy the password when the user clicks on copy button", () => {
    render(<PasswordTextField password='password' />);
    const copyButton = screen.getByRole("button", {
      name: "Copy password to clipboard",
    });
    userevent.click(copyButton);
    expect(copyButton).toHaveTextContent("Copied!");
  });
});

import { render, screen } from "@testing-library/react";
import PasswordGeneratorContainer from "../index";

describe("PasswordGeneratorContainer", () => {
  it("render the password text field", () => {
    render(<PasswordGeneratorContainer />);
    expect(
      screen.getByLabelText("Password text field container")
    ).toBeInTheDocument();
  });

  it("render the password generator", () => {
    render(<PasswordGeneratorContainer />);
    expect(
      screen.getByTestId("Password generator")
    ).toBeInTheDocument();
  });
});

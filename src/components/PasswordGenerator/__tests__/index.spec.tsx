import { render, screen } from "@testing-library/react";
import PasswordGenerator from "..";

describe("PasswordGenerator", () => {
  it("renders the password generator", () => {
    render(<PasswordGenerator />);
    expect(screen.getByTestId("Password generator")).toBeInTheDocument();
  });
});

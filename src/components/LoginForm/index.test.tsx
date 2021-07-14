import { LoginForm } from "./index";
import { render, screen } from "@testing-library/react";

it("should have a username and a password feild, also login button", () => {
  render(<LoginForm />);

  /**
   * Why I should getByRole instead of getByText
   * https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-the-wrong-query
   * https://testing-library.com/docs/queries/about/#priority
   *
   * Why I should use regex instead of specific string
   * https://github.com/testing-library/testing-playground/issues/158
   *
   * */
  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole("button", { name: /login/i });

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

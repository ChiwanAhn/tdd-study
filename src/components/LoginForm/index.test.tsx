import { LoginForm } from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should have a username and a password feild, also login button", () => {
  const submit = jest.fn();
  render(<LoginForm onSubmit={submit} />);

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

it("should allow the users to submit their credentials", () => {
  const submit = jest.fn();
  render(<LoginForm onSubmit={submit} />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole("button", { name: /login/i });

  const credential = {
    username: "abc@email.com",
    password: "myPassword",
  };
  userEvent.type(usernameField, credential.username);
  userEvent.type(passwordField, credential.password);
  userEvent.click(loginButton);

  expect(submit).toHaveBeenCalledWith({
    username: credential.username,
    password: credential.password,
  });
});

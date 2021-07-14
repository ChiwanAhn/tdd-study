import React, { useState } from "react";

interface LoginFormProps {
  onSubmit: (credential: { username: string; password: string }) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [values, setValues] = useState({ username: "", password: "" });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ ...values });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

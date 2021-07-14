export const LoginForm: React.FC = () => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

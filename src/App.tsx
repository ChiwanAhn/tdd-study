import React from "react";
import { LoginForm } from "./components/LoginForm";

function App() {
  return (
    <div>
      <LoginForm onSubmit={(c) => console.log(c)}></LoginForm>
    </div>
  );
}

export default App;

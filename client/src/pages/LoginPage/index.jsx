import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./styles.css";

function LoginPage() {
  const { authenticated, user, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { authenticated, login } = useContext(AuthContext);
  //const [token, setToken] = useState("");

  const handleLogin = async () => {
    //   const response = await createSession(email, password);
    console.log("email", email);
    console.log("password", password);

    login(email, password);
  };

  return (
    <div id="login">
      <h1 className="title">Login do sistema</h1>
      <p>Authenticated: {JSON.stringify(authenticated)}</p>
      <p>Email: {JSON.stringify(user)}</p>
      <div className="form">
        <div className="field">
          <label htmlFor="email" className="email">
            Email
          </label>
          <input
            type="email"
            className="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password" className="password">
            Senha
          </label>
          <input
            type="password"
            className="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button onClick={handleLogin} type="submit" className="submit">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

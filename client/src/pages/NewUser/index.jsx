import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import { createUser } from "../../services/api";

import "./styles.css";

function NewUser() {
  const { authenticated, user, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //const { authenticated, login } = useContext(AuthContext);
  //const [token, setToken] = useState("");

  const handleCreateUser = async () => {
    const response = await createUser(email, password);
    console.log("email", email);
    console.log("password", password);

    login(email, password);
  };

  return (
    <div id="login">
      <h1 className="title">Cadastrar no Sistema</h1>
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
        <div className="field">
          <label htmlFor="passwordConfirm" className="password">
            Confirme a Senha
          </label>
          <input
            type="password"
            className="password"
            name="passwordConfirm"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className="actions">
          <button onClick={handleCreateUser} type="submit" className="submit">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewUser;

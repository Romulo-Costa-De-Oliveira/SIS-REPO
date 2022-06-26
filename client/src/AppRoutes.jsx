import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthContext } from "./contexts/auth";

const AppRoutes = () => {
  const [user, setUser] = useState(null);

  const login = (email, password, id) => {
    console.log("login auth", email, password);
    setUser({ id, email });
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <Router>
      <AuthContext.Provider
        value={{
          authenticated: !!user,
          user,
          login,
        }}
      >
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};
export default AppRoutes;

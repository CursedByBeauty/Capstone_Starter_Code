import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="login-page">
      <div className="resident-box">
        <form
          action="/action_page.php"
          className="form"
          onSubmit={handleSubmit}
        >
          <label>Username:</label>
          <input
            type="text"
            className="resident-form"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <label>Password:</label>
          <input
            type="text"
            name="password"
            className="resident-form"
            value={formData.password}
            onChange={handleInputChange}
          />

          {isServerError ? (
            <p className="error">Login failed, incorrect credentials!</p>
          ) : null}
          <Link to="/register">Click to register!</Link>
          <button className="button">Login!</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

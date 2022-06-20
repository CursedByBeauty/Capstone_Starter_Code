import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="register">
      <div className="login-page">
        <div className="resident-box">
          <form
            className="form"
            action="/action_page.php"
            onSubmit={handleSubmit}
          >
            <label>Username: </label>
            <input
              type="text"
              name="username"
              className="resident-form"
              value={formData.username}
              onChange={handleInputChange}
            />

            <label>First Name: </label>
            <input
              type="text"
              name="firstName"
              className="resident-form"
              value={formData.firstName}
              onChange={handleInputChange}
            />

            <label>Last Name: </label>
            <input
              type="text"
              name="lastName"
              className="resident-form"
              value={formData.lastName}
              onChange={handleInputChange}
            />

            <label>Email: </label>
            <input
              type="text"
              name="email"
              className="resident-form"
              value={formData.email}
              onChange={handleInputChange}
            />

            <label>Password: </label>
            <input
              type="text"
              name="password"
              className="resident-form"
              value={formData.password}
              onChange={handleInputChange}
            />

            <label>Role: </label>
            <select
              className="resident-form"
              name="role"
              onChange={handleInputChange}
            >
              <option>Choose Here</option>
              <option value="Management">Management</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Resident">Resident</option>
            </select>

            <p style={{ fontSize: "12px" }}>
              NOTE: Make this an uncommon password with characters, numbers, and
              special characters!
            </p>
            <button className="button">Register!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

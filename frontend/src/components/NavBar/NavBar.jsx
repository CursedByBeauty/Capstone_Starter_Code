import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul className="navigation">
        <li>
          {user ? (
            <button className="button" onClick={logoutUser}>
              Logout
            </button>
          ) : (
            <button className="button" onClick={() => navigate("/login")}>
              Login
            </button>
          )}{" "}
        </li>
        <li>
          <button className="button" onClick={() => navigate("/resident")}>
            Create Ticket
          </button>
        </li>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>eTickets</b>
          </Link>
        </li>
        <li>
          <button className="button" onClick={() => navigate("/")}>
            Incomplete Tickets
          </button>
        </li>
        <li>
          <button className="button" onClick={() => navigate("/completed")}>
            Completed Tickets
          </button>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import "./NavBar.css";

const Navbar = (props) => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  function handleSearch() {
    let result = props.tickets.filter((ticket) => {
      if (
        ticket.resident.first_name.toLowerCase() +
          " " +
          ticket.resident.last_name.toLowerCase() ===
        search.toLowerCase()
      ) {
        return true;
      } else if (ticket.unit.toString() === search) {
        return true;
      } else if (ticket.subject.toLowerCase() === search.toLowerCase()) {
        return true;
      } else if (ticket.comments.includes(search.toLowerCase())) {
        return true;
      } else if (ticket.entry.toLowerCase() === search.toLowerCase()) {
        return true;
      } else if (
        ticket.priority.toLowerCase() === search[0].toLowerCase() ||
        ticket.status.toLowerCase() === search[0].toLowerCase()
      ) {
        return true;
      }
    });
  props.setTickets(result)
  setSearch("")
  if (search === "") {
    props.getAllTickets()
  }
  }
  return (
    <div className="navBar">
      <ul className="navigation">
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>eTickets</b>
          </Link>
        </li>
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
        <li className="search-bar">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          <button onClick={() => handleSearch()} className="button">
            Search
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

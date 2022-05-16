import React from "react";
import { Link } from "react-router-dom";
import "./Portal.css"
const PortalChoicePage = (props) => {
  return (
    <div>
      <div className="portal">
      <div className="col-lg-12 text-center">
        <Link to="/resident">
          <button className="button">Resident Portal</button>
        </Link>
      </div>
      <div className="col-lg-12 text-center">
        <Link to="/maintenance">
          <button className="button">Maintenance Portal</button>
        </Link>
      </div>
      <div className="col-lg-12 text-center">
        <Link to="/completed">
          <button className="button">Property Manager Portal</button>
        </Link>
      </div></div>
    </div>
  );
};

export default PortalChoicePage;

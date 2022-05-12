import React from "react";
import { Link } from "react-router-dom";
const PortalChoicePage = (props) => {
  return (
    <div>
      <div className="col-lg-12 text-center">
        <Link to="/resident">
          <button>Resident Portal</button>
        </Link>
      </div>
      <div className="col-lg-12 text-center">
        <Link to="/maintenance">
          <button>Maintenance Portal</button>
        </Link>
      </div>
      <div className="col-lg-12 text-center">
        <Link to="/completed">
          <button>Property Manager Portal</button>
        </Link>
      </div>
    </div>
  );
};

export default PortalChoicePage;

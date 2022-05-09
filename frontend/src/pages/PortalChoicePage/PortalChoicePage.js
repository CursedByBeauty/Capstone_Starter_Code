import React from "react";
import { Link } from "react-router-dom";
const PortalChoicePage = (props) => {
  return (
    <div>
      <Link to="/resident">
        <button>Resident Portal</button>
      </Link>
      <Link to="/maintenance">
        <button>Maintenance Portal</button>
      </Link>
    </div>
  );
};

export default PortalChoicePage;

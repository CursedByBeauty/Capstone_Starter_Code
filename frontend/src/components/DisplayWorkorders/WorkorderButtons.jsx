import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const WorkorderButtons = (props) => {
const [user, token] = useAuth()
  if (user.role === "Maintenance" || user.role === "Management") {
    return (
      <div>
        <Link to={`/response/${props.orderId}/`}>
          <button className="button">Fill Out Ticket</button>
        </Link>
      </div>
    );
  } else return (
    <div>
        <button className="button">Update Ticket</button>
    </div>
  )
};

export default WorkorderButtons;

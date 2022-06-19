import React from "react";
import { Link } from "react-router-dom";
const TicketButtons = (props) => {
  return (
    <div>
      <Link to={`/response/${props.orderId}/`}>
        <button className="button">Fill Out Ticket</button>
      </Link>
      <button className="button">Update Ticket</button>
    </div>
  );
};

export default TicketButtons;

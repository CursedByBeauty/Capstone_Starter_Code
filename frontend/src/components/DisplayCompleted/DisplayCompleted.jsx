import React from "react";
const DisplayCompleted = (props) => {
  return (
    <div className="container-display">
    {props.tickets.map((order) => {
      // Gave a condition to only display the incomplete and on hold
      if (order.status === "C") {
        return (
          <div key={order.id} className="border-box">
          <ul className="workorder" >
            <li><h4>Date: <small className="text-muted">{order.date}</small></h4> </li>
            <li><h4>Resident: <small className="text-muted">{order.resident}</small> </h4> </li>
            <li><h4>Unit: <small className="text-muted">{order.unit}</small></h4> </li>
            <li><h4>Subject: <small className="text-muted">{order.subject}</small> </h4> </li>
            <li><h4>Priority: <small className="text-muted">{order.priority}</small></h4></li>
            <li><h4>Permission To Enter:<small className="text-muted">{" "}{order.entry}</small></h4></li>
            <li><h4>Comments: <small className="text-muted">{" "}{order.comments}</small></h4></li>
            <li><h4>Status: <small className="text-muted">{" "}{order.status}</small></h4></li>
          </ul>
          </div>
        );
      }
    })}
  </div>
  );
};

export default DisplayCompleted;
import React, { useState } from "react";
const DisplayWorkorders = (props) => {
  return (
    <div>
      {props.tickets.map((order) => {
        <div key={order.id}>
          <div>Date: {order.date}</div>
          <div>Resident: {order.resident}</div>
          <div>Unit: {order.unit}</div>
          <div>Subject: {order.subject}</div>
          <div>Priority: {order.priority}</div>
          <div>Permission To Enter; {order.entry}</div>
          <div>Comments: {order.comments}</div>
        </div>
      })}
    </div>
  );
};

export default DisplayWorkorders;

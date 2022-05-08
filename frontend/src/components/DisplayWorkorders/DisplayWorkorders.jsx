import React from "react";
import { Link } from "react-router-dom";
const DisplayWorkorders = (props) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Resident</th>
            <th scope="col">Unit</th>
            <th scope="col">Subject</th>
            <th scope="col">Priority</th>
            <th scope="col">Permission to Enter</th>
            <th scope="col">Comments</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {props.tickets.map((order) => {
            return (
              <tr key={order.id}>
                <td>{order.date}</td>
                <td>{order.resident}</td>
                <td>{order.unit}</td>
                <td>{order.subject}</td>
                <td>{order.priority}</td>
                <td>{order.entry}</td>
                <td>{order.comments}</td>
                <td>
                  <Link to= {`/response/${order.id}/`}>
                    <button>Fill Out Ticket</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayWorkorders;

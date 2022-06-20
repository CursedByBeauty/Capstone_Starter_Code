import React, { useState, useEffect } from "react";
import axios from "axios";
const DisplayCompleted = (props) => {
  const [workerResponses, setWorkerResponses] = useState([]);

  useEffect(() => {
    getAllResponses();
  }, []);

  async function getAllResponses() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/responses/", {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      });
      setWorkerResponses(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function deleteTicket(id) {
    try {
      let choice = prompt(
        "Would you like to delete this ticket?"
      ).toLowerCase();
      if (choice === "yes") {
        await axios.delete(`http://127.0.0.1:8000/api/workorders/${id}/`, {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        });
        props.getAllTickets();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <h1>Completed Tickets</h1>
      <div className="container-display">
        {props.tickets.map((order) => {
          // Gave a condition to only display the incomplete and on hold
          if (order.status === "C") {
            return (
              <div key={order.id} className="border-box">
                <ul className="workorder">
                  <li>
                    <h4>
                      Date: <small className="text-muted">{order.date}</small>
                    </h4>{" "}
                  </li>
                  <li>
                    <h4>
                      Resident:{" "}
                      <small className="text-muted">
                        {order.resident.first_name} {order.resident.last_name}
                      </small>{" "}
                    </h4>{" "}
                  </li>
                  <li>
                    <h4>
                      Unit: <small className="text-muted">{order.unit}</small>
                    </h4>{" "}
                  </li>
                  <li>
                    <h4>
                      Subject:{" "}
                      <small className="text-muted">{order.subject}</small>{" "}
                    </h4>{" "}
                  </li>
                  <li>
                    <h4>
                      Priority:{" "}
                      <small className="text-muted">{order.priority}</small>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Permission To Enter:
                      <small className="text-muted"> {order.entry}</small>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Comments:{" "}
                      <small className="text-muted"> {order.comments}</small>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Status:{" "}
                      <small className="text-muted"> {order.status}</small>
                    </h4>
                  </li>
                  <li>
                    <button
                      onClick={() => deleteTicket(order.id)}
                      className="button"
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            );
          }
        })}
      </div>
      {/* WORKER RESPONES BELOW */}
      <h1>Worker Responses</h1>
      <div className="container-display">
        {workerResponses.map((response) => {
          return (
            <div key={response.id * 2} className="border-box">
              <ul className="workorder">
                <li>
                  <h4>
                    Date: <small className="text-muted">{response.date}</small>
                  </h4>{" "}
                </li>
                <li>
                  <h4>
                    Worker:{" "}
                    <small className="text-muted">
                      {response.worker.first_name} {response.worker.last_name}
                    </small>
                  </h4>{" "}
                </li>
                <li>
                  <h4>
                    Solution:{" "}
                    <small className="text-muted">{response.comments}</small>{" "}
                  </h4>{" "}
                </li>
                <li>
                  <h4>
                    Related Workorder:{" "}
                    <small className="text-muted">
                      {response.workorder.comments}
                    </small>
                  </h4>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayCompleted;

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const WorkorderButtons = (props) => {
  const [user, token] = useAuth();
  function handleUpdate() {
    try {
      let ticket = {
        resident_id: props.ticket.resident.id,
        unit: props.ticket.unit,
        subject: props.ticket.subject,
        comments: props.ticket.comments,
        entry: props.ticket.entry,
        priority: props.ticket.priority,
        status: props.ticket.status,
      };
      let updateChoice = prompt(
        "What would you like to update?\n0 for Subject\n1 for Priority\n2 for Permission to Enter\n3 for Comment."
      );
      let answer = prompt("Enter new value");
      if (updateChoice === "0") {
        ticket.subject = answer;
      } else if (updateChoice === "1") {
        ticket.priority = answer;
      } else if (updateChoice === "2") {
        ticket.entry = answer;
      } else if (updateChoice === "3") {
        ticket.comments = answer;
      }
      updateTicket(ticket, props.ticket.id);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function updateTicket(ticketBody, id) {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/workorders/${id}/`,
        ticketBody,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      props.getAllTickets();
    } catch (error) {
      console.log(error.message);
      alert("Invalid Entry")
    }
  }
  if (user.role === "Maintenance" || user.role === "Management") {
    return (
      <div>
        <Link to={`/response/${props.orderId}/`}>
          <button className="button">Fill Out Ticket</button>
        </Link>
      </div>
    );
  } else
    return (
      <div>
        <button onClick={() => handleUpdate()} className="button">
          Update Ticket
        </button>
      </div>
    );
};

export default WorkorderButtons;

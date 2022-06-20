import axios from "axios";
import React, { useState } from "react";
import "./ResidentForm.css";

const ResidentForm = (props) => {
  const [unit, setUnit] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [entry, setEntry] = useState("");
  const [priority, setPriority] = useState("");

  function handleClick(event) {
    event.preventDefault();
    let newTicket = {
      resident_id: props.user.id,
      unit: parseInt(unit),
      subject: subject,
      comments: comment,
      entry: entry,
      priority: priority,
    };
    console.log(newTicket);
    addTicket(newTicket);
    setUnit("");
    setSubject("");
    setComment("");
    setEntry("");
    setPriority("");
  }

  async function addTicket(workorder) {
    try {
      await axios.post("http://127.0.0.1:8000/api/workorders/", workorder, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      });

      alert(
        "Thank you for filling out your request! You should get an email with any updates."
      );
      props.getAllTickets();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="around-resident-box">
      <div className="resident-box">
        <form action="/action_page.php" onSubmit={handleClick}>
          <label>Unit</label>
          <input
            className="resident-form"
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
          />

          <label>Subject</label>
          <input
            className="resident-form"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />

          <label>Comment</label>
          <input
            className="resident-form"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />

          <label>Permission to Enter</label>
          <select
            className="resident-form"
            onChange={(event) => setEntry(event.target.value)}
          >
            <option value="default">Choose Here</option>
            <option value="Call">Call</option>
            <option value="Enter">Enter</option>
          </select>

          <label>Priority</label>
          <select
            className="resident-form"
            onChange={(event) => setPriority(event.target.value)}
          >
            <option value="default">Choose Here</option>
            <option value="H">High</option>
            <option value="M">Medium</option>
            <option value="L">Low</option>
          </select>
          <div>
            <button className="button">Submit Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResidentForm;

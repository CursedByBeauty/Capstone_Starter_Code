import axios from "axios";
import React, { useState } from "react";
import "./ResidentForm.css"

const ResidentForm = (props) => {
  const [unit, setUnit] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [entry, setEntry] = useState("");
  const [priority, setPriority] = useState("");

  function handleClick(event) {
    event.preventDefault();
    let newTicket = {
      resident: props.user.username,
      unit: parseInt(unit),
      subject: subject,
      comments: comment,
      entry: entry,
      priority: priority.toUpperCase(),
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

  //     // axios POST REQUEST to create a workorder
  //     // use the correct url
  //     // add the newTicket to the url and also add the token

  return (
    <div>
      <div className="col-lg-12 text-center">
      <form onSubmit={handleClick}>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Unit
            </span>
            <input
              value={unit}
              onChange={(event) => setUnit(event.target.value)}
            />
          </div>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Subject
            </span>
            <input
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Comment
            </span>
            <input
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Permission to Enter
            </span>
            <input
              value={entry}
              onChange={(event) => setEntry(event.target.value)}
            />
          </div>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Priority
            </span>
        <input
          value={priority}
          style={{ width: "17rem" }}
          placeholder="H for High, M for Medium, L for Low"
          onChange={(event) => setPriority(event.target.value)}
        /></div></div>
        <button>Submit Ticket</button>
      </form>
      </div>
    </div>
  );
};

export default ResidentForm;

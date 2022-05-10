import React, { useState } from "react";

const ResidentForm = (props) => {
  const [resident, setResident] = useState(props.user.username);
  const [unit, setUnit] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [entry, setEntry] = useState("");
  const [priority, setPriority] = useState("");

  function handleClick(event) {
    event.preventDefault();
    let newTicket = {
      resident: resident,
      unit: parseInt(unit),
      subject: subject,
      comments: comment,
      entry: entry,
      priority: priority.toUpperCase(),
    };
    console.log(newTicket);
  }

//   async function addTicket(newTicket){
//     //   axios POST REQUEST to create a workorder
//     // use the correct url 
//     // add the newTicket to the url and also add the token
//   }


  return (
    <div>
      <form onSubmit={handleClick}>
        <label>Unit</label>
        <input value={unit} onChange={(event) => setUnit(event.target.value)} />
        <label>Subject</label>
        <input
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <label>Comment</label>
        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <label>Permission to Enter</label>
        <input
          value={entry}
          onChange={(event) => setEntry(event.target.value)}
        />
        <label>Priority</label>
        <input
          value={priority}
          style={{width: "17rem"}}
          placeholder="H for High, M for Medium, L for Low"
          onChange={(event) => setPriority(event.target.value)}
        />
        <button>Submit Ticket</button>
      </form>
    </div>
  );
};

export default ResidentForm;

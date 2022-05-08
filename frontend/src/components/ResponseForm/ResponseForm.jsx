import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ResponseForm = (props) => {
  // Token hook
  const [user, token] = useAuth();
  //   :ticketId param from the route
  const { ticketId } = useParams();
  //   the 4 fields needed to create a new response. Look at the postman create a response body
  const [date, setDate] = useState("");
  const [worker, setWorker] = useState("");
  const [solution, setSolution] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  async function addResponse(workerResponse) {
    //   Calling the url used to create a new response and adding the new response which is workerResponse
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/responses/",
        workerResponse,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert("Response has been submitted successfully");
      navigate("/");
    } catch (error) {
      console.log(workerResponse);
      alert("Invalid entry try again")
      console.log(error.message);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    let newResponse = {
      worker: worker,
      date: date,
      comments: solution,
      workorder_id: parseInt(ticketId),
      status: status,
    };
    addResponse(newResponse);
    setDate("");
    setWorker("");
    setSolution("");
    setStatus("");
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <label>Worker</label>
        <input
          value={worker}
          onChange={(event) => setWorker(event.target.value)}
        />
        <label>Date Completed</label>
        <input
          placeholder="yyyy-mm-dd"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <label>Comment</label>
        <input
          value={solution}
          onChange={(event) => setSolution(event.target.value)}
        />
        <label>Status</label>
        <input
          placeholder="C: Complete,H: Hold"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResponseForm;

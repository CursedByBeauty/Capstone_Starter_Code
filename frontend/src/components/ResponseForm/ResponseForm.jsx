import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DisplayWorkorders from "../DisplayWorkorders/DisplayWorkorders";
import "./ResponseForm.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../SendEmail/SendEmail.css";
import { KEY, KEY2 } from "../../localKey";
const ResponseForm = (props) => {
  // Token hook
  const [user, token] = useAuth();
  const [usersFound, setUsersFound] = useState([]);
  //   :ticketId param from the route
  const { ticketId } = useParams();
  //   the 4 fields needed to create a new response. Look at the postman create a response body
  const [date, setDate] = useState("");
  const [workerId, setWorkerId] = useState();
  const [solution, setSolution] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [managerId, setManagerId] = useState();

  // VARIABLE WHERE THE CURRENT WORKORDER WILL BE SET
  const [currentWorkorder, setCurrentWorkorder] = useState([]);

  useEffect(() => {
    // ON MOUNTING CALLING THE FUNCTION TO GET THE CURRENT WORKORDER SO IT CAN DISPLAY THE MINUTE I OPEN THE RESPONSE PAGE
    // Passing in the Parameters ticketId which is the current ticket pk
    getWorkorderById(ticketId);
    getAllUsers();
  }, []);
  // getting the CURRENT WORKORDER BY THE ID WHICH IS THE TICKETID
  async function getWorkorderById(pk) {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/workorders/${pk}/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // Setting the current workorder to equal the current ticket we clicked
      setCurrentWorkorder([response.data]);
    } catch (error) {
      console.log(error.message);
    }
  }
  // GETS ALL THE USERS FROM THE DATABASE
  async function getAllUsers() {
    try {
      let response = await axios.get(
        "http://127.0.0.1:8000/api/responses/users/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setUsersFound(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  // Call the PATCH REQUEST to update the status in the workorder table
  async function updateStatus(newStatus, pk) {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/workorders/${pk}/status/`,
        newStatus
      );
      alert("Response has been submitted successfully");
    } catch (error) {
      console.log(newStatus);
      alert("Invalid entry try again");
      console.log(error.message);
    }
  }

  async function createResponse(newResponse) {
    try {
      await axios.post("http://127.0.0.1:8000/api/responses/", newResponse, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(`${KEY2}`, "template_11qgmnq", e.target, `${KEY}`).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    alert("Email Sent");
    createResponse({
      worker_id: workerId,
      management_id: managerId,
      date: date,
      comments: solution,
      workorder_id: ticketId,
    });
    let currentStatus = {
      status: status,
    };
    updateStatus(currentStatus, parseInt(ticketId));
    e.target.reset();
    setWorkerId();
    setManagerId();
    setEmail("");
    setDate("");
    setSolution("");
  }
    return (
      <div>
        <div className="container-display">
          <div className="resident-box">
            <form action="/action_page.php" onSubmit={sendEmail}>
              {" "}
              <h2>Ticket Response Form</h2>
              <label> Worker</label>
              <select
                className="resident-form"
                id="inputGroupSelect04"
                onChange={(event) => setWorkerId(event.target.value)}
              >
                <option value="default">Choose Here</option>
                {usersFound
                  .filter((element) => element.role === "Maintenance")
                  .map((element) => {
                    return (
                      <option key={element.id * 3} value={element.id}>
                        {element.first_name} {element.last_name}
                      </option>
                    );
                  })}
              </select>
              <label>Manager</label>
              <select
                className="resident-form"
                id="inputGroupSelect04"
                onChange={(event) => setManagerId(event.target.value)}
              >
                <option value="default">Choose Here</option>
                {usersFound
                  .filter((element) => element.role === "Management")
                  .map((element) => {
                    return (
                      <option key={element.id * 4} value={element.id}>
                        {element.first_name} {element.last_name}
                      </option>
                    );
                  })}
              </select>
              <label>Resident Email</label>
              <input className="resident-form" type="email" name="email" />
              <label>Date Completed</label>
              <input
                type="date"
                className="resident-form"
                placeholder="yyyy-mm-dd"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
              <label>Comment</label>
              <input
                name="comment"
                className="resident-form"
                value={solution}
                onChange={(event) => setSolution(event.target.value)}
              />
              <label>Status</label>
              <select
                name="status"
                className="resident-form"
                id="inputGroupSelect04"
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="default">Choose Here</option>
                <option value="C">Completed</option>
                <option value="H">On Hold</option>
              </select>
              <div className="col-md-12 text-center">
                <button className="button" type="submit">
                  Submit
                </button>{" "}
              </div>
            </form>{" "}
          </div>
          <div style={{ marginTop: "2rem" }}>
            {/* REDEFINING THE CURRENT VALUE OF TICKETS TO EQUAL THE CURRENT TICKET */}
            <DisplayWorkorders tickets={currentWorkorder} />{" "}
            <div>
              <Link to="/">
                <div style={{ marginLeft: "21rem" }}>
                  <button
                    className="button"
                    onClick={() => props.getAllTickets()}
                  >
                    Maintenance Home Page
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ResponseForm;

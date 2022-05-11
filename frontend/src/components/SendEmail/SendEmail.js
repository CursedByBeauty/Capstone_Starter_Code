import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./SendEmail.css";
import { KEY, KEY2 } from "./../../localKey";

const SendEmail = () => {
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
    e.target.reset();
    alert("Email Sent");
  }

  return (
    <form onSubmit={sendEmail}>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" type="text" name="name" />{" "}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input className="form-control" type="email" name="email" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          type="message"
          name="message"
          className="form-control"
          placeholder="Write your message here."
          rows="4"
        ></textarea>{" "} 
        <div class="col-md-12 text-center">
        <button className="btn-primary" >Send Message</button>
        </div>
      </div>{" "}
     
    </form>
  );
};
export default SendEmail;

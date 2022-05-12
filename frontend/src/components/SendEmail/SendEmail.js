import React from "react";
import emailjs from "@emailjs/browser";
import "./SendEmail.css";
import { KEY, KEY2 } from "./../../localKey";

const SendEmail = (props) => {
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
    <div className="around-form">
      <form onSubmit={sendEmail}>
        
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Name
            </span>
            <input style={{width: "17rem"}} type="text" name="name" />{" "}
          </div>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Email
            </span>
            <input style={{width: "17rem"}}  type="email" name="email" />
          </div>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Message
            </span>
            <textarea
              style={{width: "17rem"}}
              type="message"
              name="message"
              placeholder="Write your message here."
              rows="4"
            ></textarea>{" "}
            <div className="col-md-12 text-center">
              <button className="button">Send Message</button>
            </div>
          </div>
        </div>{" "}
      </form>
    </div>
  );
};
export default SendEmail;

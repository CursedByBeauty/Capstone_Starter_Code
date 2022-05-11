import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SendForm from "./../SendEmail/SendEmail.css"
import {KEY, KEY2} from "./../../localKey"

const SendEmail = () => {

  function sendEmail (e) {
    e.preventDefault()
    emailjs.sendForm(`${KEY2}`, 'template_11qgmnq', e.target, `${KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Email Sent")
      
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <div className="form-group">
      <label type="form_message" >Message</label>
      <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea>
     </div>
     <button>Send Message</button>
    </form>
  );
};
export default SendEmail;
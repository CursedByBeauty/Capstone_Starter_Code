import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
      <label>Message</label>
     <input type="text" name="message"/>
     <button>Send Message</button>
    </form>
  );
};
export default SendEmail;
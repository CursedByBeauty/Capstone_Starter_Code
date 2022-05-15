import React from "react";
import ResponseForm from "../../components/ResponseForm/ResponseForm";

const ResponsePage = (props) => {

  return (
    <div>
      <div>
        <ResponseForm getAllTickets={props.getAllTickets} tickets = {props.tickets}/>
      </div>
    </div>
  );
};

export default ResponsePage;

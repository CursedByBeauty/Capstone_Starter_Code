import React from "react";
import ResponseForm from "../../components/ResponseForm/ResponseForm";

const ResponsePage = (props) => {

  return (
    <div>
      <div>
        <ResponseForm tickets = {props.tickets}/>
      </div>
    </div>
  );
};

export default ResponsePage;

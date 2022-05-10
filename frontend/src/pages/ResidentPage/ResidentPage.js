import React from "react";
import ResidentForm from "../../components/ResidentForm/ResidentForm";
import useAuth from "../../hooks/useAuth";

const ResidentPage = (props) => {
  const [user, token] = useAuth();

  return (
    <div>
      <div><h1>Hello {user.username}</h1></div>
      <div>
          <ResidentForm getAllTickets = {props.getAllTickets} user = {user} token ={token}/>
      </div>
    </div>
  );
};

export default ResidentPage;

import React from "react";

import DisplayWorkorders from "../../components/DisplayWorkorders/DisplayWorkorders";

const WorkordersPage = (props) => {
  return (
    <div>
      <DisplayWorkorders
        getAllTickets={props.getAllTickets}
        user={props.user}
        tickets={props.tickets}
      />
    </div>
  );
};
export default WorkordersPage;

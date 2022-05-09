import React, { useEffect } from 'react';
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import DisplayWorkorders from '../../components/DisplayWorkorders/DisplayWorkorders';


const WorkordersPage = (props) => {
    const [user,token] = useAuth()
    
  
    useEffect((props) => {
      const getAllTickets = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/workorders/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          props.setTickets(response.data);
        } catch (error) {
          console.log(props.tickets)
          console.log(error.message);
        }
      };
      getAllTickets();
    }, [token]);
  
    return ( 
        <div>
            <DisplayWorkorders tickets={props.tickets}/>
        </div>
     );
}
 
export default WorkordersPage;
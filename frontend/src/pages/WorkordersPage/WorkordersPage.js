import React, { useEffect } from 'react';

import DisplayWorkorders from '../../components/DisplayWorkorders/DisplayWorkorders';


const WorkordersPage = (props) => {
    return ( 
        <div>
            <DisplayWorkorders tickets={props.tickets}/>
        </div>
     );
}
export default WorkordersPage;
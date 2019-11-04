import React from "react"
import {Link} from 'react-router-dom'

const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
};

 const NotFound = () => (
   <div style={pageStyle}>
       <h1>Page Not Found 404</h1>
       <Link to="/">Go to Dashboard</Link>
   </div>
);

export default NotFound
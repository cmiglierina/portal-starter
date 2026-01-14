import './NavigationBar.css'

import { NavLink } from "react-router";
import Stack from 'react-bootstrap/Stack';

function NavigationBar() {


    return (
    <Stack gap={0}>
        <div className="div-menu"><NavLink to='/home' className="btn nav-link">HOME</NavLink></div>
        <div className="div-menu"><NavLink to='/account' className="btn nav-link">ACCOUNT</NavLink></div>
        <div className="div-menu"><NavLink to='/home' className="btn nav-link">USERS</NavLink></div>
    </Stack>
  
    );
}

export default NavigationBar
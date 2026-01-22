import './NavigationBar.css'

import { NavLink } from "react-router";
import Stack from 'react-bootstrap/Stack';
import OverlayTooltip from '../common/OverlayTooltip';

function NavigationBar() {

    return (
        <>
            <div className='div-icon'><i className="bi bi-tux"></i></div>
            <Stack gap={0}>
                <div className="div-menu">
                    <OverlayTooltip text="Home"><NavLink to='/home' className="btn btn-primary nav-btn"><i className="bi bi-house"></i> Home</NavLink></OverlayTooltip> 
                </div>
                <div className="div-menu">
                    <OverlayTooltip text="Dati user"><NavLink to='/account' className="btn btn-primary nav-btn"><i className="bi bi-person"></i> User</NavLink></OverlayTooltip> 
                </div>
                <div className="div-menu">
                    <OverlayTooltip text="Lista utenti"><NavLink to='/users' className="btn btn-primary nav-btn"><i className="bi bi-people"></i> Lista utenti</NavLink></OverlayTooltip>
                </div>
            </Stack>
        </>

    );
}

export default NavigationBar
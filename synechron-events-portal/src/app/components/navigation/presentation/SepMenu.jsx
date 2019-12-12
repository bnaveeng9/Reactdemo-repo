import React from 'react'
import {NavLink} from 'react-router-dom';
const SepMenu = props => {
    let logo = "../images/synechron_logo.png";

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="#"><img src={logo} alt={"Synechron SRC"}/></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nNavlinkv-link" to="/employees">Employees</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/events">Events</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/newevent">Register Events</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



export default SepMenu

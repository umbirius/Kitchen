import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"

class Navbar extends Component {



    render() {
        return (
            <nav >
                Date-Nite
                <ul className="nav-links">
                    <Link to='/user'>
                        <li>Profile</li>
                    </Link>
                    <Link to="/locations">
                        <li>Locations</li>
                    </Link>
                    <Link to="/matches">
                        <li>Matches</li>
                    </Link>

                </ul>
            </nav>
        )
    }
}

export default Navbar
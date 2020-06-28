import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"

class Navbar extends Component {



    render() {
        return (
            <div>
                <nav>
                    <h1>Date-Nite</h1>
                </nav>
                    <nav >
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
                    
            </div>
        )
    }
}

export default Navbar
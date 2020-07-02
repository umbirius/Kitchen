import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component {

    render() {
        return (
            <div>

                <nav className="session-nav">
                    <Link to='/log-in'>
                        <button id="log-in-button">Log in</button>
                    </Link>
                </nav>
                <nav className="header-nav">
                    <h1>Date-Nite</h1>
                </nav>
                <nav className="tab-nav">
                    <ul className="nav-links">
                        <Link to='/dash'>
                            <li>Dashboard</li>
                        </Link>
                        <Link to="/locations">
                            <li>Locations</li>
                        </Link>
                        <Link to="/matches">
                            <li>Matches</li>
                        </Link>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                    </ul>
                </nav>

            </div>
        )
    }
}

export default Navbar
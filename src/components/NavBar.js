import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="/">NC News</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to='/' className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse">Home</Link></li>
                                <li><Link to='/football' className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse">Football</Link></li>
                                <li><Link to='/cooking' className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse">Cooking</Link></li>
                                <li><Link to='/coding' className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse">Coding</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;

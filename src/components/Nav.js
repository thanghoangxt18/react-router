import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="Nav">
            <nav>
                <div className="navbar navbar-inverse container-fluid">
                    <ul className="nav navbar-nav row">
                        <li><Link to='/'>Home </Link></li>
                        <li><Link to='/about'>About </Link></li>
                        <li><Link to='/shop'>Shop </Link></li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Nav

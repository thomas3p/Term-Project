import React, { PureComponent, useDeferredValue, useState} from 'react'
import { useLockBodyScroll } from "@uidotdev/usehooks";
//import plugin
import { Link } from 'react-router-dom';

//import css
import '../css/global.scss'
import '../css/navbar.scss'

export default function NavbarMain() {
    // State to manage the class of the target element
    const [isTargetClassActive, setTargetClassActive] = useState(false);

    // Function to handle the click event
    const search_handleClick = () => {
        // Toggle the class of the target element
        setTargetClassActive(!isTargetClassActive);
    };
    return (
        <div className="cover-navbar">
            <div className="navbar">
                <div className="navbar-wrapper">
                    <Link className="navbar-logo" to='/'></Link>
                    <button className="material-symbols-rounded" id='navbar-search' title='ค้นหา'onClick={search_handleClick}>search</button>
                    <button className='navbar-user-white' id='navbar-user'></button>
                </div>
            </div>
            <div className={isTargetClassActive ? 'search-menu-active' : 'search-menu-no-active'}>
                <form className="menu-section" action='#'>
                    <input className="navbar-search" type="search" placeholder="ค้นหา" />
                </form>
                <div className="no-menu-section" onClick={search_handleClick}></div>
            </div>
        </div>
    )
}

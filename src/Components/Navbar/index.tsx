import React, {useEffect} from "react";
import './style.scss';
import logo from  '../../assets/job-search.png';
import SearchBar from "../SearchBar";
import Dropdown from "../Dropdown";
import DropdownBody from "../Dropdown/DropdownBody";

/* Detailed design TODO:
* Navbar should be a list of links, that change their color on:hover
* Make navbar sticky
* DON'T DO:
*   Navbar buttons
*   Change font-size on:hover
* */

export default function Navbar():JSX.Element {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            (document.querySelector('.Navbar') as HTMLElement).style.top = `${window.scrollY}px`
        });
    });
    
    return (
        <nav className={'Navbar'}>
            <img src={logo} className={'Logo'} alt={'logo'}/>
            <div className={'Nav-links'}>
                    <a href={'/'}>
                            Home
                    </a>
                    <Dropdown>
                        <a>Find</a>
                        <DropdownBody/>
                    </Dropdown>
                    <a href={'/Announcements'}>
                            Announcement
                    </a>
            </div>
            <SearchBar placeholder={'Search'}/>
            <div id={'Login'}>
                <a href={'/login'}>
                    <button>Log in</button>
                </a>
            </div>
        </nav>
    )
}
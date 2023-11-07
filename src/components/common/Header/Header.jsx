import React from "react";
import "./Header.css";
import ProfileIcon from "../Icons/ProfileIcon";
import BurgerIcon from "../Icons/BurgerIcon";
import CloseIcon from "../Icons/CloseIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import InstIcon from "../Icons/InstIcon";
import VkIcon from "../Icons/VkIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import DropdownHeader from "../DropdownHeader/DropdownHeader";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
    return (
        <header className="app__header">

            <a className="app__header-logo" href="/">
                <img src='logo.svg' alt='logo' />
            </a>

            <div className="app__nav">
                <button className="app__nav-profile">
                    <ProfileIcon />
                </button>
                <button className="app__nav-burger">
                    <BurgerIcon />
                </button>
                <button className="app__nav-burger-close">
                    <CloseIcon />
                </button>
            </div>

            <div className='burger-menu'>
                <nav>
                    <Dropdown>
                        <DropdownHeader text="Account" active />
                        <div className='dropdown-list'>
                            <span className='dropdown-list__item'>Chanels & Profiles</span>
                            <span className='dropdown-list__item'>Personal Finances</span>
                            <span className='dropdown-list__item dropdown-list__item--active'>Privacy & Security</span>
                        </div>
                    </Dropdown>
                    <Dropdown>
                        <DropdownHeader text="Experts" />
                    </Dropdown>
                    <Dropdown>
                        <DropdownHeader text="Monetization" />
                    </Dropdown>
                    <Dropdown>
                        <DropdownHeader text="Content" />
                    </Dropdown>
                    <Dropdown>
                        <DropdownHeader text="Promotion" />
                    </Dropdown>
                </nav>

                <div className='app__nav-footer'>

                    <div className='app__nav-socials'>
                        <FacebookIcon />
                        <InstIcon />
                        <VkIcon />
                        <TelegramIcon />
                        <YoutubeIcon />
                    </div>

                    <div className='app-nav__lang'>
                        <button className='app-nav__lang-btn app-nav__lang-btn--active'>En</button>
                        <span>/</span>
                        <button className='app-nav__lang-btn'>Ru</button>
                    </div>

                </div>
            </div>

        </header>
    )
};

export default Header;
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import DropdownHeader from "../DropdownHeader/DropdownHeader";
import FacebookIcon from "../Icons/FacebookIcon";
import InstIcon from "../Icons/InstIcon";
import VkIcon from "../Icons/VkIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

const SideBarMenu = () => {
    return (
        <div className='side-bar-menu'>

            <div className='side-bar-menu__nav'>
                <a className="app__header-logo" href="/">
                    <img src='logo.svg' alt='logo' />
                </a>

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
            </div>

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
    )
};

export default SideBarMenu;
import React from "react";
import PersonalProfile from "./PersonalProfile/PersonalProfile";
import AccessSecurity from "./AccessSecurity/AccessSecurity";
import ProfileIcon from '../../../common/Icons/ProfileIcon';
import './PrivacySecurity.css';

const PrivacySecurity = () => {
    return (
        <div className="privacy-security">
            <div className="privacy-security__menu">
                <div className="privacy-security__menu-top">
                    <h1 className="privacy-security__title">
                        Privacy & Security
                    </h1>

                    <button className="privacy-security__profile-btn">
                        <ProfileIcon />
                        <span className="privacy-security__profile-name">John Smith</span>
                    </button>
                </div>

                <ul className="privacy-security__tabs-nav">
                    <li className="privacy-security__tabs-item">
                        <button className="privacy-security__tabs-btn privacy-security__tabs-btn--active">Personal Profile</button>
                    </li>
                    <li className="privacy-security__tabs-item">
                        <button className="privacy-security__tabs-btn ">Access and Security</button>
                    </li>
                </ul>
            </div>

            <div className="privacy-security__content">
                <AccessSecurity />
                {/* <PersonalProfile/> */}
            </div>
        </div >
    )
};

export default PrivacySecurity;
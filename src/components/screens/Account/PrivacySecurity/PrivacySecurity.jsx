import React from "react";
import './PrivacySecurity.css';

const PrivacySecurity = () => {
    return (
        <div className="privacy-security">
            <div className="privacy-security__top">
                <h1 className="privacy-security__title">
                    Privacy & Security
                </h1>

                <ul className="privacy-security__tabs-nav">
                    <li className="privacy-security__tabs-item">
                        <button className="privacy-security__tabs-btn privacy-security__tabs-btn--active">Personal Profile</button>
                    </li>
                    <li className="privacy-security__tabs-item">
                        <button className="privacy-security__tabs-btn">Access and Security</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default PrivacySecurity;
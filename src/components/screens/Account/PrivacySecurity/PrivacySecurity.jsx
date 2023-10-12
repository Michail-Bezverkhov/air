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


            <div className="privacy-security__bottom">
                <form className="privacy-security__info-form info-form">
                    <h3 className="info-form__title">Main info</h3>
                    <ul className="info-form__list">
                        <li className="info-form__avatar">
                            <button className="info-form__choose-avatar">Upload your avatar</button>
                        </li>
                        <li className="info-form__item">
                            <label htmlFor="FirstName">First name</label>
                            <input id="FirstName" placeholder="Please enter" type="text" />
                        </li>
                        <li className="info-form__item">
                            <label htmlFor="LastName">Last name</label>
                            <input id="LastName" placeholder="Please enter" type="text" />
                        </li>
                        <li className="info-form__item">
                            <label htmlFor="Birthday">Birthday</label>
                            <input id="Birthday" placeholder="Please enter" type="date" />
                        </li>
                    </ul>
                </form>
            </div>

        </div>
    )
};

export default PrivacySecurity;
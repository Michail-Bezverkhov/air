import React from "react";
import InfoBlockTitle from "../InfoBlockTitle/InfoBlockTitle";
import "./InfoBlock.css";



const InfoBlock = ({ children, title, warning, profile }) => {
    if (warning) {
        return (
            <div className="info-block privacy-security__warning info-block-profile">
                <span className="privacy-security__warning-icon"></span>
                <span className="privacy-security__warning-text">
                    We keep your data private and never share it&nbsp;with third-parties.
                </span>
            </div>
        );
    } else if (profile) {
        return (
            <div className="info-block info-block-profile">
                <InfoBlockTitle>{title}</InfoBlockTitle>
                {children}
            </div>
        );
    } else {
        return (
            <div className="info-block">
                <InfoBlockTitle>{title}</InfoBlockTitle>
                {children}
            </div>
        );
    }
};

export default InfoBlock;
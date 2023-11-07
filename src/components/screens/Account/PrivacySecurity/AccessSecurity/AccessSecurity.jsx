import React from "react";
import InfoBlock from "../../../../common/InfoBlock/InfoBlock";
import InfoBlockSecator from "../../../../common/infoBlockSecator/InfoBlockSecator";
import InfoBlockListItem from "../../../../common/InfoBlockListItem/InfoBlockListItem";
import InfoBlockItemBtn from "../../../../common/InfoBlockItemBtn/InfoBlockItemBtn";
import RefreshIcon from "../../../../common/Icons/RefreshIcon";
import PhoneIcon from "../../../../common/Icons/PhoneIcon";
import LockIcon from "../../../../common/Icons/LockIcon";
import InfoBlockItemAccesses from "../../../../common/InfoBlockItemAccesses/InfoBlockItemAccesses";
import InfoBlockItemTable from "../../../../common/InfoBlockItemTable/InfoBlockItemTable";
import "./AccessSecurity.css";

const PersonalProfile = () => {
    return (

        <>
            <InfoBlock title="Security">
                <ul className="info-block__List">
                    <InfoBlockListItem name="Sing-in email address" data="john@smith.com" />
                    <InfoBlockSecator />
                    <InfoBlockListItem name="Two-factor authenication" data="Enabled" status />
                    <InfoBlockListItem name="Phone number" data="+380931234567" />
                    <InfoBlockListItem name="Reserve codes" data="9 of 10 left" />
                    <InfoBlockListItem btns>
                        <InfoBlockItemBtn text="Generate new codes">
                            <RefreshIcon />
                        </InfoBlockItemBtn>
                        <InfoBlockItemBtn text="Disable 2FA">
                            <PhoneIcon />
                        </InfoBlockItemBtn>
                    </InfoBlockListItem>
                    <InfoBlockSecator />
                    <InfoBlockListItem name="Last sign in" data="today at 19:37, Safari, 198.123.45.67" sessionsData />
                    <InfoBlockListItem name="Total active sessions" data="5" sessionsData />
                    <InfoBlockListItem btns>
                        <InfoBlockItemBtn text="Resent all the active sessions">
                            <RefreshIcon />
                        </InfoBlockItemBtn>
                        <InfoBlockItemBtn text="Change password">
                            <LockIcon />
                        </InfoBlockItemBtn>
                    </InfoBlockListItem>
                </ul>
            </InfoBlock>

            <InfoBlock title="Delegated access">
                <ul className="info-block__List">
                    <InfoBlockListItem name="You`ve been given access to the following cabinets" column>
                        <InfoBlockItemAccesses/>
                    </InfoBlockListItem>
                    <InfoBlockSecator />
                    <InfoBlockListItem name="You gave access to your cabinet to the following" column>
                        <InfoBlockItemTable />
                        <InfoBlockItemBtn text="Delegate access to..." />
                    </InfoBlockListItem>
                </ul>
            </InfoBlock>
        </>
    )
};

export default PersonalProfile;
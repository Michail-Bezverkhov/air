import React from "react";
import InfoBlock from "../../../../common/InfoBlock/InfoBlock";
import InfoForm from "../../../../common/InfoForm/InfoForm";
import InfoFormList from "../../../../common/InfoFormList/InfoFormList";
import InfoFormItem from "../../../../common/InfoFormItem/InfoFormItem";
import ViewMoreIcon from "../../../../common/Icons/ViewMoreIcon";
import "./PersonalProfile.css";

const PersonalProfile = () => {
    return (

        <>

            <InfoBlock profile title="Main info">

                <InfoForm className="info-form-main">

                    <div className="info-form__avatar">
                        <button className="info-form__choose-avatar">Upload your avatar</button>
                    </div>

                    <InfoFormList>
                        <InfoFormItem labelFor="FirstName" labelText="First name" inputType="text" />
                        <InfoFormItem labelFor="LastName" labelText="Last name" inputType="text" />
                        <InfoFormItem labelFor="Birthday" labelText="Birthday" inputType="date" />
                    </InfoFormList>

                </InfoForm>

            </InfoBlock>

            <InfoBlock profile title="Contacts">

                <InfoForm>

                    <InfoFormList>
                        <InfoFormItem labelFor="Facebook" labelText="Facebook" inputType="text" showClearInput={true} />
                        <InfoFormItem labelFor="Telegram" labelText="Telegram" inputType="text" showClearInput={true} />
                        <InfoFormItem labelFor="Instagram" labelText="Instagram" inputType="text" showClearInput={true} />
                        <InfoFormItem labelFor="PhoneNumber" labelText="Phone number" inputType="tel" showClearInput={true} />
                    </InfoFormList>

                    <button className="info-form__view-more view-more">
                        <span className="view-more__text">View all</span>
                        <ViewMoreIcon/>
                    </button>

                </InfoForm>

            </InfoBlock>

            <InfoBlock profile warning/>

            <InfoBlock profile title="Place of residencee">

                <InfoForm>

                    <InfoFormList>
                        <InfoFormItem labelFor="Country" labelText="Country" inputType="select" />
                        <InfoFormItem labelFor="City" labelText="City" inputType="text" />
                        <InfoFormItem labelFor="HomeAddress" labelText="Home Address" inputType="text" showQuestion={true} />
                    </InfoFormList>

                </InfoForm>

            </InfoBlock>

        </>

    )
};

export default PersonalProfile;
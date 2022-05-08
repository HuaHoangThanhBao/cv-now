import React from 'react';
import './Profile.scss';
import ProfileAvatar from '../../molecules/ProfileAvatar/ProfileAvatar';
import ProfileInfo from '../../molecules/ProfileInfo/ProfileInfo';
import ProfileSocial from '../../molecules/ProfileSocial/ProfileSocial';

const Profile = (props) => {
    const {currentTemplateType, getColumnType} = props

    return (
        <div className={`profile ${currentTemplateType} ${getColumnType()}`}>
            <div className="profile-wrapper">
                <div className={`profile-info  ${getColumnType()}`}>
                    <ProfileAvatar />
                    <ProfileInfo />
                </div>
                <ProfileSocial 
                    getColumnType={getColumnType}
                />
            </div>
        </div>
    )
}

export default Profile;
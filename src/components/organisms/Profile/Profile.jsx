import React from 'react';
import './Profile.scss';
import ProfileAvatar from '../../molecules/ProfileAvatar/ProfileAvatar';
import ProfileInfo from '../../molecules/ProfileInfo/ProfileInfo';
import ProfileSocial from '../../molecules/ProfileSocial/ProfileSocial';
import { template_type } from '../../../constants/Template';

const Profile = (props) => {
    const {currentTemplateType, getColumnType, currentColumnWidthAttr} = props

    return (
        <div className={`profile ${currentTemplateType} ${getColumnType()}`}>
            <div className="profile-wrapper">
                <div 
                    className={`profile-info ${getColumnType()}`} 
                    data-column_level={`${currentTemplateType === template_type.combined ? currentColumnWidthAttr: ''}`}
                >
                    <ProfileAvatar />
                    <ProfileInfo />
                </div>
                <ProfileSocial 
                    getColumnType={getColumnType}
                    currentTemplateType={currentTemplateType}
                    currentColumnWidthAttr={currentColumnWidthAttr}
                />
            </div>
        </div>
    )
}

export default Profile;
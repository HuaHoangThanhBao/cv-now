import React from 'react';
import Avatar from '../../../dist/avatar.png';

const ProfileAvatar = (props) => {
    return (
        <div className='profile-avatar'>
            <div className='profile-avatar-container'>
                <img src={Avatar}/>
            </div>
        </div>
    )
}

export default ProfileAvatar
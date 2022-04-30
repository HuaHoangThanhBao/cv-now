import React from 'react';
import './Profile.scss';
import {ReactComponent as MailIcon} from '../../../dist/mail.svg';
import Avatar from '../../../dist/avatar.png';

const Profile = (props) => {
    const {currentTemplateType, getColumnType} = props

    return (
        <div className={"profile" + ` ${currentTemplateType} ${getColumnType()}`}>
            <div className="profile-wrapper">
                <div className={"profile-info" + ` ${getColumnType()}`}>
                    <div className='profile-avatar'>
                        <div className='profile-avatar-container'>
                            <img src={Avatar}/>
                        </div>
                    </div>
                    <div className='profile-detail'>
                        <div className='profile-heading'>John Washington</div>
                        <div className='profile-title'>Professional Title</div>
                        <div className='profile-description'>Short and engaging pitch about yourself.</div>
                    </div>
                </div>
                <div className={"profile-social" + ` ${getColumnType()}`}>
                    <div className="profile-social__wrapper">
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="profile-social__row">
                            <div className="profile-social__row--txt">test@gmail.com</div>
                            <div className="profile-social__row--icon">
                                <MailIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
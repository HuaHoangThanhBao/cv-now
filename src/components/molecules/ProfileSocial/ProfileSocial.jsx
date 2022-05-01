import React from 'react';
import {ReactComponent as MailIcon} from '../../../dist/mail.svg';

const ProfileSocial = (props) => {
    const {getColumnType} = props
    
    return (
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
    )
}

export default ProfileSocial
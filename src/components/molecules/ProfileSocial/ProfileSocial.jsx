import React from 'react';
import {ReactComponent as MailIcon} from '../../../dist/mail.svg';
import {ReactComponent as PhoneIcon} from '../../../dist/phone.svg';
import {ReactComponent as LocationIcon} from '../../../dist/location.svg';
import {ReactComponent as WebsiteIcon} from '../../../dist/website.svg';
import {ReactComponent as LinkedinIcon} from '../../../dist/linkedin.svg';
import {ReactComponent as TwitterIcon} from '../../../dist/twitter.svg';
import {ReactComponent as QuoraIcon} from '../../../dist/quora.svg';
import {ReactComponent as SkypeIcon} from '../../../dist/skype.svg';
import {ReactComponent as FacebookIcon} from '../../../dist/facebook.svg';
import {ReactComponent as GithubIcon} from '../../../dist/github.svg';
import {ReactComponent as StackOverFlowIcon} from '../../../dist/stackoverflow.svg';
import {ReactComponent as MediumIcon} from '../../../dist/medium.svg';
import {ReactComponent as InstagramIcon} from '../../../dist/instagram.svg';
import { template_type } from '../../../constants/Template';

const ProfileSocial = (props) => {
    const {getColumnType, currentTemplateType, currentColumnWidthAttr} = props
    
    return (
        <div 
            className={`profile-social ${getColumnType()}`}
            data-column_level={`${currentTemplateType === template_type.combined ? currentColumnWidthAttr && (100 - currentColumnWidthAttr): ''}`}
        >
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
                        <PhoneIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <LocationIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <WebsiteIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <LinkedinIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <TwitterIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <QuoraIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <SkypeIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <FacebookIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <GithubIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <StackOverFlowIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <MediumIcon />
                    </div>
                </div>
                <div className="profile-social__row">
                    <div className="profile-social__row--txt">test@gmail.com</div>
                    <div className="profile-social__row--icon">
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSocial
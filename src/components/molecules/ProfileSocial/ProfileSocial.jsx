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
    const {getColumnType, currentTemplateType, currentColumnWidthAttr, setIsOpenProfileModal, socialData} = props

    const renderSocialIcon = (item) => {
        switch(item){
            case "email":
                return <MailIcon />
            case "address":
                return <LocationIcon />
            case "phoneNumber":
                return <PhoneIcon />
            case "website":
                return <WebsiteIcon />
            case "linkedIn":
                return <LinkedinIcon />
            case "twitter":
                return <TwitterIcon />
            case "quora":
                return <QuoraIcon />
            case "skype":
                return <SkypeIcon />
            case "facebook":
                return <FacebookIcon />
            case "github":
                return <GithubIcon />
            case "stackOverflow":
                return <StackOverFlowIcon />
            case "medium":
                return <MediumIcon />
            case "instagram":
                return <InstagramIcon />
            default:
                return null
        }
    }

    const renderSocialItem = (group, item) => {
        if(socialData[group][item]){
            return (
                <div key={item} className="profile-social__row">
                    <div className="profile-social__row--txt">{item}</div>
                    <div className="profile-social__row--icon">
                        {renderSocialIcon(item)}
                    </div>
                </div>
            )
        }
    }

    
    return (
        <div 
            className={`profile-social ${getColumnType()}`}
            data-column_level={`${currentTemplateType === template_type.combined ? currentColumnWidthAttr && (100 - currentColumnWidthAttr): ''}`}
            onClick={() => setIsOpenProfileModal(true)}
        >
            <div className="profile-social__wrapper">
                {socialData && Object.keys(socialData).map(group => (
                    Object.keys(socialData[group]).map(item => renderSocialItem(group, item))
                ))}
            </div>
        </div>
    )
}

export default ProfileSocial
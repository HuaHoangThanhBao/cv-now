import React from 'react';
import MailIconBlack from '../../../dist/mail-black.png';
import PhoneIconBlack from '../../../dist/phone-black.png';
import LocationIconBlack from '../../../dist/location-black.png';
import WebsiteIconBlack from '../../../dist/website-black.png';
import LinkedinIconBlack from '../../../dist/linkedin-black.png';
import TwitterIconBlack from '../../../dist/twitter-black.png';
import SkypeIconBlack from '../../../dist/skype-black.png';
import FacebookIconBlack from '../../../dist/facebook-black.png';
import GithubIconBlack from '../../../dist/github-black.png';
import StackOverFlowIconBlack from '../../../dist/stackoverflow-black.png';
import MediumIconBlack from '../../../dist/medium-black.png';
import InstagramIconBlack from '../../../dist/instagram-black.png';

import MailIconWhite from '../../../dist/mail-white.png';
import PhoneIconWhite from '../../../dist/phone-white.png';
import LocationIconWhite from '../../../dist/location-white.png';
import WebsiteIconWhite from '../../../dist/website-white.png';
import LinkedinIconWhite from '../../../dist/linkedin-white.png';
import TwitterIconWhite from '../../../dist/twitter-white.png';
import SkypeIconWhite from '../../../dist/skype-white.png';
import FacebookIconWhite from '../../../dist/facebook-white.png';
import GithubIconWhite from '../../../dist/github-white.png';
import StackOverFlowIconWhite from '../../../dist/stackoverflow-white.png';
import MediumIconWhite from '../../../dist/medium-white.png';
import InstagramIconWhite from '../../../dist/instagram-white.png';

import { template_type } from '../../../constants/Template';

const ProfileSocial = (props) => {
    const {
        getColumnType, currentTemplateType, currentColumnWidthAttr, 
        setIsOpenProfileModal, socialData
    } = props

    const renderSocialIcon = (item) => {
        if(currentTemplateType === template_type.skilled_based
        || currentTemplateType === template_type.tech
        || currentTemplateType === template_type.simple){
            switch(item){
                case "email":
                    return <img src={MailIconWhite} alt=''/>
                case "address":
                    return <img src={LocationIconWhite} alt=''/>
                case "phoneNumber":
                    return <img src={PhoneIconWhite} alt=''/>
                case "website":
                    return <img src={WebsiteIconWhite} alt=''/>
                case "linkedIn":
                    return <img src={LinkedinIconWhite} alt=''/>
                case "twitter":
                    return <img src={TwitterIconWhite} alt=''/>
                case "skype":
                    return <img src={SkypeIconWhite} alt=''/>
                case "facebook":
                    return <img src={FacebookIconWhite} alt=''/>
                case "github":
                    return <img src={GithubIconWhite} alt=''/>
                case "stackOverflow":
                    return <img src={StackOverFlowIconWhite} alt=''/>
                case "medium":
                    return <img src={MediumIconWhite} alt=''/>
                case "instagram":
                    return <img src={InstagramIconWhite} alt=''/>
                default:
                    return null
            }
        }
        else{
            switch(item){
                case "email":
                    return <img src={MailIconBlack} alt=''/>
                case "address":
                    return <img src={LocationIconBlack} alt=''/>
                case "phoneNumber":
                    return <img src={PhoneIconBlack} alt=''/>
                case "website":
                    return <img src={WebsiteIconBlack} alt=''/>
                case "linkedIn":
                    return <img src={LinkedinIconBlack} alt=''/>
                case "twitter":
                    return <img src={TwitterIconBlack} alt=''/>
                case "skype":
                    return <img src={SkypeIconBlack} alt=''/>
                case "facebook":
                    return <img src={FacebookIconBlack} alt=''/>
                case "github":
                    return <img src={GithubIconBlack} alt=''/>
                case "stackOverflow":
                    return <img src={StackOverFlowIconBlack} alt=''/>
                case "medium":
                    return <img src={MediumIconBlack} alt=''/>
                case "instagram":
                    return <img src={InstagramIconBlack} alt=''/>
                default:
                    return null
            }
        }
    }

    const renderSocialItem = (group, item) => {
        if(socialData[group][item]){
            return (
                <div key={item} className="profile-social__row">
                    <div className='profile-social__row--block'>
                        <div className="profile-social__row--txt">{socialData[group][item]}</div>
                        <div className="profile-social__row--icon">
                            {renderSocialIcon(item)}
                        </div>
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
                <div className='profile-social__wrapper--block'>
                    {socialData && Object.keys(socialData).map(group => (
                        Object.keys(socialData[group]).map(item => renderSocialItem(group, item))
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileSocial
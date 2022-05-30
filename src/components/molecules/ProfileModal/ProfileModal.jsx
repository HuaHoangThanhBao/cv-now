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
import './ProfileModal.scss';

const ProfileModal = (props) => {
    const {socialData, setSocialData, isOpenProfileModal, setIsOpenProfileModal} = props;
    const onInputChange = (e, property) => {
        let val = e.target.value;
        if(val === ''){
            let length = 0
            Object.keys(socialData).map(group => (
                Object.keys(socialData[group]).map(item => {
                    if(socialData[group][item]){
                        length += 1
                    }
                    return item
                })
            ))

            //if there is only one inputfield has data, we prevent it is empty
            if(length === 1) {
                //show alert modal here
                //
                console.log('you must have at least one input field data')
                return
            }
        }
        switch(property){
            case "email":
                socialData.personal.email = val;
            break;
            case "address":
                socialData.personal.address = val;
            break;
            case "phoneNumber":
                socialData.personal.phoneNumber = val;
            break;
            case "website":
                socialData.general.website = val;
            break;
            case "linkedIn":
                socialData.general.linkedIn = val;
            break;
            case "twitter":
                socialData.general.twitter = val;
            break;
            case "quora":
                socialData.general.quora = val;
            break;
            case "skype":
                socialData.general.skype = val;
            break;
            case "facebook":
                socialData.general.facebook = val;
            break;
            case "github":
                socialData.coding.github = val;
            break;
            case "stackOverflow":
                socialData.coding.stackOverflow = val;
            break;
            case "medium":
                socialData.creativePlatform.medium = val;
            break;
            case "instagram":
                socialData.creativePlatform.instagram = val;
            break;
            default:
            break;
        }
        setSocialData({...socialData})
        return val;
    }

    const onSaveSocialData = () => {
        //catch input exception
        //

        setIsOpenProfileModal(false)
    }

    return (
        <div className={`profile-modal ${isOpenProfileModal ? 'active': ''}`}>
            <div className="profile-modal-wrapper">
                <div className="profile-modal-option">
                    <button 
                        className='profile-modal-btn-discard'
                        onClick={() => setIsOpenProfileModal(false)}
                    >
                        Discard
                    </button>
                    <button 
                        className='profile-modal-btn-save'
                        onClick={onSaveSocialData}
                    >
                        Save
                    </button>
                </div>
                <div className="profile-modal-container">
                    <div className='profile-modal-heading'>
                        Personal
                    </div>
                    <div className='profile-modal-group'>
                        <div className='profile-modal-item'>
                            <MailIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Email'
                                value={socialData.personal.email}
                                onChange={(e) => onInputChange(e, "email")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <LocationIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Address'
                                value={socialData.personal.address}
                                onChange={(e) => onInputChange(e, "address")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <PhoneIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Phone Number'
                                value={socialData.personal.phoneNumber}
                                onChange={(e) => onInputChange(e, "phoneNumber")}/>
                        </div>
                    </div>
                    <div className='profile-modal-heading'>
                        General/Social Media
                    </div>
                    <div className='profile-modal-group'>
                        <div className='profile-modal-item'>
                            <WebsiteIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Website'
                                value={socialData.general.website}
                                onChange={(e) => onInputChange(e, "website")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <LinkedinIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='LinkedIn'
                                value={socialData.general.linkedIn}
                                onChange={(e) => onInputChange(e, "linkedIn")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <TwitterIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Twitter'
                                value={socialData.general.twitter}
                                onChange={(e) => onInputChange(e, "twitter")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <QuoraIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Quora'
                                value={socialData.general.quora}
                                onChange={(e) => onInputChange(e, "quora")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <SkypeIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Skype'
                                value={socialData.general.skype}
                                onChange={(e) => onInputChange(e, "skype")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <FacebookIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Facebook'
                                value={socialData.general.facebook}
                                onChange={(e) => onInputChange(e, "facebook")}/>
                        </div>
                    </div>
                    <div className='profile-modal-heading'>
                        Coding
                    </div>
                    <div className='profile-modal-group'>
                        <div className='profile-modal-item'>
                            <GithubIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Github'
                                value={socialData.coding.github}
                                onChange={(e) => onInputChange(e, "github")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <StackOverFlowIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Stack Overflow'
                                value={socialData.coding.stackOverflow}
                                onChange={(e) => onInputChange(e, "stackOverflow")}/>
                        </div>
                    </div>
                    <div className='profile-modal-heading'>
                        Creative Platforms
                    </div>
                    <div className='profile-modal-group'>
                        <div className='profile-modal-item'>
                            <MediumIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Medium'
                                value={socialData.creativePlatform.medium}
                                onChange={(e) => onInputChange(e, "medium")}/>
                        </div>
                        <div className='profile-modal-item'>
                            <InstagramIcon />
                            <input 
                                type="text" 
                                className="profile-modal-input" 
                                placeholder='Instagram'
                                value={socialData.creativePlatform.instagram}
                                onChange={(e) => onInputChange(e, "instagram")}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal;
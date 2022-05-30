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
    return (
        <div className='profile-modal'>
            <div className="profile-modal-wrapper">
                <div className="profile-modal-option">
                    <button className='profile-modal-btn-discard'>Discard</button>
                    <button className='profile-modal-btn-save'>Save</button>
                </div>
                <div className="profile-modal-container">
                    <div className='profile-modal-heading'>
                        Personal
                    </div>
                    <div className='profile-modal-group'>
                        <div className='profile-modal-item'>
                            <MailIcon />
                            <input type="text" className="profile-modal-input" placeholder='Email'/>
                        </div>
                        <div className='profile-modal-item'>
                            <LocationIcon />
                            <input type="text" className="profile-modal-input" placeholder='Address'/>
                        </div>
                        <div className='profile-modal-item'>
                            <PhoneIcon />
                            <input type="text" className="profile-modal-input" placeholder='Phone Number'/>
                        </div>
                    </div>
                    <div className='profile-modal-heading'>
                        General/Social Media
                    </div>
                    <div className='profile-modal-group'>
                        <div className='profile-modal-item'>
                            <WebsiteIcon />
                            <input type="text" className="profile-modal-input" placeholder='Website'/>
                        </div>
                        <div className='profile-modal-item'>
                            <LinkedinIcon />
                            <input type="text" className="profile-modal-input" placeholder='Linkedin'/>
                        </div>
                        <div className='profile-modal-item'>
                            <TwitterIcon />
                            <input type="text" className="profile-modal-input" placeholder='Twitter'/>
                        </div>
                        <div className='profile-modal-item'>
                            <QuoraIcon />
                            <input type="text" className="profile-modal-input" placeholder='Quora'/>
                        </div>
                        <div className='profile-modal-item'>
                            <SkypeIcon />
                            <input type="text" className="profile-modal-input" placeholder='Skype'/>
                        </div>
                        <div className='profile-modal-item'>
                            <FacebookIcon />
                            <input type="text" className="profile-modal-input" placeholder='Facebook'/>
                        </div>
                    </div>
                    <div className='profile-modal-heading'>
                        Coding
                    </div>
                    <div className='profile-modal-group'>
                        <div className='profile-modal-item'>
                            <GithubIcon />
                            <input type="text" className="profile-modal-input" placeholder='Github'/>
                        </div>
                        <div className='profile-modal-item'>
                            <StackOverFlowIcon />
                            <input type="text" className="profile-modal-input" placeholder='Stack Overflow'/>
                        </div>
                    </div>
                    <div className='profile-modal-heading'>
                        Creative Platforms
                    </div>
                    <div className='profile-modal-group'>
                        <div className='profile-modal-item'>
                            <MediumIcon />
                            <input type="text" className="profile-modal-input" placeholder='Medium'/>
                        </div>
                        <div className='profile-modal-item'>
                            <InstagramIcon />
                            <input type="text" className="profile-modal-input" placeholder='Instagram'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal;
import React from 'react';

const Settings = () => {
    return (
        <div className='settings'>
            <div className='settings-wrapper'>
                <div className='settings-list'>
                    <div className='settings-item'>
                        <input type="checkbox" className='settings-checkbox'/>
                        <span className='settings-text'>Avatar</span>
                    </div>
                    <div className='settings-item'>
                        <input type="checkbox" className='settings-checkbox'/>
                        <span className='settings-text'>Creation Date</span>
                    </div>
                    <div className='settings-item'>
                        <input type="checkbox" className='settings-checkbox'/>
                        <span className='settings-text'>Page Numbers</span>
                    </div>
                    <div className='settings-item'>
                        <input type="checkbox" className='settings-checkbox'/>
                        <span className='settings-text'>Icons</span>
                    </div>
                    <div className='settings-item'>
                        <input type="checkbox" className='settings-checkbox'/>
                        <span className='settings-text'>Socials</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
import React from 'react';
import InputInfo from '../../atoms/InputInfo/InputInfo';

const ProfileInfo = (props) => {
    const {infoKeys, info, setInfo} = props;

    const onInputChange = (key, value) => {
        info[key] = value;
        setInfo(info);
    }

    return (
        <div className='profile-detail'>
            <div className='profile-heading'>
                <InputInfo 
                    inputKey={infoKeys[0]}
                    placeHolder={info.name}
                    onInputChange={onInputChange}
                />
            </div>
            <div className='profile-title'>
                <InputInfo 
                    inputKey={infoKeys[1]}
                    placeHolder={info.professional_title}
                    onInputChange={onInputChange}
                />
            </div>
            <div className='profile-description'>
                <InputInfo 
                    inputKey={infoKeys[2]}
                    placeHolder={info.short_description}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    )
}

export default ProfileInfo
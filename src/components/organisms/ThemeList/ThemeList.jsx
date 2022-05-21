import React from 'react';
import './ThemeList.scss';
import {theme} from '../../../constants/Theme';

const ThemeList = (props) => {
    const {setCurrentThemeType} = props;
    return(
        <div className='theme'>
            <div className='theme-list'>
                {theme && Object.keys(theme).map((_theme) => (
                    <div
                        key={_theme}
                        className='theme-item'
                        onClick={() => setCurrentThemeType(_theme)}
                    >
                        <div className={`theme-image ${_theme}`}></div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ThemeList;
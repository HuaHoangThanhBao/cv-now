import React from 'react';
import './Title.scss';

//Title of document
const Title = ({placeholder, onChange}) => {
    return(
        <div className="title">
            <input placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default Title;
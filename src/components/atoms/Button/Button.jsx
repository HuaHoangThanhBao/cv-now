import React from 'react';

const Button = ({icon, text, onClick}) => {
    return(
        <div className="btn" onClick={onClick}>
            {icon && (
                <img className="btn-icon" src={icon} alt="" />
            )}
            <span className="btn-text">{text}</span>
        </div>
    )
}

export default Button;
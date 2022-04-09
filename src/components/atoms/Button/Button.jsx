import React from 'react';

const Button = ({icon, externalClassName, text, onClick}) => {
    return(
        <div className={"btn" +  (externalClassName ? ` ${externalClassName}`: '')} onClick={onClick}>
            {icon && (
                <img className="btn-icon" src={icon} alt="" />
            )}
            <span className="btn-text">{text}</span>
        </div>
    )
}

export default Button;
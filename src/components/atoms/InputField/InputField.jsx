import React from 'react';
import './InputField.scss';

const InputField = ({externalClass, visible, icon, type, placeHolder, value, onChange}) => {
    return(
        (visible !== false && (
            (icon ? 
                <div className='field field-bullet'>
                    {icon && (
                        <img src={icon} alt="" className='field-icon'/>
                    )}
                    <input 
                        className={"field-input" + (externalClass ? " " + externalClass: "")}
                        type={type} 
                        placeholder={placeHolder}
                        onChange={onChange}
                    />
                </div>
            :
            <div className='field'>
                {icon && (
                    <img src={icon} alt="" className='field-icon'/>
                )}
                <input 
                    className={"field-input" + (externalClass ? " " + externalClass: "")}
                    type={type} 
                    placeholder={placeHolder}
                    onChange={onChange}
                />
            </div>
            )
        ))
    )
}

export default InputField;
import React from 'react';
import InputField from '../../atoms/InputField/InputField';
import './DateInput.scss';

const DateInput = ({isVisible}) => {
    return(
        (isVisible && (
            <div className="date">
                <div className="date-group">
                    <InputField 
                        externalClass="date-month dashed" 
                        placeHolder="mm"
                    />
                    <span>/</span>
                    <InputField 
                        externalClass="date-year dashed" 
                        placeHolder="yyyy"
                    />
                </div>
                <span>-</span>
                <div className="date-group">
                    <InputField 
                        externalClass="date-month dashed" 
                        placeHolder="mm"
                    />
                    <span>/</span>
                    <InputField 
                        externalClass="date-year dashed" 
                        placeHolder="yyyy"
                    />
                </div>
            </div>
        ))
    )
}

export default DateInput;
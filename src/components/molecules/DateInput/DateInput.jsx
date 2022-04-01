import React, { useEffect, useState } from 'react';
import InputField from '../../atoms/InputField/InputField';
import './DateInput.scss';

const DateInput = (props) => {
    const {isVisible, onInputFieldChange} = props;
    const [monthStart, setMonthStart] = useState('');
    const [monthEnd, setMonthEnd] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');
    const [allCheck, setAllCheck] = useState(false);

    const onMonthStartFieldChange = (event, setValue, setIsHide) => {
        onInputFieldChange(event, setValue, setIsHide)
        setMonthStart(event.target.value)
    }
    const onMonthEndFieldChange = (event, setValue, setIsHide) => {
        onInputFieldChange(event, setValue, setIsHide)
        setMonthEnd(event.target.value)
    }
    const onYearStartFieldChange = (event, setValue, setIsHide) => {
        onInputFieldChange(event, setValue, setIsHide)
        setYearStart(event.target.value)
    }
    const onYearEndFieldChange = (event, setValue, setIsHide) => {
        onInputFieldChange(event, setValue, setIsHide)
        setYearEnd(event.target.value)
    }
    useEffect(() => {
        if(!monthStart || !monthEnd || !yearStart || !yearEnd){
            setAllCheck(false)
        }
        else{
            setAllCheck(true)
        }
    }, [monthStart, monthEnd, yearStart, yearEnd])
    const isShow = () => {
        if(isVisible){
            if(!allCheck) return true
            return true
        }
        else{
            if(allCheck) return true;
            return false
        }
    }
    return(
        <div className="date">
            <div className="date-group">
                <InputField 
                    externalClass="date-month dashed" 
                    placeHolder="mm"
                    type="number"
                    visible={isShow()}
                    allCheck={allCheck}
                    onChange={onMonthStartFieldChange}
                />
                {(isShow() && (
                    <span>/</span>
                ))}
                <InputField 
                    externalClass="date-year dashed" 
                    placeHolder="yyyy"
                    type="number"
                    visible={isShow()}
                    allCheck={allCheck}
                    onChange={onMonthEndFieldChange}
                />
            </div>
            {(isShow() && (
                <span>-</span>
            ))}
            <div className="date-group">
                <InputField 
                    externalClass="date-month dashed" 
                    placeHolder="mm"
                    type="number"
                    visible={isShow()}
                    allCheck={allCheck}
                    onChange={onYearStartFieldChange}
                />
                {(isShow() && (
                    <span>/</span>
                ))}
                <InputField 
                    externalClass="date-year dashed" 
                    placeHolder="yyyy"
                    type="number"
                    visible={isShow()}
                    allCheck={allCheck}
                    onChange={onYearEndFieldChange}
                />
            </div>
        </div>
    )
}

export default DateInput;
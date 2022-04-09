import React, { useEffect, useState } from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
import InputField from '../../atoms/InputField/InputField';
import './DateInput.scss';

const DateInput = (props) => {
    const {pageIndex, childIndex, currentIndex, isVisible, onInputFieldChange, updateFieldData, getTitle} = props;
    const [monthStart, setMonthStart] = useState('');
    const [monthEnd, setMonthEnd] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');
    const [allCheck, setAllCheck] = useState(false);

    const onMonthStartFieldChange = (event, setValue) => {
        onInputFieldChange(event, setValue)
        setMonthStart(event.target.value)
    }
    const onMonthEndFieldChange = (event, setValue) => {
        onInputFieldChange(event, setValue)
        setMonthEnd(event.target.value)
    }
    const onYearStartFieldChange = (event, setValue) => {
        onInputFieldChange(event, setValue)
        setYearStart(event.target.value)
    }
    const onYearEndFieldChange = (event, setValue) => {
        onInputFieldChange(event, setValue)
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
                    inputBlockType={InputFieldType.month_start}
                    placeHolder={getTitle(currentIndex, InputFieldType.month_start)}
                    type="number"
                    visible={false}
                    isVisible={isShow()}
                    allCheck={allCheck}
                    onChange={onMonthStartFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                />
                {(isShow() && (
                    <span>/</span>
                ))}
                <InputField 
                    externalClass="date-year dashed" 
                    inputBlockType={InputFieldType.year_start}
                    placeHolder={getTitle(currentIndex, InputFieldType.year_start)}
                    type="number"
                    visible={false}
                    isVisible={isShow()}
                    allCheck={allCheck}
                    onChange={onMonthEndFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                />
            </div>
            {(isShow() && (
                <span>-</span>
            ))}
            <div className="date-group">
                <InputField 
                    externalClass="date-month dashed" 
                    inputBlockType={InputFieldType.month_end}
                    placeHolder={getTitle(currentIndex, InputFieldType.month_end)}
                    type="number"
                    visible={false}
                    isVisible={isShow()}
                    allCheck={allCheck}
                    onChange={onYearStartFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                />
                {(isShow() && (
                    <span>/</span>
                ))}
                <InputField 
                    externalClass="date-year dashed" 
                    inputBlockType={InputFieldType.year_end}
                    placeHolder={getTitle(currentIndex, InputFieldType.year_end)}
                    type="number"
                    visible={false}
                    isVisible={isShow()}
                    allCheck={allCheck}
                    onChange={onYearEndFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                />
            </div>
        </div>
    )
}

export default DateInput;
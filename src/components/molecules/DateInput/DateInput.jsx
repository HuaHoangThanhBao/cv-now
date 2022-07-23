import React, { useEffect, useState } from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
import InputField from '../../atoms/InputField/InputField';
import './DateInput.scss';

const DateInput = (props) => {
    const {
        pageIndex, columnIndex, childIndex, currentIndex, isDisplayWhenHasInformation, 
        updateFieldHeight, updateFieldData, getField, isPreventInteracting
    } = props;

    const [allCheck, setAllCheck] = useState(false)

    const monthStartField = getField(currentIndex, InputFieldType.month_start)[InputFieldType.month_start]
    const yearStartField = getField(currentIndex, InputFieldType.year_start)[InputFieldType.year_start]
    const monthEndField = getField(currentIndex, InputFieldType.month_end)[InputFieldType.month_end]
    const yearEndField = getField(currentIndex, InputFieldType.year_end)[InputFieldType.year_end]

    useEffect(() => {
        if((monthStartField && monthStartField !== 'mm')
        && (yearStartField && yearStartField !== 'yyyy')
        && (monthEndField && monthEndField !== 'mm')
        && (yearEndField && yearEndField !== 'yyyy')){
            setAllCheck(true)
        }
        else{
            setAllCheck(false)
        }
    }, [currentIndex, monthStartField, monthEndField, yearStartField, yearEndField, getField])

    return(
        <div className={`date ${(!isDisplayWhenHasInformation && allCheck) ? 'isDisplayWhenHasInformation': ''}`}>
            <div className={`date-group ${(!isDisplayWhenHasInformation && allCheck) ? 'isDisplayWhenHasInformation': ''}`}>
                <InputField 
                    externalClass="date-month dashed" 
                    inputBlockType={InputFieldType.month_start}
                    placeHolder={getField(currentIndex, InputFieldType.month_start).month_start}
                    text={getField(currentIndex, InputFieldType.month_start)[InputFieldType.month_start]}
                    type="number"
                    visible={isDisplayWhenHasInformation}
                    isDisplayWhenHasInformation={allCheck}
                    updateFieldHeight={updateFieldHeight}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                    isPreventInteracting={isPreventInteracting}
                    isDateInputFieldType={true}
                    getField={getField}
                />
                {((allCheck || isDisplayWhenHasInformation) && (
                    <span className='date-group-divider'>/</span>
                ))}
                <InputField 
                    externalClass="date-year dashed" 
                    inputBlockType={InputFieldType.year_start}
                    placeHolder={getField(currentIndex, InputFieldType.year_start).year_start}
                    text={getField(currentIndex, InputFieldType.year_start)[InputFieldType.year_start]}
                    type="number"
                    visible={isDisplayWhenHasInformation}
                    isDisplayWhenHasInformation={allCheck}
                    updateFieldHeight={updateFieldHeight}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                    isPreventInteracting={isPreventInteracting}
                    isDateInputFieldType={true}
                    getField={getField}
                />
            </div>
            {((allCheck || isDisplayWhenHasInformation) && (
                <span className='date-divider'>-</span>
            ))}
            <div className={`date-group ${(!isDisplayWhenHasInformation && allCheck) ? 'isDisplayWhenHasInformation': ''}`}>
                <InputField 
                    externalClass="date-month dashed" 
                    inputBlockType={InputFieldType.month_end}
                    placeHolder={getField(currentIndex, InputFieldType.month_end).month_end}
                    text={getField(currentIndex, InputFieldType.month_end)[InputFieldType.month_end]}
                    type="number"
                    visible={isDisplayWhenHasInformation}
                    isDisplayWhenHasInformation={allCheck}
                    updateFieldHeight={updateFieldHeight}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                    isPreventInteracting={isPreventInteracting}
                    isDateInputFieldType={true}
                    getField={getField}
                />
                {((allCheck || isDisplayWhenHasInformation) && (
                    <span className='date-group-divider'>/</span>
                ))}
                <InputField 
                    externalClass="date-year dashed" 
                    inputBlockType={InputFieldType.year_end}
                    placeHolder={getField(currentIndex, InputFieldType.year_end).year_end}
                    text={getField(currentIndex, InputFieldType.year_end)[InputFieldType.year_end]}
                    type="number"
                    visible={isDisplayWhenHasInformation}
                    isDisplayWhenHasInformation={allCheck}
                    updateFieldHeight={updateFieldHeight}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                    isPreventInteracting={isPreventInteracting}
                    isDateInputFieldType={true}
                    getField={getField}
                />
            </div>
        </div>
    )
}

export default DateInput;
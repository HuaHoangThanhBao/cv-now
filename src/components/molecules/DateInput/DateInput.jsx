import React, { useEffect, useState } from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
import InputField from '../../atoms/InputField/InputField';
import './DateInput.scss';

const DateInput = (props) => {
    const {
        pageIndex, columnIndex, childIndex, currentIndex, isDisplayWhenHasInformation, 
        updateFieldHeight, updateFieldData, getTitle, getField
    } = props;

    const [allCheck, setAllCheck] = useState(false)

    useEffect(() => {
        if(getField(currentIndex, InputFieldType.month_start)[InputFieldType.month_start] !== 'mm'
        && getField(currentIndex, InputFieldType.year_start)[InputFieldType.year_start] !== 'yyyy'
        && getField(currentIndex, InputFieldType.month_end)[InputFieldType.month_end] !== 'mm'
        && getField(currentIndex, InputFieldType.year_end)[InputFieldType.year_end] !== 'yyyy'){
            setAllCheck(true)
        }
    }, [currentIndex, getField])

    return(
        <div className="date">
            <div className="date-group">
                <InputField 
                    externalClass="date-month dashed" 
                    inputBlockType={InputFieldType.month_start}
                    placeHolder={getTitle(currentIndex, InputFieldType.month_start)}
                    type="number"
                    visible={isDisplayWhenHasInformation}
                    isDisplayWhenHasInformation={allCheck}
                    updateFieldHeight={updateFieldHeight}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                />
                {((allCheck || isDisplayWhenHasInformation) && (
                    <span>/</span>
                ))}
                <InputField 
                    externalClass="date-year dashed" 
                    inputBlockType={InputFieldType.year_start}
                    placeHolder={getTitle(currentIndex, InputFieldType.year_start)}
                    type="number"
                    visible={isDisplayWhenHasInformation}
                    isDisplayWhenHasInformation={allCheck}
                    updateFieldHeight={updateFieldHeight}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                />
            </div>
            {((allCheck || isDisplayWhenHasInformation) && (
                <span>/</span>
            ))}
            <div className="date-group">
                <InputField 
                    externalClass="date-month dashed" 
                    inputBlockType={InputFieldType.month_end}
                    placeHolder={getTitle(currentIndex, InputFieldType.month_end)}
                    type="number"
                    visible={isDisplayWhenHasInformation}
                    isDisplayWhenHasInformation={allCheck}
                    updateFieldHeight={updateFieldHeight}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                />
                {((allCheck || isDisplayWhenHasInformation) && (
                    <span>/</span>
                ))}
                <InputField 
                    externalClass="date-year dashed" 
                    inputBlockType={InputFieldType.year_end}
                    placeHolder={getTitle(currentIndex, InputFieldType.year_end)}
                    type="number"
                    visible={isDisplayWhenHasInformation}
                    isDisplayWhenHasInformation={allCheck}
                    updateFieldHeight={updateFieldHeight}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={currentIndex}
                />
            </div>
        </div>
    )
}

export default DateInput;
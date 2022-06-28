import React, { useState, createRef, useEffect, useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import { InputFieldType } from '../../../constants/InputFieldType';
import './InputField.scss';

const InputField = (props) => {
    const {
        externalClass,  pageIndex, columnIndex, childIndex, currentIndex, visible, 
        isDisplayWhenHasInformation, inputBlockType, icon, placeHolder, isFocus,
        updateFieldData, updateFieldHeight, isNotDisplayIcon, isPreventInteracting,
        isDateInputFieldType, getField
    } = props;
    const inputRef = useRef();
    const contentEditable = createRef();
    const [html, setHTML] = useState(isDateInputFieldType ? '': placeHolder);
    
    useEffect(() => {
        if(isPreventInteracting) return
        if(isFocus){
            contentEditable.current.focus()
        }
    }, [isFocus, isPreventInteracting])

    useEffect(() => {
        if(isDateInputFieldType) return
        setHTML(placeHolder)
    }, [placeHolder, isDateInputFieldType])

    const handleChange = (evt) => {
        const value = evt.target.value
        updateFieldData(pageIndex, columnIndex, childIndex, currentIndex, inputBlockType, placeHolder, value)
        setHTML(value);
    };
    
    useEffect(() => {
        if(isDisplayWhenHasInformation){
            if(inputRef && inputRef.current){
                const height = inputRef.current.offsetHeight
                updateFieldHeight(pageIndex, columnIndex, childIndex, currentIndex, inputBlockType, height)
            }
        }
    }, [isDisplayWhenHasInformation, html, childIndex, columnIndex, currentIndex, inputBlockType, pageIndex, updateFieldHeight])


    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode !== 37 && charCode !== 39)) {
            return false;
        }
        return true;
    }

    const handleKeyDown = (e) => {
        if(isDateInputFieldType){
            if (!isNumber(e)){
                e.preventDefault();
            }
        }
    }

    return(
        <div 
            className={
                'field' 
                + (icon ? " field-bullet": "") 
                + (visible ? " visible": "") 
                + (isDisplayWhenHasInformation ? " isDisplayWhenHasInformation": "")
                + (isNotDisplayIcon ? " field-with-no-icon": "")
            } 
            ref={inputRef}
        >
            {icon && (
                <img src={icon} alt="" className='field-icon'/>
            )}
            {!isDateInputFieldType ? (
                <ContentEditable 
                    className={`field-input ${(externalClass ? ` ${externalClass}`: '')} ${isDateInputFieldType ? 'date': ''}`}
                    innerRef={contentEditable} 
                    html={html}
                    placeholder={placeHolder}
                    onChange={handleChange}
                />
            ): (
                <input 
                    className={`field-input ${(externalClass ? ` ${externalClass}`: '')} ${isDateInputFieldType ? 'date': ''}`}
                    type='text' 
                    onChange={handleChange}
                    placeholder={getField(currentIndex, inputBlockType)[inputBlockType] !== '' ? placeHolder: ''}
                    onKeyDown={handleKeyDown}
                    maxLength={
                        (inputBlockType === InputFieldType.month_start 
                        || inputBlockType === InputFieldType.month_end) ? 2: 4
                    }
                />
            )}
        </div>
    )
}

export default InputField;
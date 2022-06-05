import React, { useState, createRef, useEffect, useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import './InputField.scss';

const InputField = (props) => {
    const {
        externalClass, pageIndex, columnIndex, childIndex, currentIndex, visible, 
        isDisplayWhenHasInformation, inputBlockType, icon, placeHolder, isFocus,
        updateFieldData, updateFieldHeight
    } = props;
    const inputRef = useRef();
    const contentEditable = createRef();
    const [html, setHTML] = useState(placeHolder);
    
    useEffect(() => {
        if(isFocus){
            contentEditable.current.focus()
        }
    }, [isFocus])

    useEffect(() => {
        setHTML(placeHolder)
    }, [placeHolder])

    const handleChange = (evt) => {
        const value = evt.target.value
        updateFieldData(pageIndex, columnIndex, childIndex, currentIndex, inputBlockType, placeHolder, value)
        setHTML(value);
    };
    
    useEffect(() => {
        if(inputRef && inputRef.current){
            const height = inputRef.current.offsetHeight
            updateFieldHeight(pageIndex, columnIndex, childIndex, currentIndex, inputBlockType, height)
        }
    }, [html, childIndex, columnIndex, currentIndex, inputBlockType, pageIndex, updateFieldHeight])

    return(
        <div 
            className={
                'field' 
                + (icon ? " field-bullet": "") 
                + (visible ? " visible": "") 
                + (isDisplayWhenHasInformation ? " isDisplayWhenHasInformation": "")
            } 
            ref={inputRef}
        >
            {icon && (
                <img src={icon} alt="" className='field-icon'/>
            )}
            <ContentEditable 
                className={"field-input" + (externalClass ? ` ${externalClass}`: "")}
                innerRef={contentEditable} 
                html={html}
                onChange={handleChange}
            />
        </div>
    )
}

export default InputField;
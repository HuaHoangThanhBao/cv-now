import React, { useState, createRef, useEffect, useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import './InputField.scss';

const InputField = (props) => {
    const inputRef = useRef();
    const contentEditable = createRef();
    const {externalClass, pageIndex, childIndex, currentIndex, visible, isVisible, inputBlockType, icon, type, placeHolder, updateFieldData, updateFieldHeight} = props;
    const [html, setHTML] = useState(placeHolder);
    
    useEffect(() => {
        setHTML(placeHolder)
    }, [placeHolder])

    const handleChange = (evt) => {
        const value = evt.target.value
        updateFieldData(pageIndex, childIndex, currentIndex, inputBlockType, placeHolder, value)
        setHTML(value);
    };
    
    useEffect(() => {
        if(inputRef && inputRef.current){
            const height = inputRef.current.offsetHeight
            updateFieldHeight(pageIndex, childIndex, currentIndex, inputBlockType, height)
        }
    }, [html])

    const renderField = () => {
        if(visible){
            return (
                <div className={'field' + (icon ? " field-bullet": "")} ref={inputRef}>
                    {icon && (
                        <img src={icon} alt="" className='field-icon'/>
                    )}
                    <ContentEditable 
                        className={"field-input" + (externalClass ? " " + externalClass: "")}
                        innerRef={contentEditable} 
                        html={html}
                        onChange={handleChange}
                    />
                </div>
            )
        }
        else{
            if(isVisible){
                return (
                    <div className={'field' + (icon ? " field-bullet": "")}>
                        {icon && (
                            <img src={icon} alt="" className='field-icon'/>
                        )}
                        <ContentEditable 
                            className={"field-input" + (externalClass ? " " + externalClass: "")}
                            innerRef={contentEditable} 
                            html={html}
                            onChange={handleChange}
                        />
                    </div>
                )
            }
            else return ''
        }
    }
    return(
        renderField()
    )
}

export default InputField;
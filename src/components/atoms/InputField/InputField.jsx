import React, { useState, createRef, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import './InputField.scss';

const InputField = (props) => {
    const contentEditable = createRef();
    const {externalClass, pageIndex, childIndex, currentIndex, visible, isVisible, inputBlockType, icon, type, placeHolder, updateFieldData} = props;
    const [html, setHTML] = useState(placeHolder);

    const handleChange = (evt) => {
        setHTML(evt.target.value);
    };

    useEffect(() => {
        setHTML(placeHolder)
    }, [placeHolder])

    useEffect(() => {
        updateFieldData(pageIndex, childIndex, currentIndex, inputBlockType, placeHolder, html)
    }, [html])

    const renderField = () => {
        if(visible){
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
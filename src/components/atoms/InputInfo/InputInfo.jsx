import React, { createRef, useState, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';

const InputInfo = (props) => {
    const {inputKey, externalClass, placeHolder, onInputChange} = props;
    const contentEditable = createRef();
    const [html, setHTML] = useState(placeHolder);
    
    useEffect(() => {
        setHTML(placeHolder)
    }, [placeHolder])

    const handleChange = (evt) => {
        const value = evt.target.value;
        onInputChange(inputKey, value)
        setHTML(value);
    };

    return (
        <ContentEditable 
            className={"field-input" + (externalClass ? " " + externalClass: "")}
            innerRef={contentEditable} 
            html={html}
            onChange={handleChange}
        />
    )
}

export default InputInfo;
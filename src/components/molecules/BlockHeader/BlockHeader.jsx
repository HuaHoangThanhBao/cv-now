import React, {createRef, useEffect, useRef, useState} from 'react';
import ContentEditable from 'react-contenteditable';
import { InputFieldType } from '../../../constants/InputFieldType';
import './BlockHeader.scss';

const BlockHeader = ({title, pageIndex, childIndex, handleBlockHeader, handleOutsideClick, updateFieldData, children}) => {
    const ref = useRef();
    const contentEditable = createRef();
    const [html, setHTML] = useState('');

    const handleChange = (evt) => {
        setHTML(evt.target.value);
    };

    handleOutsideClick(ref, handleBlockHeader)

    useEffect(() => {
        setHTML(title)
    }, [title])

    useEffect(() => {
        updateFieldData(pageIndex, childIndex, -1, InputFieldType.header, title, html)
    }, [html])

    return(
        <div className="block-header" ref={ref}>
            {children}
            <ContentEditable 
                className={"field-input block-header-title"}
                innerRef={contentEditable} 
                html={html}
                onChange={handleChange}
            />
        </div>
    )
}

export default BlockHeader;
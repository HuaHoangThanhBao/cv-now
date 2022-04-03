import React, {createRef, useState} from 'react';
import ContentEditable from 'react-contenteditable';
import './BlockHeader.scss';

const BlockHeader = ({title, onClick}) => {
    const contentEditable = createRef();
    const [html, setHTML] = useState(title);
    const handleChange = (evt) => {
        setHTML(evt.target.value);
    };
    return(
        <div className="block-header" onClick={onClick}>
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
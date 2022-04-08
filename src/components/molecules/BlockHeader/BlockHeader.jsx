import React, {createRef, useEffect, useRef, useState} from 'react';
import ContentEditable from 'react-contenteditable';
import './BlockHeader.scss';

const BlockHeader = ({title, handleOutsideClick, handleBlockHeader, onClick}) => {
    const ref = useRef();
    const contentEditable = createRef();
    const [html, setHTML] = useState(title);
    const [visible, setVisible] = useState(false)

    const handleChange = (evt) => {
        setHTML(evt.target.value);
    };

    const handleBlockHeaderClick = (status) => {
        setVisible(status)
    }

    handleOutsideClick(ref, handleBlockHeaderClick)

    useEffect(() => {
        return () => {
            if(visible){
                handleBlockHeader(true)
            }
        }
    }, [visible])

    return(
        <div className="block-header" ref={ref} onClick={onClick}>
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
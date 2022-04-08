import React, {createRef, useEffect, useRef, useState} from 'react';
import ContentEditable from 'react-contenteditable';
import './BlockHeader.scss';

const BlockHeader = ({title, handleOutsideClick, handleBlockHeader, onClick}) => {
    const ref = useRef();
    const contentEditable = createRef();
    const [html, setHTML] = useState('');
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

    useEffect(() => {
        setHTML(title)
    }, [title])

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
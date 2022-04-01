import React, {createRef} from 'react';
import ContentEditable from 'react-contenteditable';
import './BlockHeader.scss';

const BlockHeader = ({title}) => {
    const contentEditable = React.createRef();
    return(
        <div className="block-header">
            <ContentEditable 
                className={"field-input block-header-title"}
                innerRef={contentEditable} 
                html={title}
            />
        </div>
    )
}

export default BlockHeader;
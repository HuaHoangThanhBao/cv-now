import React from 'react';
import Button from '../../atoms/Button/Button';
import AddIcon from './../../../dist/add.svg';
import './BlockContent.scss';

const BlockContent = ({isVisible, children}) => {
    return(
        <div className={"block-content" + (isVisible ? " active": "")}>
            {children}
            {isVisible && (
                <div className="block-content-bottom">
                    <Button icon={AddIcon}/>
                    <div className="block-content-bottom-line"></div>
                    <div className="block-content-bottom-small-circle"></div>
                </div>
            )}
        </div>
    )
}

export default BlockContent;
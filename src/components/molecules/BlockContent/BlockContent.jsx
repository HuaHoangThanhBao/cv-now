import React from 'react';
import Button from '../../atoms/Button/Button';
import AddIcon from './../../../dist/add.svg';
import AlertIcon from './../../../dist/exclamation.svg';
import './BlockContent.scss';

const BlockContent = ({isVisible, onCreateNewContent, onClick, children}) => {
    return(
        <div className={"block-content" + (isVisible ? " active": "")} onClick={onClick}>
            <span className='block-content-alert'>
                <img src={AlertIcon} alt="" />
            </span>
            {children}
            {isVisible && (
                <div className="block-content-bottom">
                    <Button 
                        icon={AddIcon} 
                        onClick={onCreateNewContent}
                    />
                    <div className="block-content-bottom-line"></div>
                    <div className="block-content-bottom-small-circle"></div>
                </div>
            )}
        </div>
    )
}

export default BlockContent;
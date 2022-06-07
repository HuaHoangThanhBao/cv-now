import React from 'react';
import Button from '../../atoms/Button/Button';
import AddIcon from './../../../dist/add.svg';
import AlertIcon from './../../../dist/exclamation.svg';
import './BlockContent.scss';

const BlockContent = ({isDisplayWhenHasInformation, onCreateNewContent, onFocus, onClick, children}) => {
    return(
        <div 
            className={"block-content" + (isDisplayWhenHasInformation ? " active": "")} 
            onFocus={onFocus} 
            onClick={onClick}
        >
            {/* <span className='block-content-alert'>
                <img src={AlertIcon} alt="" />
            </span> */}
            {children}
            {isDisplayWhenHasInformation && (
                <div className="block-content-bottom">
                    <Button 
                        icon={AddIcon} 
                        onClick={onCreateNewContent}
                    />
                    <div className='block-content-bottom-box line'>
                        <div className="block-content-bottom-line"></div>
                    </div>
                    <div className='block-content-bottom-box circle'>
                        <div className="block-content-bottom-small-circle"></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BlockContent;
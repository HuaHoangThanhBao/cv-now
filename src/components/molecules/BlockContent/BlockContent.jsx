import React from 'react';
import Button from '../../atoms/Button/Button';
import AddIcon from './../../../dist/add.svg';
import TrashIcon from './../../../dist/trash.svg';
import AlertIcon from './../../../dist/exclamation.svg';
import MoveUpIcon from './../../../dist/move-up.svg';
import MoveDownIcon from './../../../dist/move-down.svg';
import './BlockContent.scss';

const BlockContent = ({isVisible, onCreateNewContent, onRemoveContent, onClick, children}) => {
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
                    <Button 
                        externalClassName="trash" 
                        icon={TrashIcon} 
                        onClick={onRemoveContent}
                    />
                    <Button 
                        externalClassName="arrow-up" 
                        icon={MoveUpIcon}
                    />
                    <Button 
                        externalClassName="arrow-down" 
                        icon={MoveDownIcon}
                    />
                    <div className="block-content-bottom-line"></div>
                    <div className="block-content-bottom-small-circle"></div>
                </div>
            )}
        </div>
    )
}

export default BlockContent;
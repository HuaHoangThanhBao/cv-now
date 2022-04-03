import React from 'react';
import TrashIcon from './../../../dist/trash.svg';
import AddIcon from './../../../dist/add.svg';
import './BlockContentBar.scss';

const BlockContentBar = ({isVisible, onCreateNewContent, onRemoveContent}) => {
    return(
        <div className='block-bar'>
            {(isVisible && (
                <div className='block-bar-container'>
                    <div className='block-btn add' onClick={onCreateNewContent}>
                        <img src={AddIcon} alt="" />
                    </div>
                    <div className='block-btn' onClick={onRemoveContent}>
                        <img src={TrashIcon} alt="" />
                    </div>
                 </div>   
            ))}
        </div>
    )
}

export default BlockContentBar;
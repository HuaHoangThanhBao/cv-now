import React from 'react';
import TrashIcon from './../../../dist/trash.svg';
import AddIcon from './../../../dist/add.svg';
import MoveUpIcon from './../../../dist/move-up.svg';
import MoveDownIcon from './../../../dist/move-down.svg';
import './BlockContentBar.scss';

const BlockContentBar = ({isDisplayWhenHasInformation, currentIndex, dataLength, onCreateNewContent, onRemoveContent, onMoveContentDown, onMoveContentUp}) => {
    return(
        <div className='block-bar'>
            {(isDisplayWhenHasInformation && (
                <div className='block-bar-container'>
                    <div className='block-btn add' onClick={onCreateNewContent}>
                        <img src={AddIcon} alt="" />
                    </div>
                    {
                        currentIndex !== 0 ? (
                            <div className='block-btn up' onClick={onMoveContentUp}>
                                <img src={MoveUpIcon} alt="" />
                            </div>
                        )    
                        :
                        (
                            <div className='block-btn fade'>
                                <img src={MoveUpIcon} alt="" />
                            </div>
                        )
                    }
                    {
                        currentIndex !== dataLength - 1 ? (
                            <div className='block-btn down' onClick={onMoveContentDown}>
                                <img src={MoveDownIcon} alt="" />
                            </div>
                        )
                        :
                        (
                            <div className='block-btn down fade'>
                                <img src={MoveDownIcon} alt="" />
                            </div>
                        )
                    }
                    {
                        dataLength > 1 ? (
                            <div className='block-btn' onClick={onRemoveContent}>
                                <img src={TrashIcon} alt="" />
                            </div>
                        )
                        :
                        (
                            <div className='block-btn fade'>
                                <img src={TrashIcon} alt="" />
                            </div>
                        )
                    }
                 </div>   
            ))}
        </div>
    )
}

export default BlockContentBar;
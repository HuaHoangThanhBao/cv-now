import React from 'react';
import TrashIcon from './../../../dist/trash.svg';
import MoveUpIcon from './../../../dist/move-up.svg';
import MoveDownIcon from './../../../dist/move-down.svg';
import './BlockBar.scss';

const BlockBar = ({isVisible, onCreateNewBlock, onRemoveBlock, moveBlockUp, moveBlockDown}) => {
    return(
        <div className='block-bar'>
            {(isVisible && (
                <div className='block-bar-container'>
                    <div className='block-btn' onClick={moveBlockUp}>
                        <img src={MoveUpIcon} alt="" />
                    </div>
                    <div className='block-btn' onClick={moveBlockDown}>
                        <img src={MoveDownIcon} alt="" />
                    </div>
                    <div className='block-btn' onClick={onRemoveBlock}>
                        <img src={TrashIcon} alt="" />
                    </div>
                 </div>   
            ))}
        </div>
    )
}

export default BlockBar;
import React from 'react';
import TrashIcon from './../../../dist/trash.svg';
import AddIcon from './../../../dist/add.svg';
import './BlockBar.scss';

const BlockBar = ({isVisible, onCreateNewBlock, onRemoveBlock}) => {
    return(
        <div className='block-bar'>
            {(isVisible && (
                <div className='block-bar-container'>
                    {/* <div className='block-btn add' onClick={onCreateNewContent}>
                        <img src={AddIcon} alt="" />
                    </div> */}
                    <div className='block-btn' onClick={onRemoveBlock}>
                        <img src={TrashIcon} alt="" />
                    </div>
                 </div>   
            ))}
        </div>
    )
}

export default BlockBar;
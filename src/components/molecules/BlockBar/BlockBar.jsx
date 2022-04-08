import React, {useState, useEffect, useRef} from 'react';
import TrashIcon from './../../../dist/trash.svg';
import MoveUpIcon from './../../../dist/move-up.svg';
import MoveDownIcon from './../../../dist/move-down.svg';
import './BlockBar.scss';

const BlockBar = ({childIndex, isVisible, handleBlockBar, handleOutsideClick, onRemoveBlock, moveBlockUp, moveBlockDown}) => {
    const ref = useRef();
    const [visible, setVisible] = useState(true)
    
    const handleBlockBarClick = (status) => {
        setVisible(status)
    }

    handleOutsideClick(ref, handleBlockBarClick)

    useEffect(() => {
        return () => {
            if(visible){
                handleBlockBar(true)
            }
        }
    }, [visible])

    return(
        <div className='block-bar' ref={ref}>
            {(isVisible && (
                <div className='block-bar-container'>
                    {
                        (
                            childIndex != 0 
                            ?
                            <div className='block-btn' onClick={moveBlockUp}>
                                <img src={MoveUpIcon} alt="" />
                            </div>
                            :  
                            <div className='block-btn disable'>
                                <img src={MoveUpIcon} alt="" />
                            </div> 
                        )
                    }
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
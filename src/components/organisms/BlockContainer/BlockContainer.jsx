import React, { useState, useRef, useEffect } from 'react';
import BlockBar from '../../molecules/BlockBar/BlockBar';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockContentBar from '../../molecules/BlockContentBar/BlockContentBar';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import AddIcon from './../../../dist/add.svg';
import TrashIcon from './../../../dist/trash.svg';
import AlertIcon from './../../../dist/exclamation.svg';
import MoveUpIcon from './../../../dist/move-up.svg';
import MoveDownIcon from './../../../dist/move-down.svg';

const BlockContainer = (props) => {
    const {
        pageIndex, 
        childIndex, 
        childId, 
        handleOutsideClick, 
        createNewContent, 
        removeContent, 
        removeBlock, 
        parentRef, 
        moveBlockUp, 
        moveBlockDown,
        isVisible,
        setIsVisible,
        title,
        data,
        setMyBlockVisible,
        myBlockVisible,
        getBlockContent,
        blockType,
        updateFieldData,
        blockHeaderStatus,
        setBlockHeaderStatus
    } = props;

    const myRef = useRef();
    const contentRef = useRef();

    const handleVisible = (status) => {
        setIsVisible(status)
    }

    handleOutsideClick(contentRef, handleVisible);
    handleOutsideClick(myRef, setMyBlockVisible);

    const handleBlockContentStatus = (status) => {
        setMyBlockVisible(!status)
    }

    return(
        <div className="block block-education" ref={myRef}>
           <BlockHeader 
                title={title}
                handleBlockHeader={setBlockHeaderStatus}
                handleOutsideClick={handleOutsideClick}
                updateFieldData={updateFieldData}
                pageIndex={pageIndex}
                childIndex={childIndex}
            >
                <BlockBar 
                    childIndex={childIndex}
                    pageIndex={pageIndex}
                    isVisible={blockHeaderStatus}
                    onRemoveBlock={() => removeBlock(pageIndex, childIndex)}
                    moveBlockUp={() => {
                        setBlockHeaderStatus(false)
                        moveBlockUp(pageIndex, childIndex, contentRef, parentRef)
                    }}
                    moveBlockDown={() => {
                        setBlockHeaderStatus(false)
                        moveBlockDown(pageIndex, childIndex, contentRef, parentRef)
                    }}
                />
            </BlockHeader>
           <div className="block-space">
                <hr />
           </div>
           <div ref={contentRef}>
                {data && data.map((item, index) => (
                    <BlockContent 
                        isVisible={isVisible} 
                        key={item[0].title + index} 
                        onCreateNewContent={() => createNewContent(pageIndex, childId, childIndex, index)}
                        onRemoveContent={() => removeContent(pageIndex, childId, childIndex, index)}
                        onClick={() => handleBlockContentStatus(true)}
                    >
                        {getBlockContent(blockType, index)}
                    </BlockContent>
                ))}
           </div>
        </div>
    )
}

export default BlockContainer;
import React, { useState, useRef, useEffect } from 'react';
import BlockBar from '../../molecules/BlockBar/BlockBar';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockContentBar from '../../molecules/BlockContentBar/BlockContentBar';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';

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
        setBlockHeaderVisible,
        setBlockBarVisible,
        setMyBlockVisible,
        myBlockVisible,
        setBlockContentOnClick,
        blockContentOnClick,
        getBlockContent,
        blockType,
        updateFieldData
    } = props;

    const [contentList, setContentList] = useState([0]);

    const myRef = useRef();
    const contentRef = useRef();

    const handleVisible = (status) => {
        setIsVisible(status)
    }

    handleOutsideClick(contentRef, handleVisible);
    handleOutsideClick(myRef, setMyBlockVisible);

    const handleBlockContentStatus = (status) => {
        setBlockContentOnClick(status)
        setMyBlockVisible(!status)
    }

    const handleBlockStatus = (status) => {
        setBlockContentOnClick(!status)
    }

    return(
        <div className="block block-education" ref={myRef}>
           <BlockHeader 
                title={title}
                onClick={() => handleBlockStatus(true)}
                handleOutsideClick={handleOutsideClick}
                handleBlockHeader={setBlockHeaderVisible}
                updateFieldData={updateFieldData}
                pageIndex={pageIndex}
                childIndex={childIndex}
            />
           <div className="block-space">
                <hr />
           </div>
           <div ref={contentRef}>
                {data && data.map((item, index) => (
                    <BlockContent 
                        isVisible={isVisible} 
                        key={contentList[index]} 
                        onCreateNewContent={() => createNewContent(pageIndex, childIndex, index, contentList, setContentList)}
                        onClick={() => handleBlockContentStatus(true)}
                    >
                        {getBlockContent(blockType, index)}
                        <BlockContentBar 
                            isVisible={blockContentOnClick} 
                            onCreateNewContent={() => createNewContent(pageIndex, childIndex, index, contentList, setContentList)}
                            onRemoveContent={() => removeContent(index, contentList, setContentList)}
                        />
                    </BlockContent>
                ))}
           </div>
           <BlockBar 
                childIndex={childIndex}
                pageIndex={pageIndex}
                isVisible={myBlockVisible}
                handleOutsideClick={handleOutsideClick}
                handleBlockBar={setBlockBarVisible}
                onRemoveBlock={() => removeBlock(pageIndex, childIndex)}
                moveBlockUp={() => {
                    setMyBlockVisible(false)
                    moveBlockUp(pageIndex, childIndex, contentRef, parentRef)
                }}
                moveBlockDown={() => {
                    setMyBlockVisible(false)
                    moveBlockDown(pageIndex, childIndex, contentRef, parentRef)
                }}
           />
        </div>
    )
}

export default BlockContainer;
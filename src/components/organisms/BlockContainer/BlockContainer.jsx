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
        checkToMoveContent, 
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
            />
           <div className="block-space">
                <hr />
           </div>
           <div ref={contentRef}>
                {contentList && contentList.map((item, index) => (
                    <BlockContent 
                        isVisible={isVisible} 
                        key={item} 
                        onCreateNewContent={() => createNewContent(index, contentList, setContentList)}
                        onClick={() => handleBlockContentStatus(true)}
                    >
                        {props.children}
                        <BlockContentBar 
                            isVisible={blockContentOnClick} 
                            onCreateNewContent={() => createNewContent(index, contentList, setContentList)}
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
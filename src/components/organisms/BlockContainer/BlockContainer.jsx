import React, { useRef } from 'react';
import BlockBar from '../../molecules/BlockBar/BlockBar';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockContentBar from '../../molecules/BlockContentBar/BlockContentBar';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';

const BlockContainer = (props) => {
    const {
        pageIndex, 
        columnIndex, 
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
        setBlockHeaderStatus,
        moveContentDown,
        moveContentUp,
        updateFieldHeight,
        getChildSpecialdIndex
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
        <div className={"block block-education" + (getChildSpecialdIndex(childId) % 2 == 0 ? " odd": " even")} ref={myRef}>
           <BlockHeader 
                title={title}
                handleBlockHeader={setBlockHeaderStatus}
                handleOutsideClick={handleOutsideClick}
                updateFieldData={updateFieldData}
                pageIndex={pageIndex}
                columnIndex={columnIndex}
                childIndex={childIndex}
                updateFieldHeight={updateFieldHeight}
            >
                <BlockBar 
                    childIndex={childIndex}
                    pageIndex={pageIndex}
                    isVisible={blockHeaderStatus}
                    onRemoveBlock={() => {
                        setBlockHeaderStatus(false)
                        removeBlock(pageIndex, columnIndex, childIndex, setBlockHeaderStatus)
                    }}
                    moveBlockUp={() => {
                        setBlockHeaderStatus(false)
                        moveBlockUp(pageIndex, columnIndex, childIndex, contentRef, parentRef)
                    }}
                    moveBlockDown={() => {
                        setBlockHeaderStatus(false)
                        moveBlockDown(pageIndex, columnIndex, childIndex, contentRef, parentRef)
                    }}
                />
            </BlockHeader>
           <div className='block-content-wrapper' ref={contentRef}>
                {data && data.map((item, index) => (
                    <BlockContent 
                        isVisible={isVisible} 
                        key={pageIndex + childIndex + columnIndex + index} 
                        onClick={() => handleBlockContentStatus(true)}
                        onCreateNewContent={() => createNewContent(pageIndex, columnIndex, childId, childIndex, index)}
                    >
                        {getBlockContent(blockType, index)}
                        
                        <BlockContentBar 
                            isVisible={isVisible}
                            dataLength={data.length}
                            currentIndex={index}
                            onCreateNewContent={() => createNewContent(pageIndex, columnIndex, childId, childIndex, index)}
                            onRemoveContent={() => removeContent(pageIndex, columnIndex, childId, childIndex, index)}
                            onMoveContentDown={() => moveContentDown(pageIndex, columnIndex, childId, childIndex, index)}
                            onMoveContentUp={() => moveContentUp(pageIndex, columnIndex, childId, childIndex, index)}
                        />
                    </BlockContent>
                ))}
           </div>
        </div>
    )
}

export default BlockContainer;
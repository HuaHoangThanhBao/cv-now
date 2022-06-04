import React, { useRef } from 'react';
import { template_type } from '../../../constants/Template';
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
        isDisplayWhenHasInformation,
        setIsDisplayWhenHasInformation,
        title,
        data,
        setMyBlockVisible,
        getBlockContent,
        blockType,
        updateFieldData,
        blockHeaderStatus,
        setBlockHeaderStatus,
        moveContentDown,
        moveContentUp,
        updateFieldHeight,
        getChildSpecialdIndex,
        currentTemplateType,
        currentBlockSelectedIndex, 
        setCurrentBlockSelectedIndex
    } = props;

    const myRef = useRef();
    const contentRef = useRef();

    const handleDisplayWhenHasInformation = (status) => {
        setIsDisplayWhenHasInformation(status)
    }

    handleOutsideClick(contentRef, handleDisplayWhenHasInformation);
    handleOutsideClick(myRef, setMyBlockVisible);

    const handleBlockContentStatus = (status) => {
        setMyBlockVisible(!status)
    }

    return(
        <div 
            className={"block" + (getChildSpecialdIndex(childId) % 2 === 0 ? " odd": " even")} 
            ref={myRef}
        >
            <div className="block-wrapper">
                <BlockHeader 
                    title={title}
                    handleBlockHeader={setBlockHeaderStatus}
                    handleOutsideClick={handleOutsideClick}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    updateFieldHeight={updateFieldHeight}
                    currentTemplateType={currentTemplateType}
                >
                    <BlockBar 
                        childIndex={childIndex}
                        pageIndex={pageIndex}
                        isDisplayWhenHasInformation={blockHeaderStatus}
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

                {(currentTemplateType === template_type.functional || 
                currentTemplateType === template_type.modern) &&
                (
                    <div className="block-space">
                        <hr />
                    </div>
                )}

                <div 
                    className='block-content-wrapper' 
                    ref={contentRef}
                >
                    {data && data.map((item, index) => (
                        <BlockContent 
                            isDisplayWhenHasInformation={
                                isDisplayWhenHasInformation && index === currentBlockSelectedIndex 
                                ? isDisplayWhenHasInformation
                                : false
                            } 
                            key={pageIndex + '/'+ columnIndex + '/' + childIndex + '/' + index} 
                            onFocus={() => setCurrentBlockSelectedIndex(index)}
                            onClick={() => handleBlockContentStatus(true)}
                            onCreateNewContent={() => {
                                setCurrentBlockSelectedIndex(index + 1)
                                createNewContent(pageIndex, columnIndex, childId, childIndex, index)
                            }}
                        >
                            {getBlockContent(blockType, index)}

                            <BlockContentBar 
                                isDisplayWhenHasInformation={
                                    isDisplayWhenHasInformation && index === currentBlockSelectedIndex 
                                    ? isDisplayWhenHasInformation
                                    : false
                                }
                                dataLength={data.length}
                                currentIndex={index}
                                onCreateNewContent={() => {
                                    setCurrentBlockSelectedIndex(index + 1)
                                    createNewContent(pageIndex, columnIndex, childId, childIndex, index)
                                }}
                                onRemoveContent={() => removeContent(pageIndex, columnIndex, childId, childIndex, index)}
                                onMoveContentDown={() => {
                                    if(data.length > 1){
                                        setCurrentBlockSelectedIndex(index + 1)
                                    }
                                    moveContentDown(pageIndex, columnIndex, childId, childIndex, index)
                                }}
                                onMoveContentUp={() => {
                                    if(data.length > 0){
                                        setCurrentBlockSelectedIndex(index - 1)
                                    }
                                    moveContentUp(pageIndex, columnIndex, childId, childIndex, index)
                                }}
                            />
                        </BlockContent>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlockContainer;
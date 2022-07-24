import React, { useRef } from 'react';
import { template_type } from '../../../constants/Template';
import BlockBar from '../../molecules/BlockBar/BlockBar';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockContentBar from '../../molecules/BlockContentBar/BlockContentBar';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';

const BlockContainer = (props) => {
    const {
        title,
        placeHolder,
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
        currentBlockSelected,
        setCurrentBlockSelected,
        resetCurrentBulletContentDetailSelected,
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

    const {_currentBlockSelectedIndex} = currentBlockSelected
    return(
        <div 
            className={"block" + (getChildSpecialdIndex(childId) % 2 === 0 ? " odd": " even")} 
            ref={myRef}
        >
            <div className="block-wrapper">
                <BlockHeader 
                    title={title}
                    placeHolder={placeHolder}
                    childId={childId}
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
                            resetCurrentBulletContentDetailSelected()
                            removeBlock(pageIndex, columnIndex, childIndex, setBlockHeaderStatus)
                        }}
                        moveBlockUp={() => {
                            setBlockHeaderStatus(false)
                            resetCurrentBulletContentDetailSelected()
                            moveBlockUp(pageIndex, columnIndex, childIndex, contentRef, parentRef)
                        }}
                        moveBlockDown={() => {
                            setBlockHeaderStatus(false)
                            resetCurrentBulletContentDetailSelected()
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
                                isDisplayWhenHasInformation && index === _currentBlockSelectedIndex 
                                ? isDisplayWhenHasInformation
                                : false
                            } 
                            key={pageIndex + '/'+ columnIndex + '/' + childIndex + '/' + index} 
                            onFocus={() => {
                                setCurrentBlockSelected({
                                    _pageIndex: pageIndex,
                                    _columnIndex: columnIndex,
                                    _childIndex: childIndex,
                                    _currentBlockSelectedIndex: index
                                })
                            }}
                            onClick={() => handleBlockContentStatus(true)}
                            onCreateNewContent={() => {
                                resetCurrentBulletContentDetailSelected()
                                setCurrentBlockSelected({
                                    _pageIndex: pageIndex,
                                    _columnIndex: columnIndex,
                                    _childIndex: childIndex,
                                    _currentBlockSelectedIndex: index + 1
                                })
                                createNewContent(pageIndex, columnIndex, childId, childIndex, index)
                            }}
                        >
                            {getBlockContent(blockType, index)}

                            <BlockContentBar 
                                isDisplayWhenHasInformation={
                                    isDisplayWhenHasInformation && index === _currentBlockSelectedIndex 
                                    ? isDisplayWhenHasInformation
                                    : false
                                }
                                dataLength={data.length}
                                currentIndex={index}
                                onCreateNewContent={() => {
                                    resetCurrentBulletContentDetailSelected()
                                    setCurrentBlockSelected({
                                        _pageIndex: pageIndex,
                                        _columnIndex: columnIndex,
                                        _childIndex: childIndex,
                                        _currentBlockSelectedIndex: index + 1
                                    })
                                    createNewContent(pageIndex, columnIndex, childId, childIndex, index)
                                }}
                                onRemoveContent={() => {
                                    resetCurrentBulletContentDetailSelected()
                                    removeContent(pageIndex, columnIndex, childId, childIndex, index)
                                }}
                                onMoveContentDown={() => {
                                    if(data.length > 1){
                                        setCurrentBlockSelected({
                                            _pageIndex: pageIndex,
                                            _columnIndex: columnIndex,
                                            _childIndex: childIndex,
                                            _currentBlockSelectedIndex: index + 1
                                        })
                                    }
                                    resetCurrentBulletContentDetailSelected()
                                    moveContentDown(pageIndex, columnIndex, childId, childIndex, index)
                                }}
                                onMoveContentUp={() => {
                                    if(data.length > 0){
                                        setCurrentBlockSelected({
                                            _pageIndex: pageIndex,
                                            _columnIndex: columnIndex,
                                            _childIndex: childIndex,
                                            _currentBlockSelectedIndex: index - 1
                                        })
                                    }
                                    resetCurrentBulletContentDetailSelected()
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
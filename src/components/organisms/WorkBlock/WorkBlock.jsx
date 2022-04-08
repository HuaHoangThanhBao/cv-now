import React, { useState, useRef, useEffect } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockBar from '../../molecules/BlockBar/BlockBar';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockContentBar from '../../molecules/BlockContentBar/BlockContentBar';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import BulletIcon from './../../../dist/bullet.svg';
import './../../../styles/block.scss';

const WorkBlock = (props) => {
    const {
        pageIndex, 
        childIndex, 
        childId, 
        handleOutsideClick, 
        checkToMoveContent, 
        onInputFieldChange, 
        createNewContent, 
        removeContent, 
        removeBlock, 
        parentRef, 
        moveBlockUp, 
        moveBlockDown
    } = props;

    const [isVisible, setIsVisible] = useState(false);
    const [contentList, setContentList] = useState([0]);
    const [blockContentOnClick, setBlockContentOnClick] = useState(false);

    const [blockHeaderVisible, setBlockHeaderVisible] = useState(false)
    const [blockBarVisible, setBlockBarVisible] = useState(false)
    const [myBlockVisible, setMyBlockVisible] = useState(false)

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

    useEffect(() => {
        return() => {
            if(isVisible) {
                console.log('yess')
                setBlockContentOnClick(false)
                checkToMoveContent(pageIndex)
            }
        }
    }, [isVisible])

    useEffect(() => {
        return () => {
            if(myBlockVisible && (!blockHeaderVisible && !blockBarVisible)){
                setMyBlockVisible(false)
            }
        }
    }, [blockHeaderVisible, blockBarVisible, myBlockVisible])

    return(
        <div className="block block-education" ref={myRef}>
           <BlockHeader 
                title="WORK EXPERIENCE"
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
                          <InputField
                              externalClass="block-content-title"
                              type="text"
                              visible={true}
                              placeHolder="Title/Position"
                              onChange={onInputFieldChange}
                          />
                          <InputField
                              externalClass="block-content-desc"
                              type="text"
                              visible={isVisible}
                              placeHolder="Workplace/Company"
                              onChange={onInputFieldChange}
                          />
                          <DateInput 
                             isVisible={isVisible}
                             onInputFieldChange={onInputFieldChange}
                         />
                          <InputField
                              externalClass="block-content-optional dashed"
                              type="text"
                              placeHolder="City, Country (optional)"
                              visible={isVisible}
                              onChange={onInputFieldChange}
                          />
                          <InputField
                              externalClass="block-content-optional dashed"
                              type="text"
                              placeHolder="Company Description (optional, fill when the company is not well known)"
                              visible={isVisible}
                              onChange={onInputFieldChange}
                          />
                          <InputField
                              externalClass="block-content-detail"
                              type="text"
                              placeHolder="Achievements/Tasks"
                              visible={isVisible}
                              onChange={onInputFieldChange}
                          />
                          <InputField
                              externalClass="block-content-bullet dashed"
                              type="text"
                              icon={BulletIcon}
                              placeHolder="Accomplishment/Responsibility/Task"
                              visible={isVisible}
                              onChange={onInputFieldChange}
                          />
                          <div className='block-content-contact'>
                              <InputField
                                  externalClass="block-content-detail"
                                  type="text"
                                  placeHolder="Contact:"
                                  visible={isVisible}
                                  onChange={onInputFieldChange}
                              />
                              <div className='block-content-contact-group'>
                                  <InputField
                                      externalClass="block-content-bullet dashed"
                                      type="text"
                                      placeHolder="Contact Person"
                                      visible={isVisible}
                                      onChange={onInputFieldChange}
                                  />
                                  <InputField
                                      externalClass="block-content-bullet dashed"
                                      type="text"
                                      placeHolder="Contact Info"
                                      visible={isVisible}
                                      onChange={onInputFieldChange}
                                  />
                              </div>
                          </div>
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
                isVisible={myBlockVisible}
                handleOutsideClick={handleOutsideClick}
                handleBlockBar={setBlockBarVisible}
                onRemoveBlock={() => removeBlock(pageIndex, childIndex)}
                moveBlockUp={() => moveBlockUp(pageIndex, childIndex, contentRef, parentRef)}
                moveBlockDown={() => moveBlockDown(pageIndex, childIndex, contentRef, parentRef)}
           />
        </div>
    )
}

export default WorkBlock;
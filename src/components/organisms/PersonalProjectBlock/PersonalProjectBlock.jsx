import React, { useState, useRef,useEffect } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockBar from '../../molecules/BlockBar/BlockBar';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockContentBar from '../../molecules/BlockContentBar/BlockContentBar';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import './../../../styles/block.scss';

const PersonalProjectBlock = ({pageIndex, childIndex, childId, handleOutsideClick, checkToMoveContent, onInputFieldChange, createNewContent, removeContent, removeBlock, parentRef, moveBlockUp, moveBlockDown}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentList, setContentList] = useState([0]);
    const [blockContentOnClick, setBlockContentOnClick] = useState(false);
    const [blockOnClick, setBlockOnClick] = useState(false);
    const ref = useRef();

    const handleVisible = (status) => {
        setIsVisible(status)
    }

    handleOutsideClick(ref, handleVisible);

    const onSetBlockContent = (status) => {
        setBlockContentOnClick(status)
        setBlockOnClick(!status)
    }

    const onSetBlock = (status) => {
        setBlockContentOnClick(!status)
        setBlockOnClick(status)
    }

    useEffect(() => {
        return() => {
            if(isVisible) {
                console.log('yess')
                setBlockContentOnClick(false)
                setBlockOnClick(false)
                checkToMoveContent(pageIndex)
            }
        }
    }, [isVisible])

    return(
        <div className="block block-education">
           <BlockHeader 
                title="PERSONAL PROJECTS"
                onClick={() => onSetBlock(true)}
            />
           <div className="block-space">
                <hr />
           </div>
           <div ref={ref}>
                {contentList && contentList.map((item, index) => (
                    <BlockContent 
                     isVisible={isVisible} 
                     key={item} 
                     onCreateNewContent={() => createNewContent(index, contentList, setContentList)}
                     onClick={() => onSetBlockContent(true)}
                     >
                         <InputField
                             externalClass="block-content-title"
                             type="text"
                             visible={true}
                             placeHolder="Project Name"
                             onChange={onInputFieldChange}
                         />
                         <DateInput 
                            isVisible={isVisible}
                            onInputFieldChange={onInputFieldChange}
                        />
                         <InputField
                             externalClass="block-content-detail dashed"
                             type="text"
                             placeHolder="Description of Achievements"
                             visible={isVisible}
                             onChange={onInputFieldChange}
                         />
                         <BlockContentBar 
                             isVisible={blockContentOnClick} 
                             onCreateNewContent={() => createNewContent(index, contentList, setContentList)}
                             onRemoveContent={() => removeContent(index, contentList, setContentList)}
                         />
                     </BlockContent>
                ))}
           </div>
           <BlockBar 
                isVisible={blockOnClick}
                onRemoveBlock={() => removeBlock(pageIndex, childIndex)}
                moveBlockUp={() => moveBlockUp(pageIndex, childIndex, ref, parentRef)}
                moveBlockDown={() => moveBlockDown(pageIndex, childIndex, ref, parentRef)}
           />
        </div>
    )
}

export default PersonalProjectBlock;
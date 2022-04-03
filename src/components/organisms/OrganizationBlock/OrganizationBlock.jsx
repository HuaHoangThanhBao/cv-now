import React, { useState, useRef, useEffect } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockBar from '../../molecules/BlockBar/BlockBar';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockContentBar from '../../molecules/BlockContentBar/BlockContentBar';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import './../../../styles/block.scss';

const OrganizationBlock = ({pageIndex, childIndex, childId, handleOutsideClick, checkToMoveContent, onInputFieldChange, createNewContent, removeContent, removeBlock}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentList, setContentList] = useState([0]);
    const [blockContentOnClick, setBlockContentOnClick] = useState(false);
    const [blockOnClick, setBlockOnClick] = useState(false);
    const [count, setCount] = useState(0);
    const ref = useRef();

    const handleVisible = (status) => {
        setCount(count => count + 1)
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
        if(!isVisible && count > 1) {
            console.log('yess')
            setBlockContentOnClick(false)
            setBlockOnClick(false)
            setCount(0)
            checkToMoveContent(pageIndex)
        }
    }, [isVisible])
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader 
                title="ORGANIZATIONS"
                onClick={() => onSetBlock(true)}
            />
           <div className="block-space">
                <hr />
           </div>
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
                        placeHolder="Organization Name"
                    />
                    <DateInput 
                        isVisible={isVisible}
                        onInputFieldChange={onInputFieldChange}
                    />
                    <InputField
                        externalClass="block-content-detail dashed"
                        type="text"
                        placeHolder="Role (optional)"
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
           <BlockBar 
                isVisible={blockOnClick}
                onRemoveBlock={() => removeBlock(pageIndex, childIndex)}
           />
        </div>
    )
}

export default OrganizationBlock;
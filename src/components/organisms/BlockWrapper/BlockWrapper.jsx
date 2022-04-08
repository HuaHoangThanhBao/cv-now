import React, {useEffect, useState} from 'react';
import InputField from '../../atoms/InputField/InputField';
import DateInput from '../../molecules/DateInput/DateInput';
import BlockContainer from '../BlockContainer/BlockContainer';
import BulletIcon from './../../../dist/bullet.svg';

const BlockWrapper = (props) => {
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
        moveBlockDown,
        title,
        blockType,
        data,
    } = props;

    const [isVisible, setIsVisible] = useState(false);
    const [blockHeaderVisible, setBlockHeaderVisible] = useState(false)
    const [blockBarVisible, setBlockBarVisible] = useState(false)
    const [myBlockVisible, setMyBlockVisible] = useState(false)
    const [blockContentOnClick, setBlockContentOnClick] = useState(false);

    const getBlockContent = (_blockType) => {
        switch(_blockType){
            case 1:
                return educationContenType()
            case 2:
                return workExperienceType()
            case 3:
                return personalProjectType()
        }
    }

    const educationContenType = () => {
        return(
            <div>
                <InputField
                     externalClass="block-content-title"
                     type="text"
                     placeHolder={data.title}
                     visible={true}
                     onChange={onInputFieldChange}
                 />
                 <InputField
                     externalClass="block-content-desc"
                     type="text"
                     placeHolder={data.desc}
                     visible={isVisible}
                     onChange={onInputFieldChange}
                 />
                 <DateInput 
                     isVisible={isVisible}
                     onInputFieldChange={onInputFieldChange}
                 />
                 <InputField
                     externalClass="block-content-optional dashed"
                     type="text"
                     placeHolder={data.optional_dashed}
                     visible={isVisible}
                     onChange={onInputFieldChange}
                 />
                 <InputField
                     externalClass="block-content-detail"
                     type="text"
                     placeHolder={data.content_detail}
                     visible={isVisible}
                     onChange={onInputFieldChange}
                 />
                 <InputField
                     externalClass="block-content-bullet dashed"
                     type="text"
                     placeHolder={data.content_bullet}
                     visible={isVisible}
                     onChange={onInputFieldChange}
                 />
            </div>
        )
    }

    const workExperienceType = () => {
        return(
            <div>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    placeHolder={data.title}
                    onChange={onInputFieldChange}
                />
                <InputField
                    externalClass="block-content-desc"
                    type="text"
                    visible={isVisible}
                    placeHolder={data.desc}
                    onChange={onInputFieldChange}
                />
                <DateInput 
                   isVisible={isVisible}
                   onInputFieldChange={onInputFieldChange}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    placeHolder={data.optional_dashed}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    placeHolder={data.optional_dashed2}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                />
                <InputField
                    externalClass="block-content-detail"
                    type="text"
                    placeHolder={data.content_detail}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                />
                <InputField
                    externalClass="block-content-bullet dashed"
                    type="text"
                    icon={BulletIcon}
                    placeHolder={data.content_bullet}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                />
                <div className='block-content-contact'>
                    <InputField
                        externalClass="block-content-detail"
                        type="text"
                        placeHolder={data.contact}
                        visible={isVisible}
                        onChange={onInputFieldChange}
                    />
                    <div className='block-content-contact-group'>
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            placeHolder={data.contact_person}
                            visible={isVisible}
                            onChange={onInputFieldChange}
                        />
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            placeHolder={data.contact_info}
                            visible={isVisible}
                            onChange={onInputFieldChange}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const personalProjectType = () => {
        return(
            <div>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    placeHolder={data.title}
                />
                <DateInput 
                    visible={isVisible}
                    onInputFieldChange={onInputFieldChange}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    placeHolder={data.content_detail}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                />
            </div>
        )
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

    return (
        <BlockContainer 
            pageIndex={pageIndex}
            childIndex={childIndex}
            childId={childId}
            handleOutsideClick={handleOutsideClick}
            checkToMoveContent={checkToMoveContent}
            onInputFieldChange={onInputFieldChange}
            createNewContent={createNewContent}
            removeContent={removeContent}
            removeBlock={removeBlock}
            parentRef={parentRef}
            moveBlockUp={moveBlockUp}
            moveBlockDown={moveBlockDown}
            title={title}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            setBlockHeaderVisible={setBlockHeaderVisible}
            setBlockBarVisible={setBlockBarVisible}
            setMyBlockVisible={setMyBlockVisible}
            myBlockVisible={myBlockVisible}
            setBlockContentOnClick={setBlockContentOnClick}
            blockContentOnClick={blockContentOnClick}
        >
            {getBlockContent(blockType)}
        </BlockContainer>    
    )
}

export default BlockWrapper
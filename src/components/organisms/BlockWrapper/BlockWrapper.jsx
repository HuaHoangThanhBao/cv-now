import React, {useEffect, useState} from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
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
        updateFieldData
    } = props;

    const [isVisible, setIsVisible] = useState(false);
    const [myBlockVisible, setMyBlockVisible] = useState(false)
    const [blockHeaderStatus, setBlockHeaderStatus] = useState(false)

    const getBlockContent = (_blockType, index) => {
        switch(_blockType){
            case 1:
                return educationContenType(index)
            case 2:
                return workExperienceType(index)
            case 3:
                return personalProjectType(index)
            case 4:
                return conferenceType(index)    
        }
    }

    const getTitle = (index, _blockType) => {
        let title = ''
        data[index].find(row => {
            for(const [key, item]  of Object.entries(row)){
                if(key === _blockType){
                    title = item;
                    break;
                }
            }
        });
        return title
    }

    const getStatus = (index, _blockType) => {
        let status;
        data[index].find(row => {
            for(const [key, item]  of Object.entries(row)){
                if(key === _blockType){
                    status = row.status
                    break;
                }
            }
        });
        return status
    }

    const educationContenType = (index) => {
        return(
            <div>
                <InputField
                     externalClass="block-content-title"
                     type="text"
                     inputBlockType={InputFieldType.title}
                     placeHolder={getTitle(index, InputFieldType.title)}
                     visible={true}
                     isVisible={getStatus(index,InputFieldType.title)}
                     onChange={onInputFieldChange}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                 />
                 <InputField
                     externalClass="block-content-desc"
                     type="text"
                     inputBlockType={InputFieldType.desc}
                     placeHolder={getTitle(index, InputFieldType.desc)}
                     visible={isVisible}
                     isVisible={getStatus(index,InputFieldType.desc)}
                     onChange={onInputFieldChange}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                 />
                 <DateInput 
                     isVisible={isVisible}
                     onInputFieldChange={onInputFieldChange}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                     getTitle={getTitle}
                 />
                 <InputField
                     externalClass="block-content-optional dashed"
                     type="text"
                     inputBlockType={InputFieldType.optional_dashed}
                     placeHolder={getTitle(index, InputFieldType.optional_dashed)}
                     visible={isVisible}
                     isVisible={getStatus(index,InputFieldType.optional_dashed)}
                     onChange={onInputFieldChange}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                 />
                 <InputField
                     externalClass="block-content-detail"
                     type="text"
                     inputBlockType={InputFieldType.content_detail}
                     placeHolder={getTitle(index, InputFieldType.content_detail)}
                     visible={isVisible}
                     isVisible={getStatus(index,InputFieldType.content_detail)}
                     onChange={onInputFieldChange}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                 />
                 <InputField
                     externalClass="block-content-bullet dashed"
                     type="text"
                     inputBlockType={InputFieldType.content_bullet}
                     placeHolder={getTitle(index, InputFieldType.content_bullet)}
                     visible={isVisible}
                     isVisible={getStatus(index,InputFieldType.content_bullet)}
                     onChange={onInputFieldChange}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                 />
            </div>
        )
    }

    const workExperienceType = (index) => {
        return(
            <div>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isVisible={getStatus(index,InputFieldType.title)}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <InputField
                    externalClass="block-content-desc"
                    type="text"
                    visible={isVisible}
                    inputBlockType={InputFieldType.desc}
                    placeHolder={getTitle(index, InputFieldType.desc)}
                    isVisible={getStatus(index,InputFieldType.desc)}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <DateInput 
                    isVisible={isVisible}
                    onInputFieldChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    getTitle={getTitle}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed)}
                    isVisible={getStatus(index,InputFieldType.optional_dashed)}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed2}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed2)}
                    isVisible={getStatus(index,InputFieldType.optional_dashed2)}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <InputField
                    externalClass="block-content-detail"
                    type="text"
                    inputBlockType={InputFieldType.content_detail}
                    placeHolder={getTitle(index, InputFieldType.content_detail)}
                    isVisible={getStatus(index,InputFieldType.content_detail)}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <InputField
                    externalClass="block-content-bullet dashed"
                    type="text"
                    icon={BulletIcon}
                    inputBlockType={InputFieldType.content_bullet}
                    placeHolder={getTitle(index, InputFieldType.content_bullet)}
                    isVisible={getStatus(index,InputFieldType.content_bullet)}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <div className='block-content-contact'>
                    <InputField
                        externalClass="block-content-detail"
                        type="text"
                        inputBlockType={InputFieldType.contact}
                        placeHolder={getTitle(index, InputFieldType.contact)}
                        isVisible={getStatus(index,InputFieldType.contact)}
                        visible={isVisible}
                        onChange={onInputFieldChange}
                        updateFieldData={updateFieldData}
                        pageIndex={pageIndex}
                        childIndex={childIndex}
                        currentIndex={index}
                    />
                    <div className='block-content-contact-group'>
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            inputBlockType={InputFieldType.contact_person}
                            placeHolder={getTitle(index, InputFieldType.contact_person)}
                            isVisible={getStatus(index,InputFieldType.contact_person)}
                            visible={isVisible}
                            onChange={onInputFieldChange}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            childIndex={childIndex}
                            currentIndex={index}
                        />
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            inputBlockType={InputFieldType.contact_info}
                            placeHolder={getTitle(index, InputFieldType.contact_info)}
                            isVisible={getStatus(index,InputFieldType.contact_info)}
                            visible={isVisible}
                            onChange={onInputFieldChange}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            childIndex={childIndex}
                            currentIndex={index}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const personalProjectType = (index) => {
        return(
            <div>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isVisible={getStatus(index,InputFieldType.title)}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <DateInput 
                    isVisible={isVisible}
                    onInputFieldChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    getTitle={getTitle}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    inputBlockType={InputFieldType.content_detail_dashed}
                    placeHolder={getTitle(index, InputFieldType.content_detail_dashed)}
                    isVisible={getStatus(index,InputFieldType.content_detail_dashed)}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
            </div>
        )
    }

    const conferenceType = (index) => {
        return(
            <div>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isVisible={getStatus(index,InputFieldType.title)}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <DateInput 
                    isVisible={isVisible}
                    onInputFieldChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    getTitle={getTitle}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    inputBlockType={InputFieldType.content_detail_dashed}
                    placeHolder={getTitle(index, InputFieldType.content_detail_dashed)}
                    isVisible={getStatus(index,InputFieldType.content_detail_dashed)}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
                <InputField
                    externalClass="block-content-detail"
                    type="text"
                    inputBlockType={InputFieldType.content_detail}
                    placeHolder={getTitle(index, InputFieldType.content_detail)}
                    isVisible={getStatus(index,InputFieldType.content_detail)}
                    visible={isVisible}
                    onChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                />
            </div>
        )
    }

    useEffect(() => {
        return() => {
            if(isVisible) {
                console.log('yess')
                checkToMoveContent(pageIndex)
            }
        }
    }, [isVisible])

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
            setMyBlockVisible={setMyBlockVisible}
            myBlockVisible={myBlockVisible}
            getBlockContent={getBlockContent}
            blockType={blockType}
            data={data}
            updateFieldData={updateFieldData}
            blockHeaderStatus={blockHeaderStatus}
            setBlockHeaderStatus={setBlockHeaderStatus}
        />
    )
}

export default BlockWrapper
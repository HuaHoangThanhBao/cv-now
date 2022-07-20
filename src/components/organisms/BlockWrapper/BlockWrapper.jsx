import React, {useEffect, useState} from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
import InputField from '../../atoms/InputField/InputField';
import DateInput from '../../molecules/DateInput/DateInput';
import BlockContainer from '../BlockContainer/BlockContainer';
import BulletIcon from './../../../dist/bullet.png';

const BlockWrapper = (props) => {
    const {
        pageIndex, 
        columnIndex,
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
        updateFieldData,
        moveContentDown,
        moveContentUp,
        updateFieldHeight,
        getHeader,
        getChildSpecialdIndex,
        currentTemplateType,
        currentBlockSelected,
        setCurrentBlockSelected,
        isPreventInteracting,
        createNewBulletDetailContent,
    } = props;

    const [isDisplayWhenHasInformation, setIsDisplayWhenHasInformation] = useState(false);
    const [myBlockVisible, setMyBlockVisible] = useState(false)
    const [blockHeaderStatus, setBlockHeaderStatus] = useState(false)

    const getBlockContent = (_blockType, index) => {
        switch(_blockType){
            case 1:
                return educationContenType(index)
            case 2:
                return workExperienceType(index)
            case 3:
                return organizationType(index)
            case 4:
                return conferenceType(index)
            case 5:
                return teachingType(index)
            case 6:
                return languageType(index)
            case 7:
                return publicationType(index)
            case 8:
                return tagType(index)
            case 9:
                return referenceType(index)
            case 10:
                return personalProjectType(index)
            default:
                return null
        }
    }

    const getField = (index, _blockType) => {
        let field;
        for(let i = 0; i < data[index].length; i++){
            for(const [key]  of Object.entries(data[index][i])){
                if(key === _blockType){
                    field = data[index][i];
                    break;
                }
            }
        }
        return field
    }

    const getTitle = (index, _blockType) => {
        let title = ''
        for(let i = 0; i < data[index].length; i++){
            for(const [key, item]  of Object.entries(data[index][i])){
                if(key === _blockType){
                    title = item;
                    break;
                }
            }
        }
        return title
    }

    const getStatus = (index, _blockType) => {
        let status;
        for(let i = 0; i < data[index].length; i++){
            for(const [key]  of Object.entries(data[index][i])){
                if(key === _blockType){
                    status = data[index][i].status;
                    break;
                }
            }
        }
        return status
    }

    const getStatusOfContentBulletDetail = (index, currentIndex, _blockType) => {
        let status;
        for(let i = 0; i < data[index].length; i++){
            for(const [key, item]  of Object.entries(data[index][i])){
                if(key === _blockType){
                    for(let j = 0; j < item.child.length; j++){
                        if(j === currentIndex){
                            status = item.child[j].status
                        }
                    }
                    break;
                }
            }
        }
        return status
    }

    const educationContenType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        const contentBullet = getField(index, InputFieldType.content_bullet)[InputFieldType.content_bullet]
        return(
            <div className='block-content-container'>
                <InputField
                     externalClass="block-content-title"
                     type="text"
                     inputBlockType={InputFieldType.title}
                     placeHolder={getTitle(index, InputFieldType.title)}
                     visible={true}
                     isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     columnIndex={columnIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                     updateFieldHeight={updateFieldHeight}
                     isPreventInteracting={isPreventInteracting}
                     isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                 />
                 <InputField
                     externalClass="block-content-desc"
                     type="text"
                     inputBlockType={InputFieldType.desc}
                     placeHolder={getTitle(index, InputFieldType.desc)}
                     visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                     isDisplayWhenHasInformation={getStatus(index,InputFieldType.desc)}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     columnIndex={columnIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                     isPreventInteracting={isPreventInteracting}
                     updateFieldHeight={updateFieldHeight}
                 />
                 <DateInput 
                     isDisplayWhenHasInformation={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                     onInputFieldChange={onInputFieldChange}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     columnIndex={columnIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                     getTitle={getTitle}
                     getField={getField}
                     isPreventInteracting={isPreventInteracting}
                     updateFieldHeight={updateFieldHeight}
                 />
                 <InputField
                     externalClass="block-content-optional dashed"
                     type="text"
                     inputBlockType={InputFieldType.optional_dashed}
                     placeHolder={getTitle(index, InputFieldType.optional_dashed)}
                     visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                     isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed)}
                     updateFieldData={updateFieldData}
                     pageIndex={pageIndex}
                     columnIndex={columnIndex}
                     childIndex={childIndex}
                     currentIndex={index}
                     isPreventInteracting={isPreventInteracting}
                     updateFieldHeight={updateFieldHeight}
                 />
                 {contentBullet && contentBullet.child.map((detail, detailIndex) => (
                    <div
                        key={detail + detailIndex}
                        className="block-content-bullet-detail-row"
                    >
                        <InputField
                            externalClass="block-content-bullet-detail dashed"
                            type="text"
                            icon={BulletIcon}
                            inputBlockType={InputFieldType.content_bullet_detail}
                            placeHolder={getTitle(index, InputFieldType.content_bullet).child[detailIndex][InputFieldType.content_bullet_detail]}
                            visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                            isDisplayWhenHasInformation={getStatusOfContentBulletDetail(index, detailIndex, InputFieldType.content_bullet)}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            columnIndex={columnIndex}
                            childIndex={childIndex}
                            childId={childId}
                            currentIndex={index}
                            currentContentBulletDetailIndex={detailIndex}
                            isPreventInteracting={isPreventInteracting}
                            updateFieldHeight={updateFieldHeight}
                            contentBullet={contentBullet}
                            createNewBulletDetailContent={createNewBulletDetailContent}
                        />
                    </div>
                 ))}
            </div>
        )
    }

    const workExperienceType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
                <InputField
                    externalClass="block-content-desc"
                    type="text"
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    inputBlockType={InputFieldType.desc}
                    placeHolder={getTitle(index, InputFieldType.desc)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.desc)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <DateInput 
                    isDisplayWhenHasInformation={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    onInputFieldChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    getTitle={getTitle}
                    getField={getField}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed2}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed2)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed2)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-detail"
                    type="text"
                    inputBlockType={InputFieldType.content_detail}
                    placeHolder={getTitle(index, InputFieldType.content_detail)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                {/* <InputField
                    externalClass="block-content-bullet dashed"
                    type="text"
                    icon={BulletIcon}
                    inputBlockType={InputFieldType.content_bullet}
                    placeHolder={getTitle(index, InputFieldType.content_bullet)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_bullet)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                /> */}
                <div className='block-content-contact'>
                    <InputField
                        externalClass="block-content-detail"
                        type="text"
                        inputBlockType={InputFieldType.contact}
                        placeHolder={getTitle(index, InputFieldType.contact)}
                        isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact)}
                        visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                        updateFieldData={updateFieldData}
                        pageIndex={pageIndex}
                        columnIndex={columnIndex}
                        childIndex={childIndex}
                        currentIndex={index}
                        isPreventInteracting={isPreventInteracting}
                        updateFieldHeight={updateFieldHeight}
                    />
                    <div className='block-content-contact-group'>
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            inputBlockType={InputFieldType.contact_person}
                            placeHolder={getTitle(index, InputFieldType.contact_person)}
                            isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact_person)}
                            visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            columnIndex={columnIndex}
                            childIndex={childIndex}
                            currentIndex={index}
                            isPreventInteracting={isPreventInteracting}
                            updateFieldHeight={updateFieldHeight}
                        />
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            inputBlockType={InputFieldType.contact_info}
                            placeHolder={getTitle(index, InputFieldType.contact_info)}
                            isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact_info)}
                            visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            columnIndex={columnIndex}
                            childIndex={childIndex}
                            currentIndex={index}
                            isPreventInteracting={isPreventInteracting}
                            updateFieldHeight={updateFieldHeight}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const referenceType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <div className='block-content-contact'>
                    <InputField
                        externalClass="block-content-detail"
                        type="text"
                        inputBlockType={InputFieldType.contact}
                        placeHolder={getTitle(index, InputFieldType.contact)}
                        isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact)}
                        visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                        updateFieldData={updateFieldData}
                        pageIndex={pageIndex}
                        columnIndex={columnIndex}
                        childIndex={childIndex}
                        currentIndex={index}
                        isPreventInteracting={isPreventInteracting}
                        updateFieldHeight={updateFieldHeight}
                    />
                    <div className='block-content-contact-group'>
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            inputBlockType={InputFieldType.contact_person}
                            placeHolder={getTitle(index, InputFieldType.contact_person)}
                            isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact_person)}
                            visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            columnIndex={columnIndex}
                            childIndex={childIndex}
                            currentIndex={index}
                            isPreventInteracting={isPreventInteracting}
                            updateFieldHeight={updateFieldHeight}
                        />
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            inputBlockType={InputFieldType.contact_info}
                            placeHolder={getTitle(index, InputFieldType.contact_info)}
                            isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact_info)}
                            visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            columnIndex={columnIndex}
                            childIndex={childIndex}
                            currentIndex={index}
                            isPreventInteracting={isPreventInteracting}
                            updateFieldHeight={updateFieldHeight}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const teachingType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
                <InputField
                    externalClass="block-content-desc"
                    type="text"
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    inputBlockType={InputFieldType.desc}
                    placeHolder={getTitle(index, InputFieldType.desc)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.desc)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <DateInput 
                    isDisplayWhenHasInformation={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    onInputFieldChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    getTitle={getTitle}
                    getField={getField}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-detail"
                    type="text"
                    inputBlockType={InputFieldType.content_detail}
                    placeHolder={getTitle(index, InputFieldType.content_detail)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                {/* <InputField
                    externalClass="block-content-bullet dashed"
                    type="text"
                    icon={BulletIcon}
                    inputBlockType={InputFieldType.content_bullet}
                    placeHolder={getTitle(index, InputFieldType.content_bullet)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_bullet)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                /> */}
                <div className='block-content-contact'>
                    <InputField
                        externalClass="block-content-detail"
                        type="text"
                        inputBlockType={InputFieldType.contact}
                        placeHolder={getTitle(index, InputFieldType.contact)}
                        isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact)}
                        visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                        updateFieldData={updateFieldData}
                        pageIndex={pageIndex}
                        columnIndex={columnIndex}
                        childIndex={childIndex}
                        currentIndex={index}
                        isPreventInteracting={isPreventInteracting}
                        updateFieldHeight={updateFieldHeight}
                    />
                    <div className='block-content-contact-group'>
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            inputBlockType={InputFieldType.contact_person}
                            placeHolder={getTitle(index, InputFieldType.contact_person)}
                            isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact_person)}
                            visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            columnIndex={columnIndex}
                            childIndex={childIndex}
                            currentIndex={index}
                            isPreventInteracting={isPreventInteracting}
                            updateFieldHeight={updateFieldHeight}
                        />
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            inputBlockType={InputFieldType.contact_info}
                            placeHolder={getTitle(index, InputFieldType.contact_info)}
                            isDisplayWhenHasInformation={getStatus(index,InputFieldType.contact_info)}
                            visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                            updateFieldData={updateFieldData}
                            pageIndex={pageIndex}
                            columnIndex={columnIndex}
                            childIndex={childIndex}
                            currentIndex={index}
                            isPreventInteracting={isPreventInteracting}
                            updateFieldHeight={updateFieldHeight}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const organizationType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
                <DateInput 
                    isDisplayWhenHasInformation={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    onInputFieldChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    getTitle={getTitle}
                    getField={getField}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    inputBlockType={InputFieldType.content_detail_dashed}
                    placeHolder={getTitle(index, InputFieldType.content_detail_dashed)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail_dashed)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
            </div>
        )
    }

    const personalProjectType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
                <DateInput 
                    isDisplayWhenHasInformation={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    onInputFieldChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    getTitle={getTitle}
                    getField={getField}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                {/* <InputField
                    externalClass="block-content-bullet dashed"
                    type="text"
                    icon={BulletIcon}
                    inputBlockType={InputFieldType.content_detail_dashed}
                    placeHolder={getTitle(index, InputFieldType.content_bullet)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail_dashed)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                /> */}
            </div>
        )
    }

    const languageType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    inputBlockType={InputFieldType.content_detail_dashed}
                    placeHolder={getTitle(index, InputFieldType.content_detail_dashed)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail_dashed)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
            </div>
        )
    }

    const tagType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="content_detail"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.content_detail}
                    placeHolder={getTitle(index, InputFieldType.content_detail)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
            </div>
        )
    }

    const publicationType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="block-content-desc"
                    type="text"
                    inputBlockType={InputFieldType.desc}
                    placeHolder={getTitle(index, InputFieldType.desc)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.desc)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed2}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed2)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed2)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-detail"
                    type="text"
                    inputBlockType={InputFieldType.content_detail}
                    placeHolder={getTitle(index, InputFieldType.content_detail)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed3}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed3)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed3)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    inputBlockType={InputFieldType.optional_dashed4}
                    placeHolder={getTitle(index, InputFieldType.optional_dashed4)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.optional_dashed4)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
            </div>
        )
    }

    const conferenceType = (index) => {
        const {_pageIndex, _columnIndex, _childIndex, _currentBlockSelectedIndex} = currentBlockSelected
        return(
            <div className='block-content-container'>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    visible={true}
                    inputBlockType={InputFieldType.title}
                    placeHolder={getTitle(index, InputFieldType.title)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.title)}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    updateFieldHeight={updateFieldHeight}
                    isPreventInteracting={isPreventInteracting}
                    isFocus={_pageIndex === pageIndex && _columnIndex === columnIndex && _childIndex === childIndex && _currentBlockSelectedIndex === index}
                />
                <DateInput 
                    isDisplayWhenHasInformation={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    onInputFieldChange={onInputFieldChange}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    getTitle={getTitle}
                    getField={getField}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    inputBlockType={InputFieldType.content_detail_dashed}
                    placeHolder={getTitle(index, InputFieldType.content_detail_dashed)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail_dashed)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                />
                {/* <InputField
                    externalClass="block-content-bullet dashed"
                    type="text"
                    icon={BulletIcon}
                    inputBlockType={InputFieldType.content_bullet}
                    placeHolder={getTitle(index, InputFieldType.content_bullet)}
                    isDisplayWhenHasInformation={getStatus(index,InputFieldType.content_detail)}
                    visible={isDisplayWhenHasInformation && index === _currentBlockSelectedIndex ? isDisplayWhenHasInformation: false}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={index}
                    isPreventInteracting={isPreventInteracting}
                    updateFieldHeight={updateFieldHeight}
                /> */}
            </div>
        )
    }

    useEffect(() => {
        return() => {
            if(isDisplayWhenHasInformation || blockHeaderStatus) {
                console.log('yess:', pageIndex + "/" + columnIndex + "/" + childIndex)
                checkToMoveContent(pageIndex, columnIndex, childIndex, setBlockHeaderStatus)
            }
        }
    }, [isDisplayWhenHasInformation, blockHeaderStatus])

    return (
        <BlockContainer 
            pageIndex={pageIndex}
            columnIndex={columnIndex}
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
            setIsDisplayWhenHasInformation={setIsDisplayWhenHasInformation}
            isDisplayWhenHasInformation={isDisplayWhenHasInformation}
            setMyBlockVisible={setMyBlockVisible}
            myBlockVisible={myBlockVisible}
            getBlockContent={getBlockContent}
            blockType={blockType}
            data={data}
            updateFieldData={updateFieldData}
            blockHeaderStatus={blockHeaderStatus}
            setBlockHeaderStatus={setBlockHeaderStatus}
            moveContentDown={moveContentDown}
            moveContentUp={moveContentUp}
            updateFieldHeight={updateFieldHeight}
            getHeader={getHeader}
            getChildSpecialdIndex={getChildSpecialdIndex}
            currentTemplateType={currentTemplateType}
            currentBlockSelected={currentBlockSelected}
            setCurrentBlockSelected={setCurrentBlockSelected}
        />
    )
}

export default BlockWrapper
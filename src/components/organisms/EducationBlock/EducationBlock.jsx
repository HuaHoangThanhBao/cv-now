import React, { useState, useRef } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import './../../../styles/block.scss';

const EducationBlock = ({handleOutsideClick, onInputFieldChange, createNewContent}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentList, setContentList] = useState([0]);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    handleOutsideClick(ref, handleVisible);
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="EDUCATION"/>
           <div className="block-space">
                <hr />
           </div>
           {contentList && contentList.map((item, index) => (
               <BlockContent 
                isVisible={isVisible} 
                key={item} 
                onCreateNewContent={() => createNewContent(index, contentList, setContentList)}
                >
                    <InputField
                        externalClass="block-content-title"
                        type="text"
                        placeHolder="Study Program"
                        visible={true}
                        onChange={onInputFieldChange}
                    />
                    <InputField
                        externalClass="block-content-desc"
                        type="text"
                        placeHolder="Institution/ Place of education"
                        visible={true}
                        onChange={onInputFieldChange}
                    />
                    <DateInput 
                        isVisible={isVisible}
                        onInputFieldChange={onInputFieldChange}
                    />
                    <InputField
                        externalClass="block-content-optional dashed"
                        type="text"
                        placeHolder="City, Country or GPA (optional)"
                        visible={isVisible}
                        onChange={onInputFieldChange}
                    />
                    <InputField
                        externalClass="block-content-detail"
                        type="text"
                        placeHolder="Coures"
                        visible={isVisible}
                        onChange={onInputFieldChange}
                    />
                    <InputField
                        externalClass="block-content-bullet dashed"
                        type="text"
                        placeHolder="Course/Thesis/Project"
                        visible={isVisible}
                        onChange={onInputFieldChange}
                    />
                </BlockContent>
           ))}
           
        </div>
    )
}

export default EducationBlock;
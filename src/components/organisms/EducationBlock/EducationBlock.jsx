import React, { useState, useRef } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import './../../../styles/block.scss';

const EducationBlock = ({handleOutsideClick}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    handleOutsideClick(ref, handleVisible)
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="EDUCATION"/>
           <div className="block-space">
                <hr />
           </div>
           <BlockContent isVisible={isVisible}>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    placeHolder="Study Program"
                />
                <InputField
                    externalClass="block-content-desc"
                    type="text"
                    placeHolder="Institution/ Place of education"
                />
                <DateInput isVisible={isVisible}/>
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    placeHolder="City, Country or GPA (optional)"
                    visible={isVisible}
                />
                <InputField
                    externalClass="block-content-detail"
                    type="text"
                    placeHolder="Coures"
                    visible={isVisible}
                />
                <InputField
                    externalClass="block-content-bullet dashed"
                    type="text"
                    placeHolder="Course/Thesis/Project"
                    visible={isVisible}
                />
           </BlockContent>
        </div>
    )
}

export default EducationBlock;
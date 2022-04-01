import React, { useState, useRef } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import './../../../styles/block.scss';

const PersonalProjectBlock = ({handleOutsideClick, onInputFieldChange, createNewContent}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentList, setContentList] = useState([0]);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    handleOutsideClick(ref, handleVisible)
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="PERONAL PROJECTS"/>
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
                        visible={true}
                        placeHolder="Project Name"
                        onChange={onInputFieldChange}
                    />
                    <DateInput isVisible={isVisible}/>
                    <InputField
                        externalClass="block-content-detail dashed"
                        type="text"
                        placeHolder="Description of Achievements"
                        visible={isVisible}
                        onChange={onInputFieldChange}
                    />
                </BlockContent>
           ))}
        </div>
    )
}

export default PersonalProjectBlock;
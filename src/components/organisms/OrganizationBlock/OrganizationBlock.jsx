import React, { useState, useRef } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import './../../../styles/block.scss';

const OrganizationBlock = ({handleOutsideClick, onInputFieldChange, createNewContent}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentList, setContentList] = useState([0]);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    handleOutsideClick(ref, handleVisible)
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="ORGANIZATIONS"/>
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
                </BlockContent>
           ))}
        </div>
    )
}

export default OrganizationBlock;
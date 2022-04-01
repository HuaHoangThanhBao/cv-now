import React, { useState, useRef } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import BulletIcon from './../../../dist/bullet.svg';
import './../../../styles/block.scss';

const PublicationBlock = ({handleOutsideClick}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    handleOutsideClick(ref, handleVisible)
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="PUBLICATIONS"/>
           <div className="block-space">
                <hr />
           </div>
           <BlockContent isVisible={isVisible}>
                <InputField
                    externalClass="block-content-optional"
                    type="text"
                    placeHolder="Publication Type"
                />
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    placeHolder="Publication Title"
                />
                <InputField
                    externalClass="block-content-optional"
                    type="text"
                    placeHolder="Author(s)"
                    visible={isVisible}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    placeHolder="List of Authors"
                    visible={isVisible}
                />
                <InputField
                    externalClass="block-content-optional"
                    type="text"
                    placeHolder="Date of Publication"
                    visible={isVisible}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    placeHolder="Publisher/Issue/Pages, etc."
                    visible={isVisible}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    placeHolder="Description"
                    visible={isVisible}
                />
           </BlockContent>
        </div>
    )
}

export default PublicationBlock;
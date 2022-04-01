import React, { useState, useRef } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import BulletIcon from './../../../dist/bullet.svg';
import './../../../styles/block.scss';

const HonorAwardBlock = ({handleOutsideClick}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    handleOutsideClick(ref, handleVisible)
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="HONOR AWARDS"/>
           <div className="block-space">
                <hr />
           </div>
           <BlockContent isVisible={isVisible}>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    placeHolder="Title/Award Name"
                />
                <DateInput isVisible={isVisible}/>
                <InputField
                    externalClass="block-content-optional"
                    type="text"
                    placeHolder="Name of the institution that issued/awarded it"
                    visible={isVisible}
                />
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    icon={BulletIcon}
                    placeHolder="Description (optional)"
                    visible={isVisible}
                />
           </BlockContent>
        </div>
    )
}

export default HonorAwardBlock;
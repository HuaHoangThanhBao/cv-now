import React, { useState, useRef } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import BulletIcon from './../../../dist/bullet.svg';
import './../../../styles/block.scss';

const ReferenceBlock = ({handleOutsideClick}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    handleOutsideClick(ref, handleVisible)
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="REFERENCES"/>
           <div className="block-space">
                <hr />
           </div>
           <BlockContent isVisible={isVisible}>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    placeHolder="Name and Position"
                />
                <InputField
                    externalClass="block-content-optional dashed"
                    type="text"
                    placeHolder="Reference..."
                    visible={isVisible}
                />
                <div className='block-content-contact'>
                    <InputField
                        externalClass="block-content-detail"
                        type="text"
                        placeHolder="Contact:"
                        visible={isVisible}
                    />
                    <div className='block-content-contact-group'>
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            placeHolder="Contact Person"
                            visible={isVisible}
                        />
                        <InputField
                            externalClass="block-content-bullet dashed"
                            type="text"
                            placeHolder="Contact Info"
                            visible={isVisible}
                        />
                    </div>
                </div>
           </BlockContent>
        </div>
    )
}

export default ReferenceBlock;
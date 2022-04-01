import React, { useState, useRef } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import BulletIcon from './../../../dist/bullet.svg';
import './../../../styles/block.scss';

const WorkBlock = ({handleOutsideClick, onInputFieldChange, createNewContent}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentList, setContentList] = useState([0]);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    handleOutsideClick(ref, handleVisible)
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="WORK EXPERIENCE"/>
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
                         placeHolder="Title/Position"
                         onChange={onInputFieldChange}
                     />
                     <InputField
                         externalClass="block-content-desc"
                         type="text"
                         visible={true}
                         placeHolder="Workplace/Company"
                         onChange={onInputFieldChange}
                     />
                     <DateInput 
                        isVisible={isVisible}
                        onInputFieldChange={onInputFieldChange}
                    />
                     <InputField
                         externalClass="block-content-optional dashed"
                         type="text"
                         placeHolder="City, Country (optional)"
                         visible={isVisible}
                         onChange={onInputFieldChange}
                     />
                     <InputField
                         externalClass="block-content-optional dashed"
                         type="text"
                         placeHolder="Company Description (optional, fill when the company is not well known)"
                         visible={isVisible}
                         onChange={onInputFieldChange}
                     />
                     <InputField
                         externalClass="block-content-detail"
                         type="text"
                         placeHolder="Achievements/Tasks"
                         visible={isVisible}
                         onChange={onInputFieldChange}
                     />
                     <InputField
                         externalClass="block-content-bullet dashed"
                         type="text"
                         icon={BulletIcon}
                         placeHolder="Accomplishment/Responsibility/Task"
                         visible={isVisible}
                         onChange={onInputFieldChange}
                     />
                     <div className='block-content-contact'>
                         <InputField
                             externalClass="block-content-detail"
                             type="text"
                             placeHolder="Contact:"
                             visible={isVisible}
                             onChange={onInputFieldChange}
                         />
                         <div className='block-content-contact-group'>
                             <InputField
                                 externalClass="block-content-bullet dashed"
                                 type="text"
                                 placeHolder="Contact Person"
                                 visible={isVisible}
                                 onChange={onInputFieldChange}
                             />
                             <InputField
                                 externalClass="block-content-bullet dashed"
                                 type="text"
                                 placeHolder="Contact Info"
                                 visible={isVisible}
                                 onChange={onInputFieldChange}
                             />
                         </div>
                     </div>
                </BlockContent>
           ))}
        </div>
    )
}

export default WorkBlock;
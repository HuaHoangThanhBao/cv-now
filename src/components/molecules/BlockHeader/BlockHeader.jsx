import React, {useRef} from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
import { template_type } from '../../../constants/Template';
import InputField from '../../atoms/InputField/InputField';
import './BlockHeader.scss';

const BlockHeader = (props) => {
    const {title, pageIndex, columnIndex, childIndex, handleBlockHeader, handleOutsideClick, updateFieldData, updateFieldHeight, currentTemplateType} = props
    const ref = useRef();

    handleOutsideClick(ref, handleBlockHeader)

    return(
        <div className="block-header" ref={ref}>
            {props.children}
            <div className='block-header-container'>
                {currentTemplateType === template_type.skilled_based && (
                    <div className='block-header-process'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )}

                <InputField
                    externalClass="field-input block-header-title"
                    type="text"
                    inputBlockType={InputFieldType.header}
                    placeHolder={title}
                    isVisible={true}
                    visible={true}
                    updateFieldData={updateFieldData}
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childIndex={childIndex}
                    currentIndex={childIndex}
                    updateFieldHeight={updateFieldHeight}
                />

                {(currentTemplateType !== template_type.combined && currentTemplateType !== template_type.skilled_based) &&
                (
                    <div className='divider-row'>
                        <div className='divider-row-wrapper'>
                            <div className="divider-diamond left"></div>
                            <div className="divider-diamond right"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlockHeader;
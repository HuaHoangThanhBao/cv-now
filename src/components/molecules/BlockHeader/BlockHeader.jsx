import React, {createRef, useEffect, useRef, useState} from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
import InputField from '../../atoms/InputField/InputField';
import './BlockHeader.scss';

const BlockHeader = (props) => {
    const {title, pageIndex, columnIndex, childIndex, handleBlockHeader, handleOutsideClick, updateFieldData, updateFieldHeight} = props
    const ref = useRef();

    handleOutsideClick(ref, handleBlockHeader)

    return(
        <div className="block-header" ref={ref}>
            {props.children}
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
        </div>
    )
}

export default BlockHeader;
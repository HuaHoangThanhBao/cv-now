import React from 'react';
import InputField from '../../atoms/InputField/InputField';
import './BlockHeader.scss';

const BlockHeader = ({title}) => {
    return(
        <div className="block-header">
           <InputField 
                externalClass="block-header-title"
                type="text"
                placeHolder={title}
            />
        </div>
    )
}

export default BlockHeader;
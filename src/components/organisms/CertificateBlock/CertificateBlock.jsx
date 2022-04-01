import React, { useState, useRef, useEffect } from 'react';
import InputField from '../../atoms/InputField/InputField';
import BlockContent from '../../molecules/BlockContent/BlockContent';
import BlockHeader from '../../molecules/BlockHeader/BlockHeader';
import DateInput from '../../molecules/DateInput/DateInput';
import './../../../styles/block.scss';

const CertificateBlock = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    const handleVisible = (status) => {
        setIsVisible(status)
    }
    useEffect(() => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            handleVisible(true);
            return;
          }
          handleVisible(false);
        };
        //component did mount
        document.addEventListener("mousedown", listener);
        
        //component will unmount
        return () => {
          document.removeEventListener("mousedown", listener);
        };
    }, [ref]);
    return(
        <div className="block block-education" ref={ref}>
           <BlockHeader title="CERTIFICATES"/>
           <div className="block-space">
                <hr />
           </div>
           <BlockContent isVisible={isVisible}>
                <InputField
                    externalClass="block-content-title"
                    type="text"
                    placeHolder="Certificate Name"
                />
                <DateInput isVisible={isVisible}/>
                <InputField
                    externalClass="block-content-detail dashed"
                    type="text"
                    placeHolder="Description (optional)"
                    visible={isVisible}
                />
           </BlockContent>
        </div>
    )
}

export default CertificateBlock;
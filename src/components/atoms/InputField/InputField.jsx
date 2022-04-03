import React, { useState, createRef } from 'react';
import ContentEditable from 'react-contenteditable';
import './InputField.scss';

const InputField = (props) => {
    const contentEditable = createRef();
    const {externalClass, visible, allCheck, icon, type, placeHolder, onChange} = props;
    const [html, setHTML] = useState(placeHolder);
    // const [value, setValue] = useState('')
    const [isHide, setIsHide] = useState(true);
    const renderField = () => {
        if(visible){
            return (
                <div className={'field' + (icon ? " field-bullet": "")}>
                    {icon && (
                        <img src={icon} alt="" className='field-icon'/>
                    )}
                    <ContentEditable 
                        className={"field-input" + (externalClass ? " " + externalClass: "")}
                        innerRef={contentEditable} 
                        html={html}
                        onChange={(e) => onChange(e, setHTML, setIsHide)}
                    />
                </div>
            )
        }
        else{
            if(allCheck !== undefined){
                if(!allCheck)
                    return ''
            }
            if(!isHide){
                return <div className={'field' + (icon ? " field-bullet": "")}>
                    {icon && (
                        <img src={icon} alt="" className='field-icon'/>
                    )}
                    <ContentEditable 
                        className={"field-input" + (externalClass ? " " + externalClass: "")}
                        innerRef={contentEditable} 
                        html={html}
                        onChange={(e) => onChange(e, setHTML, setIsHide)}
                    />
                </div>
            }
            return ''
        }
    }
    return(
        renderField()
        // (visible !== false ? (
        //     <div className={'field' + (icon ? " field-bullet": "")}>
        //         {icon && (
        //             <img src={icon} alt="" className='field-icon'/>
        //         )}
        //         <input 
        //             className={"field-input" + (externalClass ? " " + externalClass: "")}
        //             type={type} 
        //             value={value}
        //             placeholder={placeHolder}
        //             onChange={(e) => onChange(e, setValue, setIsHide)}
        //         />
        //     </div>
        // )
        // :
        // (!isHide && (
        //     <div className={'field' + (icon ? " field-bullet": "")}>
        //         {icon && (
        //             <img src={icon} alt="" className='field-icon'/>
        //         )}
        //         <input 
        //             className={"field-input" + (externalClass ? " " + externalClass: "")}
        //             type={type} 
        //             value={value}
        //             placeholder={placeHolder}
        //             onChange={(e) => onChange(e, setValue, setIsHide)}
        //         />
        //     </div>
        // )))
    )
}

export default InputField;
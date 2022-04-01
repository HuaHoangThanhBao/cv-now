import React, { useState } from 'react';
import './InputField.scss';

const InputField = (props) => {
    const {externalClass, visible, allCheck, icon, type, placeHolder, onChange} = props;
    const [value, setValue] = useState('')
    const [isHide, setIsHide] = useState(true);
    const renderField = () => {
        if(visible){
            return (
                <div className={'field' + (icon ? " field-bullet": "")}>
                    {icon && (
                        <img src={icon} alt="" className='field-icon'/>
                    )}
                    <input 
                        className={"field-input" + (externalClass ? " " + externalClass: "")}
                        type={type} 
                        value={value}
                        placeholder={placeHolder}
                        onChange={(e) => onChange(e, setValue, setIsHide)}
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
                    <input 
                        className={"field-input" + (externalClass ? " " + externalClass: "")}
                        type={type} 
                        value={value}
                        placeholder={placeHolder}
                        onChange={(e) => onChange(e, setValue, setIsHide)}
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
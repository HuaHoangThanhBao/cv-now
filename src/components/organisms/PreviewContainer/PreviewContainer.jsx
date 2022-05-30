import React from 'react';
import { template } from '../../../constants/Template';
import DocumentPanel from '../DocumentPanel/DocumentPanel';
import './PreviewContainer.scss'

const PreviewContainer = (props) => {
    const {pages, setPages, isReOrder, setIsReOrder, setCurrentTemplateType, colorHex, infoKeys, info, setInfo} = props;
    const templateList = Object.keys(template)
    
    return(
        <div className='preview-container'>
            {templateList && templateList.map(template => (
                <div 
                    className='preview'
                    key={template}
                >
                    <div className='preview-info'>
                        <p className='preview-txt'>{template}</p>
                    </div>
                    <div 
                        className='preview-selection' 
                        onClick={() => setCurrentTemplateType(template)}
                    >
                        <div className="preview-box-wrapper">
                            <div className="preview-overlay"></div>
                            <div className="preview-box">
                                <DocumentPanel 
                                    pages={pages}
                                    setPages={setPages}
                                    isReOrder={isReOrder}
                                    setIsReOrder={setIsReOrder}
                                    currentTemplateType={template}
                                    setCurrentTemplateType={setCurrentTemplateType}
                                    colorHex={colorHex}
                                    infoKeys={infoKeys}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PreviewContainer
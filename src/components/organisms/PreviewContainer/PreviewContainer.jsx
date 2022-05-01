import React from 'react';
import { template } from '../../../constants/Template';
import DocumentPanel from '../DocumentPanel/DocumentPanel';
import './PreviewContainer.scss'

const PreviewContainer = (props) => {
    const {pages, setPages, isReOrder, setIsReOrder, currentTemplateType, setCurrentTemplateType} = props;
    const templateList = Object.keys(template)
    
    return(
        <div className='preview-container'>
            {templateList && templateList.map(template => (
                <div 
                    key={template}
                    className='preview' 
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
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PreviewContainer
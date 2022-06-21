import React from 'react';
import { template } from '../../../constants/Template';
import DocumentPanel from '../DocumentPanel/DocumentPanel';
import './PreviewContainer.scss'

const PreviewContainer = (props) => {
    const {
        pages, setPages, isReOrder, setIsReOrder, handleSelectTemplate, colorHex, infoKeys, info, 
        setInfo, socialData, isOpenProfileModal, setIsOpenProfileModal, currentBlockSelected,
        setCurrentBlockSelected, isActiveIcon, isShowPreviewList, profileContainerHeight, 
        setProfileContainerHeight
    } = props;
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
                        onClick={() => handleSelectTemplate(template)}
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
                                    colorHex={colorHex}
                                    infoKeys={infoKeys}
                                    info={info}
                                    setInfo={setInfo}
                                    socialData={socialData}
                                    isOpenProfileModal={isOpenProfileModal} 
                                    setIsOpenProfileModal={setIsOpenProfileModal}
                                    currentBlockSelected={currentBlockSelected}
                                    setCurrentBlockSelected={setCurrentBlockSelected}
                                    isActiveIcon={isActiveIcon}
                                    isShowPreviewList={isShowPreviewList}
                                    profileContainerHeight={profileContainerHeight}
                                    setProfileContainerHeight={setProfileContainerHeight}
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
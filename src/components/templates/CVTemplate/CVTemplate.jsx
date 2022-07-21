import React from 'react';
import DocumentPanel from '../../organisms/DocumentPanel/DocumentPanel';
import './CVTemplate.scss';
import ProfileModal from '../../molecules/ProfileModal/ProfileModal';

const CVTemplate = (props) => {
    const {
        panelsRef, pages, setPages, isReOrder, setIsReOrder, currentTemplateType, currentThemeType, 
        currentColumnWidthAttr, colorHex, infoKeys, isOpenProfileModal, setIsOpenProfileModal,
        info, setInfo, socialData, setSocialData, currentBlockSelected, setCurrentBlockSelected,
        profileContainerHeight, setProfileContainerHeight, isDragChange, setIsDragChange, 
        useOnClickOutside, currentBulletContentDetailSelected,
        setCurrentBulletContentDetailSelected,
    } = props;

    return(
        <React.Fragment>
            <div className="cv-template">
                <DocumentPanel 
                    panelsRef={panelsRef}
                    pages={pages}
                    setPages={setPages}
                    isReOrder={isReOrder}
                    setIsReOrder={setIsReOrder}
                    currentTemplateType={currentTemplateType}
                    currentThemeType={currentThemeType}
                    currentColumnWidthAttr={currentColumnWidthAttr}
                    colorHex={colorHex}
                    infoKeys={infoKeys}
                    info={info}
                    setInfo={setInfo}
                    socialData={socialData}
                    isOpenProfileModal={isOpenProfileModal} 
                    setIsOpenProfileModal={setIsOpenProfileModal}
                    currentBlockSelected={currentBlockSelected}
                    setCurrentBlockSelected={setCurrentBlockSelected}
                    profileContainerHeight={profileContainerHeight}
                    setProfileContainerHeight={setProfileContainerHeight}
                    isDragChange={isDragChange}
                    setIsDragChange={setIsDragChange}
                    useOnClickOutside={useOnClickOutside}
                    currentBulletContentDetailSelected={currentBulletContentDetailSelected}
                    setCurrentBulletContentDetailSelected={setCurrentBulletContentDetailSelected}
                />
            </div>
            <ProfileModal 
                socialData={socialData}
                setSocialData={setSocialData}
                isOpenProfileModal={isOpenProfileModal} 
                setIsOpenProfileModal={setIsOpenProfileModal}
            />
        </React.Fragment>
    )
}

export default CVTemplate;
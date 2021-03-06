import React from "react";
import DocumentPanel from "../../organisms/DocumentPanel/DocumentPanel";
import "./CVTemplate.scss";
import ProfileModal from "../../molecules/ProfileModal/ProfileModal";

const CVTemplate = (props) => {
  const {
    panelsRef,
    pages,
    setPages,
    noNeedList,
    setNoNeedList,
    isReOrder,
    setIsReOrder,
    currentTemplateType,
    currentThemeType,
    currentColumnWidthAttr,
    colorHex,
    infoKeys,
    isOpenProfileModal,
    setIsOpenProfileModal,
    info,
    setInfo,
    socialData,
    setSocialData,
    currentBlockSelected,
    setCurrentBlockSelected,
    profileContainerHeight,
    setProfileContainerHeight,
    isDragChange,
    setIsDragChange,
    useOnClickOutside,
    currentBulletContentDetailSelected,
    setCurrentBulletContentDetailSelected,
    resetCurrentBulletContentDetailSelected,
    isShowAvatarOnTemplate,
    isShowCreationDateOnTemplate,
    isShowPageNumbersOnTemplate,
    isShowIconsOnTemplate,
  } = props;

  return (
    <React.Fragment>
      <div className="cv-template">
        <DocumentPanel
          panelsRef={panelsRef}
          pages={pages}
          setPages={setPages}
          noNeedList={noNeedList}
          setNoNeedList={setNoNeedList}
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
          currentBulletContentDetailSelected={
            currentBulletContentDetailSelected
          }
          setCurrentBulletContentDetailSelected={
            setCurrentBulletContentDetailSelected
          }
          resetCurrentBulletContentDetailSelected={
            resetCurrentBulletContentDetailSelected
          }
          isShowAvatarOnTemplate={isShowAvatarOnTemplate}
          isShowCreationDateOnTemplate={isShowCreationDateOnTemplate}
          isShowPageNumbersOnTemplate={isShowPageNumbersOnTemplate}
          isShowIconsOnTemplate={isShowIconsOnTemplate}
        />
      </div>
      <ProfileModal
        socialData={socialData}
        setSocialData={setSocialData}
        isOpenProfileModal={isOpenProfileModal}
        setIsOpenProfileModal={setIsOpenProfileModal}
      />
    </React.Fragment>
  );
};

export default CVTemplate;

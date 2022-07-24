import React, { useEffect, useState } from "react";
import { InputFieldType } from "../../../constants/InputFieldType";
import InputField from "../../atoms/InputField/InputField";
import DateInput from "../../molecules/DateInput/DateInput";
import BlockContainer from "../BlockContainer/BlockContainer";
import BulletIcon from "./../../../dist/bullet.png";

const BlockWrapper = (props) => {
  const {
    title,
    placeHolder,
    pageIndex,
    columnIndex,
    childIndex,
    childId,
    handleOutsideClick,
    checkToMoveContent,
    onInputFieldChange,
    createNewContent,
    removeContent,
    removeBlock,
    parentRef,
    moveBlockUp,
    moveBlockDown,
    blockType,
    data,
    updateFieldData,
    moveContentDown,
    moveContentUp,
    updateFieldHeight,
    getHeader,
    getChildSpecialdIndex,
    currentTemplateType,
    currentBlockSelected,
    setCurrentBlockSelected,
    isPreventInteracting,
    createNewBulletDetailContent,
    removeContentBulletDetail,
    currentBulletContentDetailSelected,
    setCurrentBulletContentDetailSelected,
    resetCurrentBulletContentDetailSelected,
    isShowIconsOnTemplate,
  } = props;

  const [isDisplayWhenHasInformation, setIsDisplayWhenHasInformation] =
    useState(false);
  const [myBlockVisible, setMyBlockVisible] = useState(false);
  const [blockHeaderStatus, setBlockHeaderStatus] = useState(false);

  const getBlockContent = (_blockType, index) => {
    switch (_blockType) {
      case 1:
        return educationContenType(index);
      case 2:
        return workExperienceType(index);
      case 3:
        return organizationType(index);
      case 4:
        return conferenceType(index);
      case 5:
        return teachingType(index);
      case 6:
        return languageType(index);
      case 7:
        return publicationType(index);
      case 8:
        return tagType(index);
      case 9:
        return referenceType(index);
      case 10:
        return personalProjectType(index);
      default:
        return null;
    }
  };

  const getField = (index, _blockType) => {
    let field;
    for (let i = 0; i < data[index].length; i++) {
      for (const [key] of Object.entries(data[index][i])) {
        if (key === _blockType) {
          field = data[index][i];
          break;
        }
      }
    }
    return field;
  };

  const educationContenType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    const contentBullet = getField(index, InputFieldType.content_bullet)[
      InputFieldType.content_bullet
    ];
    const {
      _currentBulletContentDetailSelected,
    } = currentBulletContentDetailSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-title"
          type="text"
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          visible={true}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index &&
            _currentBulletContentDetailSelected === -1
          }
        />
        <InputField
          externalClass="block-content-desc"
          type="text"
          inputBlockType={InputFieldType.desc}
          placeHolder={getField(index, InputFieldType.desc).placeHolder}
          text={getField(index, InputFieldType.desc)[InputFieldType.desc]}
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.desc).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <DateInput
          isDisplayWhenHasInformation={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          onInputFieldChange={onInputFieldChange}
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          getField={getField}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed}
          placeHolder={
            getField(index, InputFieldType.optional_dashed).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed)[
              InputFieldType.optional_dashed
            ]
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        {contentBullet &&
          contentBullet.child.map((detail, detailIndex) => (
            <div
              key={detail + detailIndex}
              className="block-content-bullet-detail-row"
            >
              <InputField
                externalClass="block-content-bullet-detail dashed"
                type="text"
                icon={BulletIcon}
                inputBlockType={InputFieldType.content_bullet_detail}
                placeHolder={detail.placeHolder}
                text={detail[InputFieldType.content_bullet_detail]}
                visible={
                  isDisplayWhenHasInformation &&
                  index === _currentBlockSelectedIndex
                    ? isDisplayWhenHasInformation
                    : false
                }
                isDisplayWhenHasInformation={detail.status}
                updateFieldData={updateFieldData}
                pageIndex={pageIndex}
                columnIndex={columnIndex}
                childIndex={childIndex}
                childId={childId}
                currentIndex={index}
                currentBlockSelectedIndex={_currentBlockSelectedIndex}
                currentContentBulletDetailIndex={detailIndex}
                isPreventInteracting={isPreventInteracting}
                updateFieldHeight={updateFieldHeight}
                contentBullet={contentBullet}
                createNewBulletDetailContent={createNewBulletDetailContent}
                removeContentBulletDetail={removeContentBulletDetail}
                currentBulletContentDetailSelected={
                  currentBulletContentDetailSelected
                }
                setCurrentBulletContentDetailSelected={
                  setCurrentBulletContentDetailSelected
                }
              />
            </div>
          ))}
      </div>
    );
  };

  const workExperienceType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    const contentBullet = getField(index, InputFieldType.content_bullet)[
      InputFieldType.content_bullet
    ];
    const {
      _currentBulletContentDetailSelected,
    } = currentBulletContentDetailSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-title"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index &&
            _currentBulletContentDetailSelected === -1
          }
        />
        <InputField
          externalClass="block-content-desc"
          type="text"
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          inputBlockType={InputFieldType.desc}
          placeHolder={getField(index, InputFieldType.desc).placeHolder}
          text={getField(index, InputFieldType.desc)[InputFieldType.desc]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.desc).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <DateInput
          isDisplayWhenHasInformation={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          onInputFieldChange={onInputFieldChange}
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          getField={getField}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed}
          placeHolder={
            getField(index, InputFieldType.optional_dashed).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed)[
              InputFieldType.optional_dashed
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed2}
          placeHolder={
            getField(index, InputFieldType.optional_dashed2).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed2)[
              InputFieldType.optional_dashed2
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed2).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        {contentBullet &&
          contentBullet.child.map((detail, detailIndex) => (
            <div
              key={detail + detailIndex}
              className="block-content-bullet-detail-row"
            >
              <InputField
                externalClass="block-content-bullet-detail dashed"
                type="text"
                icon={BulletIcon}
                inputBlockType={InputFieldType.content_bullet_detail}
                placeHolder={detail.placeHolder}
                text={detail[InputFieldType.content_bullet_detail]}
                visible={
                  isDisplayWhenHasInformation &&
                  index === _currentBlockSelectedIndex
                    ? isDisplayWhenHasInformation
                    : false
                }
                isDisplayWhenHasInformation={detail.status}
                updateFieldData={updateFieldData}
                pageIndex={pageIndex}
                columnIndex={columnIndex}
                childIndex={childIndex}
                childId={childId}
                currentIndex={index}
                currentContentBulletDetailIndex={detailIndex}
                currentBlockSelectedIndex={_currentBlockSelectedIndex}
                isPreventInteracting={isPreventInteracting}
                updateFieldHeight={updateFieldHeight}
                contentBullet={contentBullet}
                createNewBulletDetailContent={createNewBulletDetailContent}
                removeContentBulletDetail={removeContentBulletDetail}
                currentBulletContentDetailSelected={
                  currentBulletContentDetailSelected
                }
                setCurrentBulletContentDetailSelected={
                  setCurrentBulletContentDetailSelected
                }
              />
            </div>
          ))}
        <div className="block-content-contact">
          <InputField
            externalClass="block-content-detail"
            type="text"
            inputBlockType={InputFieldType.contact}
            placeHolder={getField(index, InputFieldType.contact).placeHolder}
            text={
              getField(index, InputFieldType.contact)[InputFieldType.contact]
            }
            isDisplayWhenHasInformation={
              getField(index, InputFieldType.contact).status
            }
            visible={
              isDisplayWhenHasInformation &&
              index === _currentBlockSelectedIndex
                ? isDisplayWhenHasInformation
                : false
            }
            updateFieldData={updateFieldData}
            pageIndex={pageIndex}
            columnIndex={columnIndex}
            childIndex={childIndex}
            currentIndex={index}
            isPreventInteracting={isPreventInteracting}
            updateFieldHeight={updateFieldHeight}
          />
          <div className="block-content-contact-group">
            <InputField
              externalClass="block-content-bullet dashed"
              type="text"
              inputBlockType={InputFieldType.contact_person}
              placeHolder={
                getField(index, InputFieldType.contact_person).placeHolder
              }
              text={
                getField(index, InputFieldType.contact_person)[
                  InputFieldType.contact_person
                ]
              }
              isDisplayWhenHasInformation={
                getField(index, InputFieldType.contact_person).status
              }
              visible={
                isDisplayWhenHasInformation &&
                index === _currentBlockSelectedIndex
                  ? isDisplayWhenHasInformation
                  : false
              }
              updateFieldData={updateFieldData}
              pageIndex={pageIndex}
              columnIndex={columnIndex}
              childIndex={childIndex}
              currentIndex={index}
              isPreventInteracting={isPreventInteracting}
              updateFieldHeight={updateFieldHeight}
            />
            <InputField
              externalClass="block-content-bullet dashed"
              type="text"
              inputBlockType={InputFieldType.contact_info}
              placeHolder={
                getField(index, InputFieldType.contact_info).placeHolder
              }
              text={
                getField(index, InputFieldType.contact_info)[
                  InputFieldType.contact_info
                ]
              }
              isDisplayWhenHasInformation={
                getField(index, InputFieldType.contact_info).status
              }
              visible={
                isDisplayWhenHasInformation &&
                index === _currentBlockSelectedIndex
                  ? isDisplayWhenHasInformation
                  : false
              }
              updateFieldData={updateFieldData}
              pageIndex={pageIndex}
              columnIndex={columnIndex}
              childIndex={childIndex}
              currentIndex={index}
              isPreventInteracting={isPreventInteracting}
              updateFieldHeight={updateFieldHeight}
            />
          </div>
        </div>
      </div>
    );
  };

  const referenceType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-title"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index
          }
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed}
          placeHolder={
            getField(index, InputFieldType.optional_dashed).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed)[
              InputFieldType.optional_dashed
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <div className="block-content-contact">
          <InputField
            externalClass="block-content-detail"
            type="text"
            inputBlockType={InputFieldType.contact}
            placeHolder={getField(index, InputFieldType.contact).placeHolder}
            text={
              getField(index, InputFieldType.contact)[InputFieldType.contact]
            }
            isDisplayWhenHasInformation={
              getField(index, InputFieldType.contact).status
            }
            visible={
              isDisplayWhenHasInformation &&
              index === _currentBlockSelectedIndex
                ? isDisplayWhenHasInformation
                : false
            }
            updateFieldData={updateFieldData}
            pageIndex={pageIndex}
            columnIndex={columnIndex}
            childIndex={childIndex}
            currentIndex={index}
            isPreventInteracting={isPreventInteracting}
            updateFieldHeight={updateFieldHeight}
          />
          <div className="block-content-contact-group">
            <InputField
              externalClass="block-content-bullet dashed"
              type="text"
              inputBlockType={InputFieldType.contact_person}
              placeHolder={
                getField(index, InputFieldType.contact_person).placeHolder
              }
              text={
                getField(index, InputFieldType.contact_person)[
                  InputFieldType.contact_person
                ]
              }
              isDisplayWhenHasInformation={
                getField(index, InputFieldType.contact_person).status
              }
              visible={
                isDisplayWhenHasInformation &&
                index === _currentBlockSelectedIndex
                  ? isDisplayWhenHasInformation
                  : false
              }
              updateFieldData={updateFieldData}
              pageIndex={pageIndex}
              columnIndex={columnIndex}
              childIndex={childIndex}
              currentIndex={index}
              isPreventInteracting={isPreventInteracting}
              updateFieldHeight={updateFieldHeight}
            />
            <InputField
              externalClass="block-content-bullet dashed"
              type="text"
              inputBlockType={InputFieldType.contact_info}
              placeHolder={
                getField(index, InputFieldType.contact_info).placeHolder
              }
              text={
                getField(index, InputFieldType.contact_info)[
                  InputFieldType.contact_info
                ]
              }
              isDisplayWhenHasInformation={
                getField(index, InputFieldType.contact_info).status
              }
              visible={
                isDisplayWhenHasInformation &&
                index === _currentBlockSelectedIndex
                  ? isDisplayWhenHasInformation
                  : false
              }
              updateFieldData={updateFieldData}
              pageIndex={pageIndex}
              columnIndex={columnIndex}
              childIndex={childIndex}
              currentIndex={index}
              isPreventInteracting={isPreventInteracting}
              updateFieldHeight={updateFieldHeight}
            />
          </div>
        </div>
      </div>
    );
  };

  const teachingType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    const contentBullet = getField(index, InputFieldType.content_bullet)[
      InputFieldType.content_bullet
    ];
    const {
      _currentBulletContentDetailSelected,
    } = currentBulletContentDetailSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-title"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index &&
            _currentBulletContentDetailSelected === -1
          }
        />
        <InputField
          externalClass="block-content-desc"
          type="text"
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          inputBlockType={InputFieldType.desc}
          placeHolder={getField(index, InputFieldType.desc).placeHolder}
          text={getField(index, InputFieldType.desc)[InputFieldType.desc]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.desc).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <DateInput
          isDisplayWhenHasInformation={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          onInputFieldChange={onInputFieldChange}
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          getField={getField}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed}
          placeHolder={
            getField(index, InputFieldType.optional_dashed).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed)[
              InputFieldType.optional_dashed
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        {contentBullet &&
          contentBullet.child.map((detail, detailIndex) => (
            <div
              key={detail + detailIndex}
              className="block-content-bullet-detail-row"
            >
              <InputField
                externalClass="block-content-bullet-detail dashed"
                type="text"
                icon={BulletIcon}
                inputBlockType={InputFieldType.content_bullet_detail}
                placeHolder={detail.placeHolder}
                text={detail[InputFieldType.content_bullet_detail]}
                visible={
                  isDisplayWhenHasInformation &&
                  index === _currentBlockSelectedIndex
                    ? isDisplayWhenHasInformation
                    : false
                }
                isDisplayWhenHasInformation={detail.status}
                updateFieldData={updateFieldData}
                pageIndex={pageIndex}
                columnIndex={columnIndex}
                childIndex={childIndex}
                childId={childId}
                currentIndex={index}
                currentContentBulletDetailIndex={detailIndex}
                currentBlockSelectedIndex={_currentBlockSelectedIndex}
                isPreventInteracting={isPreventInteracting}
                updateFieldHeight={updateFieldHeight}
                contentBullet={contentBullet}
                createNewBulletDetailContent={createNewBulletDetailContent}
                removeContentBulletDetail={removeContentBulletDetail}
                currentBulletContentDetailSelected={
                  currentBulletContentDetailSelected
                }
                setCurrentBulletContentDetailSelected={
                  setCurrentBulletContentDetailSelected
                }
              />
            </div>
          ))}
        <div className="block-content-contact">
          <InputField
            externalClass="block-content-detail"
            type="text"
            inputBlockType={InputFieldType.contact}
            placeHolder={getField(index, InputFieldType.contact).placeHolder}
            text={
              getField(index, InputFieldType.contact)[InputFieldType.contact]
            }
            isDisplayWhenHasInformation={
              getField(index, InputFieldType.contact).status
            }
            visible={
              isDisplayWhenHasInformation &&
              index === _currentBlockSelectedIndex
                ? isDisplayWhenHasInformation
                : false
            }
            updateFieldData={updateFieldData}
            pageIndex={pageIndex}
            columnIndex={columnIndex}
            childIndex={childIndex}
            currentIndex={index}
            isPreventInteracting={isPreventInteracting}
            updateFieldHeight={updateFieldHeight}
          />
          <div className="block-content-contact-group">
            <InputField
              externalClass="block-content-bullet dashed"
              type="text"
              inputBlockType={InputFieldType.contact_person}
              placeHolder={
                getField(index, InputFieldType.contact_person).placeHolder
              }
              text={
                getField(index, InputFieldType.contact_person)[
                  InputFieldType.contact_person
                ]
              }
              isDisplayWhenHasInformation={
                getField(index, InputFieldType.contact_person).status
              }
              visible={
                isDisplayWhenHasInformation &&
                index === _currentBlockSelectedIndex
                  ? isDisplayWhenHasInformation
                  : false
              }
              updateFieldData={updateFieldData}
              pageIndex={pageIndex}
              columnIndex={columnIndex}
              childIndex={childIndex}
              currentIndex={index}
              isPreventInteracting={isPreventInteracting}
              updateFieldHeight={updateFieldHeight}
            />
            <InputField
              externalClass="block-content-bullet dashed"
              type="text"
              inputBlockType={InputFieldType.contact_info}
              placeHolder={
                getField(index, InputFieldType.contact_info).placeHolder
              }
              text={
                getField(index, InputFieldType.contact_info)[
                  InputFieldType.contact_info
                ]
              }
              isDisplayWhenHasInformation={
                getField(index, InputFieldType.contact_info).status
              }
              visible={
                isDisplayWhenHasInformation &&
                index === _currentBlockSelectedIndex
                  ? isDisplayWhenHasInformation
                  : false
              }
              updateFieldData={updateFieldData}
              pageIndex={pageIndex}
              columnIndex={columnIndex}
              childIndex={childIndex}
              currentIndex={index}
              isPreventInteracting={isPreventInteracting}
              updateFieldHeight={updateFieldHeight}
            />
          </div>
        </div>
      </div>
    );
  };

  const organizationType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-title"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index
          }
        />
        <DateInput
          isDisplayWhenHasInformation={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          onInputFieldChange={onInputFieldChange}
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          getField={getField}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-detail dashed"
          type="text"
          inputBlockType={InputFieldType.content_detail_dashed}
          placeHolder={
            getField(index, InputFieldType.content_detail_dashed).placeHolder
          }
          text={
            getField(index, InputFieldType.content_detail_dashed)[
              InputFieldType.content_detail_dashed
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.content_detail_dashed).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
      </div>
    );
  };

  const personalProjectType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    const contentBullet = getField(index, InputFieldType.content_bullet)[
      InputFieldType.content_bullet
    ];
    const {
      _currentBulletContentDetailSelected,
    } = currentBulletContentDetailSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-title"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index &&
            _currentBulletContentDetailSelected === -1
          }
        />
        <DateInput
          isDisplayWhenHasInformation={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          onInputFieldChange={onInputFieldChange}
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          getField={getField}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        {contentBullet &&
          contentBullet.child.map((detail, detailIndex) => (
            <div
              key={detail + detailIndex}
              className="block-content-bullet-detail-row"
            >
              <InputField
                externalClass="block-content-bullet-detail dashed"
                type="text"
                icon={BulletIcon}
                inputBlockType={InputFieldType.content_bullet_detail}
                placeHolder={detail.placeHolder}
                text={detail[InputFieldType.content_bullet_detail]}
                visible={
                  isDisplayWhenHasInformation &&
                  index === _currentBlockSelectedIndex
                    ? isDisplayWhenHasInformation
                    : false
                }
                isDisplayWhenHasInformation={detail.status}
                updateFieldData={updateFieldData}
                pageIndex={pageIndex}
                columnIndex={columnIndex}
                childIndex={childIndex}
                childId={childId}
                currentIndex={index}
                currentContentBulletDetailIndex={detailIndex}
                currentBlockSelectedIndex={_currentBlockSelectedIndex}
                isPreventInteracting={isPreventInteracting}
                updateFieldHeight={updateFieldHeight}
                contentBullet={contentBullet}
                createNewBulletDetailContent={createNewBulletDetailContent}
                removeContentBulletDetail={removeContentBulletDetail}
                currentBulletContentDetailSelected={
                  currentBulletContentDetailSelected
                }
                setCurrentBulletContentDetailSelected={
                  setCurrentBulletContentDetailSelected
                }
              />
            </div>
          ))}
      </div>
    );
  };

  const languageType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-title"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index
          }
        />
        <InputField
          externalClass="block-content-detail dashed"
          type="text"
          inputBlockType={InputFieldType.content_detail_dashed}
          placeHolder={
            getField(index, InputFieldType.content_detail_dashed).placeHolder
          }
          text={
            getField(index, InputFieldType.content_detail_dashed)[
              InputFieldType.content_detail_dashed
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.content_detail_dashed).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
      </div>
    );
  };

  const tagType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="content_detail"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.content_detail}
          placeHolder={
            getField(index, InputFieldType.content_detail).placeHolder
          }
          text={
            getField(index, InputFieldType.content_detail)[
              InputFieldType.content_detail
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.content_detail).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index
          }
        />
      </div>
    );
  };

  const publicationType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-desc"
          type="text"
          inputBlockType={InputFieldType.desc}
          placeHolder={getField(index, InputFieldType.desc).placeHolder}
          text={getField(index, InputFieldType.desc)[InputFieldType.desc]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.desc).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-title"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index
          }
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed}
          placeHolder={
            getField(index, InputFieldType.optional_dashed).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed)[
              InputFieldType.optional_dashed
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed2}
          placeHolder={
            getField(index, InputFieldType.optional_dashed2).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed2)[
              InputFieldType.optional_dashed2
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed2).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-detail"
          type="text"
          inputBlockType={InputFieldType.content_detail}
          placeHolder={
            getField(index, InputFieldType.content_detail).placeHolder
          }
          text={
            getField(index, InputFieldType.content_detail)[
              InputFieldType.content_detail
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.content_detail).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed3}
          placeHolder={
            getField(index, InputFieldType.optional_dashed3).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed3)[
              InputFieldType.optional_dashed3
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed3).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        <InputField
          externalClass="block-content-optional dashed"
          type="text"
          inputBlockType={InputFieldType.optional_dashed4}
          placeHolder={
            getField(index, InputFieldType.optional_dashed4).placeHolder
          }
          text={
            getField(index, InputFieldType.optional_dashed4)[
              InputFieldType.optional_dashed4
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.optional_dashed4).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
      </div>
    );
  };

  const conferenceType = (index) => {
    const {
      _pageIndex,
      _columnIndex,
      _childIndex,
      _currentBlockSelectedIndex,
    } = currentBlockSelected;
    const contentBullet = getField(index, InputFieldType.content_bullet)[
      InputFieldType.content_bullet
    ];
    const {
      _currentBulletContentDetailSelected,
    } = currentBulletContentDetailSelected;
    return (
      <div className="block-content-container">
        <InputField
          externalClass="block-content-title"
          type="text"
          visible={true}
          inputBlockType={InputFieldType.title}
          placeHolder={getField(index, InputFieldType.title).placeHolder}
          text={getField(index, InputFieldType.title)[InputFieldType.title]}
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.title).status
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          updateFieldHeight={updateFieldHeight}
          isPreventInteracting={isPreventInteracting}
          isFocus={
            _pageIndex === pageIndex &&
            _columnIndex === columnIndex &&
            _childIndex === childIndex &&
            _currentBlockSelectedIndex === index &&
            _currentBulletContentDetailSelected === -1
          }
        />
        <InputField
          externalClass="block-content-detail dashed"
          type="text"
          inputBlockType={InputFieldType.content_detail_dashed}
          placeHolder={
            getField(index, InputFieldType.content_detail_dashed).placeHolder
          }
          text={
            getField(index, InputFieldType.content_detail_dashed)[
              InputFieldType.content_detail_dashed
            ]
          }
          isDisplayWhenHasInformation={
            getField(index, InputFieldType.content_detail_dashed).status
          }
          visible={
            isDisplayWhenHasInformation && index === _currentBlockSelectedIndex
              ? isDisplayWhenHasInformation
              : false
          }
          updateFieldData={updateFieldData}
          pageIndex={pageIndex}
          columnIndex={columnIndex}
          childIndex={childIndex}
          currentIndex={index}
          isPreventInteracting={isPreventInteracting}
          updateFieldHeight={updateFieldHeight}
        />
        {contentBullet &&
          contentBullet.child.map((detail, detailIndex) => (
            <div
              key={detail + detailIndex}
              className="block-content-bullet-detail-row"
            >
              <InputField
                externalClass="block-content-bullet-detail dashed"
                type="text"
                icon={BulletIcon}
                inputBlockType={InputFieldType.content_bullet_detail}
                placeHolder={detail.placeHolder}
                text={detail[InputFieldType.content_bullet_detail]}
                visible={
                  isDisplayWhenHasInformation &&
                  index === _currentBlockSelectedIndex
                    ? isDisplayWhenHasInformation
                    : false
                }
                isDisplayWhenHasInformation={detail.status}
                updateFieldData={updateFieldData}
                pageIndex={pageIndex}
                columnIndex={columnIndex}
                childIndex={childIndex}
                childId={childId}
                currentIndex={index}
                currentContentBulletDetailIndex={detailIndex}
                currentBlockSelectedIndex={_currentBlockSelectedIndex}
                isPreventInteracting={isPreventInteracting}
                updateFieldHeight={updateFieldHeight}
                contentBullet={contentBullet}
                createNewBulletDetailContent={createNewBulletDetailContent}
                removeContentBulletDetail={removeContentBulletDetail}
                currentBulletContentDetailSelected={
                  currentBulletContentDetailSelected
                }
                setCurrentBulletContentDetailSelected={
                  setCurrentBulletContentDetailSelected
                }
              />
            </div>
          ))}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      if (isDisplayWhenHasInformation || blockHeaderStatus) {
        console.log("yess:", pageIndex + "/" + columnIndex + "/" + childIndex);
        checkToMoveContent(
          pageIndex,
          columnIndex,
          childIndex,
          setBlockHeaderStatus
        );
      }
    };
  }, [isDisplayWhenHasInformation, blockHeaderStatus]);

  return (
    <BlockContainer
      title={title}
      placeHolder={placeHolder}
      pageIndex={pageIndex}
      columnIndex={columnIndex}
      childIndex={childIndex}
      childId={childId}
      handleOutsideClick={handleOutsideClick}
      checkToMoveContent={checkToMoveContent}
      onInputFieldChange={onInputFieldChange}
      createNewContent={createNewContent}
      removeContent={removeContent}
      removeBlock={removeBlock}
      parentRef={parentRef}
      moveBlockUp={moveBlockUp}
      moveBlockDown={moveBlockDown}
      setIsDisplayWhenHasInformation={setIsDisplayWhenHasInformation}
      isDisplayWhenHasInformation={isDisplayWhenHasInformation}
      setMyBlockVisible={setMyBlockVisible}
      myBlockVisible={myBlockVisible}
      getBlockContent={getBlockContent}
      blockType={blockType}
      data={data}
      updateFieldData={updateFieldData}
      blockHeaderStatus={blockHeaderStatus}
      setBlockHeaderStatus={setBlockHeaderStatus}
      moveContentDown={moveContentDown}
      moveContentUp={moveContentUp}
      updateFieldHeight={updateFieldHeight}
      getHeader={getHeader}
      getChildSpecialdIndex={getChildSpecialdIndex}
      currentTemplateType={currentTemplateType}
      currentBlockSelected={currentBlockSelected}
      setCurrentBlockSelected={setCurrentBlockSelected}
      resetCurrentBulletContentDetailSelected={
        resetCurrentBulletContentDetailSelected
      }
      isShowIconsOnTemplate={isShowIconsOnTemplate}
    />
  );
};

export default BlockWrapper;

import React, { useRef } from "react";
import { InputFieldType } from "../../../constants/InputFieldType";
import { template_type } from "../../../constants/Template";
import Icon from "../../atoms/Icon/Icon";
import InputField from "../../atoms/InputField/InputField";
import "./BlockHeader.scss";

const BlockHeader = (props) => {
  const {
    title,
    placeHolder,
    childId,
    pageIndex,
    columnIndex,
    childIndex,
    handleBlockHeader,
    handleOutsideClick,
    updateFieldData,
    updateFieldHeight,
    currentTemplateType,
    isShowIconsOnTemplate,
  } = props;

  const ref = useRef();
  handleOutsideClick(ref, handleBlockHeader);

  return (
    <div className="block-header" ref={ref}>
      {props.children}
      <div className="block-header-container">
        {currentTemplateType === template_type.skilled_based && (
          <div className="block-header-process">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <div className="block-header-block">
          {currentTemplateType !== template_type.functional &&
            currentTemplateType !== template_type.colleage &&
            currentTemplateType !== template_type.modern &&
            isShowIconsOnTemplate && (
              <Icon iconType={childId} />
            )}
          <InputField
            externalClass="field-input block-header-title"
            type="text"
            inputBlockType={InputFieldType.header}
            placeHolder={placeHolder}
            text={title}
            isDisablePlaceHolderOnStart={true}
            isDisplayWhenHasInformation={true}
            visible={true}
            updateFieldData={updateFieldData}
            pageIndex={pageIndex}
            columnIndex={columnIndex}
            childIndex={childIndex}
            currentIndex={childIndex}
            updateFieldHeight={updateFieldHeight}
            isNotDisplayIcon={
              currentTemplateType === template_type.functional ||
              currentTemplateType === template_type.colleage ||
              currentTemplateType === template_type.modern
                ? true
                : false
            }
          />
        </div>
        {currentTemplateType !== template_type.combined &&
          currentTemplateType !== template_type.skilled_based &&
          currentTemplateType !== template_type.modern &&
          currentTemplateType !== template_type.professional &&
          currentTemplateType !== template_type.colleage &&
          currentTemplateType !== template_type.simple &&
          currentTemplateType !== template_type.basic &&
          currentTemplateType !== template_type.executive && (
            <div className="divider-row">
              <div className="divider-row-wrapper">
                <div className="divider-diamond left"></div>
                <div className="divider-diamond right"></div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default BlockHeader;

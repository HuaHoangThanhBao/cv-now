import React, { useState, createRef, useEffect, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { InputFieldType } from "../../../constants/InputFieldType";
import "./InputField.scss";

const InputField = (props) => {
  const {
    externalClass,
    pageIndex,
    columnIndex,
    childIndex,
    childId,
    currentIndex,
    visible,
    isDisplayWhenHasInformation,
    inputBlockType,
    icon,
    placeHolder,
    isFocus,
    updateFieldData,
    updateFieldHeight,
    isNotDisplayIcon,
    isPreventInteracting,
    isDateInputFieldType,
    getField,
    contentBullet,
    createNewBulletDetailContent,
    currentContentBulletDetailIndex,
    removeContentBulletDetail,
    currentBulletContentDetailSelected,
    setCurrentBulletContentDetailSelected,
  } = props;
  const inputRef = useRef();
  const contentEditable = createRef();
  const [html, setHTML] = useState(isDateInputFieldType ? "" : placeHolder);

  useEffect(() => {
    if (inputRef.current) {
      if (currentBulletContentDetailSelected) {
        const {
          _pageIndex,
          _columnIndex,
          _childIndex,
          _currentBulletContentDetailSelected,
        } = currentBulletContentDetailSelected;
        if (
          _pageIndex === pageIndex &&
          _columnIndex === columnIndex &&
          _childIndex === childIndex &&
          _currentBulletContentDetailSelected === currentContentBulletDetailIndex
        ) {
          contentEditable.current.focus();
        }
      }
    }
  }, [currentBulletContentDetailSelected]);

  useEffect(() => {
    if (isPreventInteracting) return;
    if (isFocus) {
      contentEditable.current.focus();
    }
  }, [isFocus, isPreventInteracting]);

  useEffect(() => {
    if (isDateInputFieldType) return;
    console.log(placeHolder)
    setHTML(placeHolder);
  }, [placeHolder, isDateInputFieldType]);

  const handleChange = (evt) => {
    const value = evt.target.value;
    updateFieldData(
      pageIndex,
      columnIndex,
      childIndex,
      currentIndex,
      currentContentBulletDetailIndex,
      inputBlockType,
      placeHolder,
      value
    );
    setHTML(value);
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      const height = inputRef.current.offsetHeight;
      updateFieldHeight(
        pageIndex,
        columnIndex,
        childIndex,
        currentIndex,
        currentContentBulletDetailIndex,
        inputBlockType,
        height
      );
    }
  }, [
    isDisplayWhenHasInformation,
    html,
    childIndex,
    columnIndex,
    currentIndex,
    inputBlockType,
    pageIndex,
    updateFieldHeight,
  ]);

  function isNumber(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (
      charCode > 31 &&
      (charCode < 48 || charCode > 57) &&
      charCode !== 37 &&
      charCode !== 39
    ) {
      return false;
    }
    return true;
  }

  const handleKeyDownOfDateInput = (e) => {
    if (isDateInputFieldType) {
      if (!isNumber(e)) {
        e.preventDefault();
      }
    }
  };

  const handleKeyUp = (e) => {
    if (inputBlockType === InputFieldType.content_bullet_detail) {
      if (e.keyCode === 13) {
        e.preventDefault();
        console.log("create new conten bullet row");
        createNewBulletDetailContent(
          contentBullet.child,
          childId,
          currentContentBulletDetailIndex
        );
      }
    }
  };

  const handleKeyDown = (e) => {
    if (inputBlockType === InputFieldType.content_bullet_detail) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
      //if we press delete key code, it will remove current field
      if (e.keyCode === 8 && html.length < 1) {
        removeContentBulletDetail(
          pageIndex,
          columnIndex,
          childIndex,
          currentIndex,
          currentContentBulletDetailIndex
        );
      }
    }
  };

  const handleFocus = () => {
    if(inputBlockType === InputFieldType.content_bullet_detail) {
      setCurrentBulletContentDetailSelected({
        _pageIndex: pageIndex,
        _columnIndex: columnIndex,
        _childIndex: childIndex,
        _currentBulletContentDetailSelected: currentContentBulletDetailIndex
      })
    }
  }

  return (
    <div
      className={
        "field" +
        (icon ? " field-bullet" : "") +
        (visible ? " visible" : "") +
        (isDisplayWhenHasInformation ? " isDisplayWhenHasInformation" : "") +
        (isNotDisplayIcon ? " field-with-no-icon" : "")
      }
      ref={inputRef}
    >
      {icon && <img src={icon} alt="" className="field-icon" />}
      {!isDateInputFieldType ? (
        <ContentEditable
          className={`field-input ${externalClass ? ` ${externalClass}` : ""} ${
            isDateInputFieldType ? "date" : ""
          }`}
          innerRef={contentEditable}
          html={html}
          placeholder={placeHolder}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
      ) : (
        <input
          className={`field-input ${externalClass ? ` ${externalClass}` : ""} ${
            isDateInputFieldType ? "date" : ""
          }`}
          type="text"
          onChange={handleChange}
          placeholder={
            getField(currentIndex, inputBlockType)[inputBlockType] !== ""
              ? placeHolder
              : ""
          }
          onKeyDown={handleKeyDownOfDateInput}
          maxLength={
            inputBlockType === InputFieldType.month_start ||
            inputBlockType === InputFieldType.month_end
              ? 2
              : 4
          }
        />
      )}
    </div>
  );
};

export default InputField;

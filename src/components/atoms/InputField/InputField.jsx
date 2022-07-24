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
    text,
    placeHolder,
    isFocus,
    updateFieldData,
    updateFieldHeight,
    isNotDisplayIcon,
    isPreventInteracting,
    isDateInputFieldType,
    contentBullet,
    createNewBulletDetailContent,
    currentContentBulletDetailIndex,
    removeContentBulletDetail,
    currentBlockSelectedIndex,
    currentBulletContentDetailSelected,
    setCurrentBulletContentDetailSelected,
  } = props;
  const inputRef = useRef();
  const contentEditable = createRef();
  const [html, setHTML] = useState("");

  useEffect(() => {
    if(isDisplayWhenHasInformation){
      setHTML(text)
    }
    else {
      setHTML('')
    }
  }, [text])

  useEffect(() => {
    if(inputBlockType !== InputFieldType.content_bullet_detail) return
    if (inputRef.current) {
      if (currentBulletContentDetailSelected) {
        const {
          _pageIndex,
          _columnIndex,
          _childIndex,
          _currentBlockSelectedIndex,
          _currentBulletContentDetailSelected,
        } = currentBulletContentDetailSelected;
        if (
          _pageIndex === pageIndex &&
          _columnIndex === columnIndex &&
          _childIndex === childIndex &&
          _currentBulletContentDetailSelected ===
            currentContentBulletDetailIndex &&
          _currentBlockSelectedIndex === currentIndex
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

  const handleKeyDownOfDateInput = (e) => {
    if (isDateInputFieldType) {
      if (!isNumber(e)) {
        e.preventDefault();
      } else if (e.keyCode !== 8) {
        if (
          inputBlockType === InputFieldType.month_start ||
          inputBlockType === InputFieldType.month_end
        ) {
          if (html.length >= 2) {
            e.preventDefault();
          }
        } else if (
          inputBlockType === InputFieldType.year_start ||
          inputBlockType === InputFieldType.year_end
        ) {
          if (html.length >= 4) {
            e.preventDefault();
          }
        }
      }
    }
  };

  const handleKeyUp = (e) => {
    if (inputBlockType === InputFieldType.content_bullet_detail) {
      if (e.keyCode === 13) {
        e.preventDefault();
        createNewBulletDetailContent(
          contentBullet.child,
          childId,
          currentBlockSelectedIndex,
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

  const handleClick = () => {
    if (inputBlockType === InputFieldType.content_bullet_detail) {
      if(currentContentBulletDetailIndex !== -1){
        setCurrentBulletContentDetailSelected({
          _pageIndex: pageIndex,
          _columnIndex: columnIndex,
          _childIndex: childIndex,
          _currentBlockSelectedIndex: currentBlockSelectedIndex,
          _currentBulletContentDetailSelected: currentContentBulletDetailIndex,
        });
      }
    }
  };

  return (
    <div
      className={`field ${icon ? " field-bullet" : ""} ${
        visible ? " visible" : ""
      } ${isDisplayWhenHasInformation ? " isDisplayWhenHasInformation" : ""} ${
        isNotDisplayIcon ? " field-with-no-icon" : ""
      } ${externalClass ? ` ${externalClass}` : ""}`}
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
          onClick={handleClick}
        />
      ) : (
        <ContentEditable
          className={`field-input ${externalClass ? ` ${externalClass}` : ""} ${
            isDateInputFieldType ? "date" : ""
          }`}
          innerRef={contentEditable}
          html={html}
          placeholder={placeHolder}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDownOfDateInput}
        />
      )}
    </div>
  );
};

export default InputField;

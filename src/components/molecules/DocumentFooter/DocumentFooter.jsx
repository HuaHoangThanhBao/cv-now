import React from "react";
import "./DocumentFooter.scss";

const DocumentFooter = (props) => {
  const {
    pageIndex,
    pageLength,
    isShowCreationDateOnTemplate,
    isShowPageNumbersOnTemplate,
  } = props;

  return (
    <div className={`document-footer ${!isShowCreationDateOnTemplate ? 'disable-creation-date': ''}`}>
      {isShowCreationDateOnTemplate && (
        <div className="document-footer-col">08 May, 2022</div>
      )}
      {isShowPageNumbersOnTemplate && (
        <div className="document-footer-col">
          Page {pageIndex + 1} of {pageLength}
        </div>
      )}
    </div>
  );
};

export default DocumentFooter;

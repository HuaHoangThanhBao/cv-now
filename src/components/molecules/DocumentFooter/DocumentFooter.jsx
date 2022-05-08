import React from 'react';

const DocumentFooter = (props) => {
    const {pageIndex, pageLength} = props;

    return (
        <div className='document-footer'>
            <div className='document-footer-col'>
                08 May, 2022
            </div>
            <div className='document-footer-col'>
                Page {pageIndex + 1} of {pageLength} 
            </div>
        </div>
    )
}

export default DocumentFooter;
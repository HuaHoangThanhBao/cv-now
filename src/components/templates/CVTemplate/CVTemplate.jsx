import React, {useState} from 'react';
import Title from '../../atoms/Title/Title';
import EditBalance from '../../molecules/EditBalance/EitBalance';
import MainMenu from '../../molecules/MainMenu/MainMenu';
import Board from '../Board/Board';
import DocumentPanel from '../../organisms/DocumentPanel/DocumentPanel';
import { MetaData } from '../../../constants/MetaData';
import './CVTemplate.scss';
import { template_type } from '../../../constants/Template';
import {columnLevel} from '../../../constants/Variables';
import PreviewContainer from '../../organisms/PreviewContainer/PreviewContainer';


const CVTemplate = () => {
    const [pages, setPages] = useState(MetaData)
    const [isReOrder, setIsReOrder] = useState(false)
    const [currentTemplateType, setCurrentTemplateType] = useState(template_type.basic)
    const [isShowPreviewList, setIsShowReviewList] = useState(false)
    const [currentColumnWidthAttr, setCurrentColumnWidthAttr] = useState(columnLevel);
    return(
        <div className="cv-template">
            <MainMenu />
            <Board 
                pages={pages}
                setPages={setPages}
                setIsReOrder={setIsReOrder}
            />
            <div className="mini-menu">
                <Title placeholder="My Document"/>
                <EditBalance 
                    pageColumnsCount={pages[0].columns.length}
                    currentTemplateType={currentTemplateType}
                    currentColumnWidthAttr={currentColumnWidthAttr} 
                    setCurrentColumnWidthAttr={setCurrentColumnWidthAttr}
                />
            </div>

            {isShowPreviewList && (
                <PreviewContainer 
                    pages={pages}
                    setPages={setPages}
                    isReOrder={isReOrder}
                    setIsReOrder={setIsReOrder}
                    currentTemplateType={currentTemplateType}
                    setCurrentTemplateType={setCurrentTemplateType}
                />
            )}
            <button onClick={() => setIsShowReviewList(!isShowPreviewList)}>Show preview list</button>

            <DocumentPanel 
                pages={pages}
                setPages={setPages}
                isReOrder={isReOrder}
                setIsReOrder={setIsReOrder}
                currentTemplateType={currentTemplateType}
                currentColumnWidthAttr={currentColumnWidthAttr}
            />
        </div>
    )
}

export default CVTemplate;
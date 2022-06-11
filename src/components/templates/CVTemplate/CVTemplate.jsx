import React, {useState} from 'react';
import Title from '../../atoms/Title/Title';
import EditBalance from '../../molecules/EditBalance/EitBalance';
import MainMenu from '../../molecules/MainMenu/MainMenu';
import Board from '../Board/Board';
import DocumentPanel from '../../organisms/DocumentPanel/DocumentPanel';
import { MetaData } from '../../../constants/MetaData';
import './CVTemplate.scss';
import { template_type } from '../../../constants/Template';
import {theme} from '../../../constants/Theme';
import {columnLevel} from '../../../constants/Variables';
import PreviewContainer from '../../organisms/PreviewContainer/PreviewContainer';
import ThemeList from '../../organisms/ThemeList/ThemeList';
import ColorList from '../../organisms/ColorList/ColorList';
import { infoData } from '../../../constants/InfoData';
import ProfileModal from '../../molecules/ProfileModal/ProfileModal';
import { socialMetaData } from '../../../constants/SocialData';
import { one_column_format, two_column_format } from '../../../constants/ColumnFormat';

const CVTemplate = () => {
    const [pages, setPages] = useState(MetaData)
    const [isReOrder, setIsReOrder] = useState(false)
    const [currentTemplateType, setCurrentTemplateType] = useState(template_type.tech)
    const [currentThemeType, setCurrentThemeType] = useState(theme.line_theme)
    const [isShowPreviewList, setIsShowReviewList] = useState(false)
    const [currentColumnWidthAttr, setCurrentColumnWidthAttr] = useState(columnLevel);
    const [colorRbg, setColorRbg] = useState('#2B343D')
    const [colorHex, setColorHex] = useState('#2B343D')
    const [info, setInfo] = useState(infoData);
    const infoKeys = Object.keys(info);
    const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
    const [socialData, setSocialData] = useState(socialMetaData);
    const [currentBlockSelected, setCurrentBlockSelected] = useState({
        pageIndex: 0,
        columnIndex: 0,
        childIndex: 0,
        _currentBlockSelectedIndex: -1
    })

    const handleTransformToOneColumn = (status) => {
        const clonePages = JSON.parse(JSON.stringify(pages));
        if(!status){
            console.log('start tranform to two column')
            for(let i = 0; i < two_column_format.length; i++){
                for(let j = 0; j < two_column_format[i].length; j++){
                    const result = findChildHeaderMatchToOneColumnFormatItem(clonePages, two_column_format[i][j])
                    if(!result) continue;
                    
                    const {
                        child, 
                        pageIndex, 
                        columnIndex, 
                        childIndex
                    } = result
                    if(child){
                        console.log(`move from pageIndex: ${pageIndex}, columnIndex: ${columnIndex}, childIndex: ${childIndex}, 
                        to pageIndex: ${i}, columnIndex: ${i}, childIndex: ${childIndex}`)

                        //We delete before move
                        clonePages[pageIndex].columns[columnIndex].child.splice(childIndex, 1)
                        //If there is only one column, we add a new one
                        if(clonePages[pageIndex].columns.length === 1){
                            clonePages[pageIndex].columns.push({
                                child: []
                            })
                        }
                        //After delete we move
                        clonePages[i].columns[i].child.splice(j, 0, child)
                    }
                }
            }
        }
        else{
            console.log('start tranform to one column')
            for(let i = 0; i < one_column_format.length; i++){
                const result = findChildHeaderMatchToOneColumnFormatItem(clonePages, one_column_format[i])
                if(!result) continue;

                const {
                    child, 
                    pageIndex, 
                    columnIndex, 
                    childIndex
                } = result
                if(child){
                    console.log(`move from pageIndex: ${pageIndex}, columnIndex: ${columnIndex}, childIndex: ${childIndex}, to: ${i - 1}`)
                    //We delete before move
                    clonePages[pageIndex].columns[columnIndex].child.splice(childIndex, 1)
                    //After delete we move
                    clonePages[0].columns[0].child.splice(i, 0, child)
                }
            }
            
            //remove second column of each page
            for(let i = 0; i < clonePages.length; i++){
                clonePages[i].columns.pop()
            }
        }
        console.log('re-order page after transforming')
        console.log(clonePages)
        setPages([...clonePages])
        setCurrentBlockSelected({
            pageIndex: 0,
            columnIndex: 0,
            childIndex: 0,
            _currentBlockSelectedIndex: -1
        })
        setIsReOrder(true)
    }

    const findChildHeaderMatchToOneColumnFormatItem = (clonePages, one_column_item) => {
        for(let i = 0; i < clonePages.length; i++){
            for(let j = 0; j < clonePages[i].columns.length; j++){
                for(let z = 0; z < clonePages[i].columns[j].child.length; z++){
                    if(clonePages[i].columns[j].child[z].header === one_column_item){
                        return {
                            child: clonePages[i].columns[j].child[z], 
                            pageIndex: i, 
                            columnIndex: j, 
                            childIndex: z
                        }
                    }
                }
            }
        }
    }

    return(
        <React.Fragment>
            <div className="cv-template">
                <MainMenu />
                <Board 
                    pages={pages}
                    setPages={setPages}
                    setIsReOrder={setIsReOrder}
                    handleTransformToOneColumn={handleTransformToOneColumn}
                />
                
                <ColorList 
                    colorRbg={colorRbg}
                    setColorRbg={setColorRbg}
                    colorHex={colorHex}
                    setColorHex={setColorHex}
                />

                <ThemeList 
                    setCurrentThemeType={setCurrentThemeType}
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
                        colorHex={colorHex}
                        infoKeys={infoKeys}
                        info={info}
                        setInfo={setInfo}
                        socialData={socialData}
                        isOpenProfileModal={isOpenProfileModal} 
                        setIsOpenProfileModal={setIsOpenProfileModal}
                        currentBlockSelected={currentBlockSelected}
                        setCurrentBlockSelected={setCurrentBlockSelected}
                    />
                )}
                <button onClick={() => setIsShowReviewList(!isShowPreviewList)}>Show preview list</button>

                <DocumentPanel 
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
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
import { one_column_format } from '../../../constants/ColumnFormat';


const CVTemplate = () => {
    const [pages, setPages] = useState(MetaData)
    const [isReOrder, setIsReOrder] = useState(false)
    const [currentTemplateType, setCurrentTemplateType] = useState(template_type.basic)
    const [currentThemeType, setCurrentThemeType] = useState(theme.line_theme)
    const [isShowPreviewList, setIsShowReviewList] = useState(false)
    const [currentColumnWidthAttr, setCurrentColumnWidthAttr] = useState(columnLevel);
    const [colorRbg, setColorRbg] = useState('#2B343D')
    const [colorHex, setColorHex] = useState('#2B343D')
    const [info, setInfo] = useState(infoData);
    const infoKeys = Object.keys(info);
    const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
    const [socialData, setSocialData] = useState(socialMetaData);

    const handleTransformToOneColumn = (status) => {
        if(!status){
            return
        }
        else{
            console.log('start tranform to one column')
            for(let i = 0; i < one_column_format.length; i++){
                const {
                    child, 
                    pageIndex, 
                    columnIndex, 
                    childIndex
                } = findChildHeaderMatchToOneColumnFormatItem(one_column_format[i])
                if(child){
                    console.log(`move from pageIndex: ${pageIndex}, columnIndex: ${columnIndex}, childIndex: ${childIndex}, to: ${i - 1}`)
                    //We delete before move
                    pages[pageIndex].columns[columnIndex].child.splice(childIndex, 1)
                    //After delete we move
                    pages[0].columns[0].child.splice(i, 0, child)
                }
            }
            
            //remove empty columns and pages
            for(let i = 0; i < pages.length; i++){
                for(let j = 0; j < pages[i].columns.length; j++){
                    if(pages[i].columns[j].child.length === 0){
                        pages[i].columns.pop()
                    }
                }
                if(pages[i].columns.length <= 1){
                    pages.pop()
                }
            }    
        }
        setPages([...pages])
        setIsReOrder(true)
    }

    const findChildHeaderMatchToOneColumnFormatItem = (one_column_item) => {
        for(let i = 0; i < pages.length; i++){
            for(let j = 0; j < pages[i].columns.length; j++){
                for(let z = 0; z < pages[i].columns[j].child.length; z++){
                    if(pages[i].columns[j].child[z].header === one_column_item){
                        return {
                            child: pages[i].columns[j].child[z], 
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
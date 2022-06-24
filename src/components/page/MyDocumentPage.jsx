import React, {useState, useRef} from 'react';
import CVTemplate from '../templates/CVTemplate/CVTemplate';
import { template_type } from '../../constants/Template';
import {theme} from '../../constants/Theme';
import {columnLevel} from '../../constants/Variables';
import { MetaData } from '../../constants/MetaData';
import { infoData } from '../../constants/InfoData';
import { socialMetaData } from '../../constants/SocialData';
import ThemeList from '../organisms/ThemeList/ThemeList';
import ColorList from '../organisms/ColorList/ColorList';
import Title from '../atoms/Title/Title';
import EditBalance from '../molecules/EditBalance/EitBalance';
import MainMenu from '../organisms/MainMenu/MainMenu';
import Board from '../organisms/Board/Board';
import { one_column_format, two_column_format } from '../../constants/ColumnFormat';
import PreviewContainer from '../organisms/PreviewContainer/PreviewContainer';
import { jsPDF } from "jspdf";
import { maxHeight, maxWidth } from '../../constants/Variables';
import { menu } from '../../constants/Menu';
import './MyDocumentPage.scss';

const MyDocumentPage = () => {
    const [pages, setPages] = useState(MetaData)
    const [isReOrder, setIsReOrder] = useState(false)
    const [currentTemplateType, setCurrentTemplateType] = useState(template_type.combined)
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
    const [menuItemSelected, setMenuItemSelected] = useState('') 

    //This is a fake state to make re-order in Document Panel
    const [isDragChange, setIsDragChange] = useState(false)
    //This is a special state to calculate actualpage height based on Profile Container ref
    const [profileContainerHeight, setProfileContainerHeight] = useState(0)
    
    //All pages will be store in this ref
    const panelsRef = useRef([]);

    async function generatePDF(){
        let i = 0;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: [maxWidth, maxHeight],
            compress: true
        });

        async function createPDF(){
            const pagesLength = panelsRef.current.length
            if(i <= pagesLength - 1){
                await pdf.html(panelsRef.current[i], {
                    callback: function (pdf) {
                        if(i === pagesLength - 1){
                            var pageCount = pdf.internal.getNumberOfPages();
                            //we delete the last blank page
                            if(pageCount > pagesLength){
                                pdf.deletePage(pageCount)
                            }
                            pdf.save("download.pdf");
                        }
                        i++
                        createPDF()
                    }, y: i === 0 ? 0: (maxHeight * i)
                });
            };
        }
        
        await createPDF();
    }

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
        resetCurrentBlockSelected()
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

    const handleSelectTemplate = (template) => {
        setCurrentTemplateType(template)
        //After we choose a new template, we re-order all blocks on CV page
        setIsReOrder(true)
    }

    const resetCurrentBlockSelected = () => {
        setCurrentBlockSelected({
            pageIndex: 0,
            columnIndex: 0,
            childIndex: 0,
            _currentBlockSelectedIndex: -1
        })
    }

    const getMenuContent = () => {
        switch(menuItemSelected){
            case menu.font:
                return (
                    <div className='font'>

                    </div>
                )
            case menu.theme:
                return (
                    <div className='theme'>
                        <div className='theme-wrapper'>
                            <div className='theme-container'>
                                <div className='theme-color'>
                                    <p className='theme-text'>Color</p>
                                    <ColorList 
                                        colorRbg={colorRbg}
                                        setColorRbg={setColorRbg}
                                        colorHex={colorHex}
                                        setColorHex={setColorHex}
                                    />
                                </div>
                                <div className='theme-option'>
                                    <p className='theme-text'>Background</p>
                                    <ThemeList 
                                        setCurrentThemeType={setCurrentThemeType}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case menu.layout:
                return (
                    <div className='layout'>
                        <Board 
                            pages={pages}
                            setPages={setPages}
                            handleTransformToOneColumn={handleTransformToOneColumn}
                            setIsDragChange={setIsDragChange}
                            resetCurrentBlockSelected={resetCurrentBlockSelected}
                        />
                    </div>
                )
            case menu.template:
                return (
                    <div className='template'>
                        <PreviewContainer 
                            panelsRef={panelsRef}
                            pages={pages}
                            setPages={setPages}
                            isReOrder={isReOrder}
                            setIsReOrder={setIsReOrder}
                            currentTemplateType={currentTemplateType}
                            handleSelectTemplate={handleSelectTemplate}
                            colorHex={colorHex}
                            infoKeys={infoKeys}
                            info={info}
                            setInfo={setInfo}
                            socialData={socialData}
                            isOpenProfileModal={isOpenProfileModal} 
                            setIsOpenProfileModal={setIsOpenProfileModal}
                            currentBlockSelected={currentBlockSelected}
                            setCurrentBlockSelected={setCurrentBlockSelected}
                            // isShowPreviewList={isShowPreviewList}
                            setIsShowReviewList={setIsShowReviewList}
                            profileContainerHeight={profileContainerHeight}
                            setProfileContainerHeight={setProfileContainerHeight}
                        />
                    </div>
                )
            case menu.settings:
                return (
                    <div className='settings'>

                    </div>
                )
            default:
                return (
                    <div className='font'>

                    </div>
                )
        }
    }

    return(
        <div className="document-page">
            <MainMenu 
                generatePDF={generatePDF}
                setMenuItemSelected={setMenuItemSelected}
                setIsShowReviewList={setIsShowReviewList}
                getMenuContent={getMenuContent}
            />

            <div className='document-page-cv'>
                <div className="mini-menu">
                    <EditBalance 
                        pageColumnsCount={pages[0].columns.length}
                        currentTemplateType={currentTemplateType}
                        currentColumnWidthAttr={currentColumnWidthAttr} 
                        setCurrentColumnWidthAttr={setCurrentColumnWidthAttr}
                    />
                    <Title placeholder="My Document"/>
                </div>
                <CVTemplate 
                    panelsRef={panelsRef}
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
                    profileContainerHeight={profileContainerHeight}
                    setProfileContainerHeight={setProfileContainerHeight}
                    isDragChange={isDragChange}
                    setIsDragChange={setIsDragChange}
                    setSocialData={setSocialData}
                />
            </div>
        </div>
    )
}

export default MyDocumentPage;
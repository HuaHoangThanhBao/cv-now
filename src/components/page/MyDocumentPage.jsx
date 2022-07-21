import React, {useState, useRef, useEffect} from 'react';
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
import FontList from '../organisms/FontList/FontList';
import Settings from '../organisms/Settings/Settings';

const MyDocumentPage = () => {
    const [pages, setPages] = useState(MetaData)
    const [isReOrder, setIsReOrder] = useState(false)
    const [currentTemplateType, setCurrentTemplateType] = useState(template_type.combined)
    const [currentThemeType, setCurrentThemeType] = useState(theme.line_theme)
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
    const [currentBulletContentDetailSelected, setCurrentBulletContentDetailSelected] = useState({
        _pageIndex: 0,
        _columnIndex: 0,
        _childIndex: 0,
        _currentBulletContentDetailSelected: -1
    })
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [menuItemSelected, setMenuItemSelected] = useState('')

    //This is a fake state to make re-order in Document Panel
    const [isDragChange, setIsDragChange] = useState(false)
    //This is a special state to calculate actualpage height based on Profile Container ref
    const [profileContainerHeight, setProfileContainerHeight] = useState(0)
    
    //All pages will be store in this ref
    const panelsRef = useRef([]);

    function useOnClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                handler(true);
                return;
              }
              handler(false);
            };
            //component did mount
            document.addEventListener("mousedown", listener);
            
            //component will unmount
            return () => {
              document.removeEventListener("mousedown", listener);
            };
        }, [ref]);
    }

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

    const resetCurrentBulletContentDetailSelected = () => {
        setCurrentBulletContentDetailSelected({
            _pageIndex: 0,
            _columnIndex: 0,
            _childIndex: 0,
            _currentBulletContentDetailSelected: -1
        })
    }

    const getMenuContent = () => {
        switch(menuItemSelected){
            case menu.fonts:
                 default:
                return (
                    <div className='fonts-wrapper'>
                        <p className='fonts-heading'>Fonts</p>
                        <FontList />
                    </div>
                )
            case menu.themes:
                return (
                    <div className='themes-container'>
                        <div className='themes-color'>
                            <p className='themes-text'>Color</p>
                            <ColorList 
                                colorRbg={colorRbg}
                                setColorRbg={setColorRbg}
                                colorHex={colorHex}
                                setColorHex={setColorHex}
                            />
                        </div>
                        <div className='themes-option'>
                            <p className='themes-text'>Background</p>
                            <ThemeList 
                                setCurrentThemeType={setCurrentThemeType}
                            />
                        </div>
                    </div>
                )
            case menu.layouts:
                return (
                    <Board 
                        pages={pages}
                        setPages={setPages}
                        handleTransformToOneColumn={handleTransformToOneColumn}
                        setIsDragChange={setIsDragChange}
                        resetCurrentBlockSelected={resetCurrentBlockSelected}
                        resetCurrentBulletContentDetailSelected={resetCurrentBulletContentDetailSelected}
                    />
                )
            case menu.templates:
                return (
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
                        profileContainerHeight={profileContainerHeight}
                        setProfileContainerHeight={setProfileContainerHeight}
                        useOnClickOutside={useOnClickOutside}
                        currentBulletContentDetailSelected={currentBulletContentDetailSelected}
                        setCurrentBulletContentDetailSelected={setCurrentBulletContentDetailSelected}
                    />
                )
            case menu.settings:
                return (
                    <Settings />
                )
        }
    }

    useEffect(() => {
        scale_cv_document()
        window.addEventListener('resize', scale_cv_document)
    }, [])

    //We use this function to scale CV div to fit the screen when we resize the browser
    function scale_cv_document () {
        const documentPage = getComputedStyle(document.getElementById('document-page'))
        const documentPageCV = getComputedStyle(document.getElementById('document-page-cv'))
    
        const documentPageCVElement = document.getElementById('document-page-cv')
    
        let offset = 0
        const windowWidth = window.innerWidth
        if(windowWidth < 1000){
            offset = 0.1
        }
        else if(windowWidth >= 1000 && windowWidth < 1300){
            offset = 0.2
        }
        else{
            offset = 0.5
        }

        const scale = Math.max(
            parseFloat(documentPage.width)/parseFloat(documentPageCV.width), 	
            parseFloat(documentPage.height)/parseFloat(documentPageCV.height)
        ) - offset;  
    
        documentPageCVElement.style.transform = 'scale(' + scale + ') translateX(-50%)';
        documentPageCVElement.style['-o-transform'] = 'scale(' + scale + ') translateX(-50%)';
        documentPageCVElement.style['-webkit-transform'] = 'scale(' + scale + ') translateX(-50%)';
    
    
        documentPageCVElement.style['-webkit-transform-origin'] = 'top left';
        documentPageCVElement.style['-moz-transform-origin'] = 'top left';
        documentPageCVElement.style['-o-transform-origin'] = 'top left';
        documentPageCVElement.style['transform-origin'] = 'top left'; 
    
        documentPageCVElement.style.width = documentPageCV.width * scale;
        documentPageCVElement.style.height = documentPageCV.height * scale;
    
        documentPageCVElement.style.margin = '0 auto';
    }

    return(
        <div id='document-page' className="document-page">
            <MainMenu 
                generatePDF={generatePDF}
                menuItemSelected={menuItemSelected}
                setMenuItemSelected={setMenuItemSelected}
                getMenuContent={getMenuContent}
                useOnClickOutside={useOnClickOutside}
                isMenuActive={isMenuActive}
                setIsMenuActive={setIsMenuActive}
            />

            <div id='document-page-cv' className='document-page-cv'>
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
                    useOnClickOutside={useOnClickOutside}
                    currentBulletContentDetailSelected={currentBulletContentDetailSelected}
                    setCurrentBulletContentDetailSelected={setCurrentBulletContentDetailSelected}
                />
            </div>
        </div>
    )
}

export default MyDocumentPage;
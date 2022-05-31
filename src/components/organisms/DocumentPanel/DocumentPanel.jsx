import React, {useEffect, useRef} from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
import { getContent } from '../../../service/contentService';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import Panel from '../Panel/Panel';
import Profile from '../Profile/Profile';
import { template, template_type } from '../../../constants/Template';
import './DocumentPanel.scss';
import ProfileAvatar from '../../molecules/ProfileAvatar/ProfileAvatar';
import ProfileInfo from '../../molecules/ProfileInfo/ProfileInfo';
import ProfileSocial from '../../molecules/ProfileSocial/ProfileSocial';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { maxHeight } from '../../../constants/Variables';
import DocumentFooter from '../../molecules/DocumentFooter/DocumentFooter';
import { theme } from '../../../constants/Theme';
import {ReactComponent as Wave} from '../../../dist/wave-bg.svg';
import {ReactComponent as WaveBottom} from '../../../dist/wave-bottom-bg.svg';
import {ReactComponent as Line} from '../../../dist/line-bg.svg';
import {ReactComponent as LineBottom} from '../../../dist/line-bottom-bg.svg';
import {ReactComponent as HexCircuit} from '../../../dist/hex-circuit-bg.svg';
import {ReactComponent as HexCircuitBottom} from '../../../dist/hex-circuit-bottom-bg.svg';
import {ReactComponent as GraphDot} from '../../../dist/graph-dot-bg.svg';
import {ReactComponent as GraphDotBottom} from '../../../dist/graph-dot-bottom-bg.svg';
import {ReactComponent as Graph} from '../../../dist/graph-bg.svg';
import {ReactComponent as Triangle} from '../../../dist/triangle-bg.svg';
import {ReactComponent as TriangleBottom} from '../../../dist/triangle-bottom-bg.svg';

const DocumentPanel = (props) => {
    const {
        pages, setPages, isReOrder, setIsReOrder, currentTemplateType, currentThemeType, 
        currentColumnWidthAttr, colorHex, infoKeys, info, setInfo, socialData, 
        setIsOpenProfileModal
    } = props;

    const profileContainerRef = useRef();
    const profileSocialRef = useRef();
    const profileAvatarRef = useRef();
    const profileInfoRef = useRef();

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

    const onInputFieldChange = (event, setValue) => {
        const val = event.target.value;
        if(val !== ''){
            setValue(event.target.value);
        }
        else{
            setValue('');
        }
    }

    const createNewContent = (pageIndex, columnIndex, childId, childIndex, atIndex) => {
        console.log('Going to create component at index: '+ atIndex)

        const currentChild = pages[pageIndex].columns[columnIndex].child[childIndex].data
        currentChild.splice(atIndex + 1, 0, getContent(childId))

        setPages(pages)
    }

    const removeContent = (pageIndex, columnIndex, childId, childIndex, atIndex) => {
        console.log('Removed component at index: '+ atIndex)

        if(pages[pageIndex].columns[columnIndex].child[childIndex].data.length > 1){
            pages[pageIndex].columns[columnIndex].child[childIndex].data.splice(atIndex, 1)
            setPages(pages)
        }
        else{
            console.log('cannot remove this child content')
        }
    }

    const moveContentDown = (pageIndex, columnIndex, childId, childIndex, atIndex) => {
        if(atIndex !== pages[pageIndex].columns[columnIndex].child[childIndex].data.length - 1){
            pages[pageIndex].columns[columnIndex].child[childIndex].data.move(atIndex, atIndex + 1)
            setPages([...pages])
        }
        else{
            console.log('cannot move child content down')
        }
    }

    const moveContentUp = (pageIndex, columnIndex, childId, childIndex, atIndex) => {
        if(atIndex > 0){
            pages[pageIndex].columns[columnIndex].child[childIndex].data.move(atIndex, atIndex - 1)
            setPages([...pages])
        }
        else{
            console.log('cannot move child content up')
        }
    }

    const removeBlock = (pageIndex, columnIndex, childIndex, setBlockHeaderStatus) => {
        pages[pageIndex].columns[columnIndex].child.splice(childIndex, 1)
        checkToMoveContent(pageIndex, columnIndex, childIndex, setBlockHeaderStatus, true)
    }

    const sumOfChildData = (childData) => {
        let sum = 0;
        childData.forEach(row => {
            row.forEach(c => {
                sum += c.height
            })
        })
        return sum
    }

    //sum of profile refs
    const sumOfTemplate = (i, columnIndex) => {
        if(currentTemplateType !== template_type.minimalist
            && currentTemplateType !== template_type.skilled_based
            && currentTemplateType !== template_type.functional){
            if(i === 0){
                return profileContainerRef.current.offsetHeight
            }
        }
        else{
            if(currentTemplateType === template_type.functional){
                if(i === 0){
                    if(pages[0].columns.length === 2){
                        if(columnIndex === 0){
                            return profileAvatarRef.current.offsetHeight + profileSocialRef.current.offsetHeight + 64 //offset margin based on css value
                        }
                        else if(columnIndex === 1){
                            return profileInfoRef.current.offsetHeight
                        }
                    }
                    else {
                        return profileContainerRef.current.offsetHeight
                    }
                }
            }
            if(currentTemplateType === template_type.minimalist || template_type.skilled_based){
                if(i === 0){
                    if(pages[0].columns.length === 2){
                        if(columnIndex === 0){
                            return profileAvatarRef.current.offsetHeight + 80 //offset margin based on css value
                        }
                        else if(columnIndex === 1){
                            return profileInfoRef.current.offsetHeight + profileSocialRef.current.offsetHeight + 64 //offset margin based on css value
                        }
                    }
                    else{
                        return profileContainerRef.current.offsetHeight
                    }
                }
            }
        }
        return 0
    }

    const checkToMoveContent = (pageIndex, columnIndex, childIndex, setBlockHeaderStatus, isDeleted) => {
        console.log("start calculating......")
        console.log('pages:', pages)

        const blockMarginTop = 80
        for(let i = 0; i < pages.length; i++){
            if(pages[i])
            {
                let sumPanelHeight = sumOfTemplate(i, columnIndex)
                
                pages[i].columns[columnIndex].child.forEach((item, index) => {
                    let headerHeight = item.height

                    let itemsHeight = 0
                    item.data.forEach(row => {
                        row.forEach(c => {
                            itemsHeight += c.height
                        })
                    })

                    if(index > 0) sumPanelHeight += headerHeight + itemsHeight + blockMarginTop
                    else sumPanelHeight += headerHeight + itemsHeight
                })

                console.log('-------------------------------')
                console.log('sum panel height at index: ' + i + ' is: ' + sumPanelHeight)

                if(sumPanelHeight > maxHeight){
                    console.log('++++++Move content to next page+++++++')
                    let currentRowData = pages[i].columns[columnIndex].child
                    let currentRowDataLength = currentRowData.length
                    // console.log(currentRowData)

                    let maximunIndex = 0
                    let sumOfEachRow = sumOfTemplate(i, columnIndex)

                    for(let j = 0; j < currentRowDataLength; j++){
                        const headerHeight = currentRowData[j].height
                        const childHeights = sumOfChildData(currentRowData[j].data)

                        if(j > 0) sumOfEachRow += headerHeight + childHeights + blockMarginTop
                        else sumOfEachRow += headerHeight + childHeights

                        console.log('header height: ' + headerHeight + ", at index: " + j + ", has child height: " + childHeights)

                        if(sumOfEachRow > maxHeight){
                            maximunIndex = j
                            if(maximunIndex === 0) maximunIndex = j + 1
                            console.log('Max index at:', maximunIndex)
                            break;
                        }
                    }

                    if(i >= pages.length - 1 && pages[0].columns.length === 2)
                    {
                        pages.push(
                            {
                                columns: [
                                    {
                                        child: []
                                    },
                                    {
                                        child: []
                                    }
                                ]
                            }
                        )
                    }
                    else if(i >= pages.length - 1 && pages[0].columns.length < 2){
                        pages.push(
                            {
                                columns: [
                                    {
                                        child: []
                                    }
                                ]
                            }
                        )
                    }

                    //store index to delete of the next page
                    let deletedIndexs = []
                    for(let j = currentRowDataLength - 1; j >= maximunIndex; j--){
                        const lastItemRowData = currentRowData[j]
                        pages[i + 1].columns[columnIndex].child.unshift(lastItemRowData)
                        deletedIndexs.push(j)
                    }
                    
                    //process to delete
                    for(let j = 0; j < deletedIndexs.length; j++){
                        currentRowData.pop()
                    }
                }
                else{
                    console.log('++++++Move content to previous page+++++++')
                    if(i < pages.length - 1){
                        const pagesLength = pages.length
                        for(let k = 0; k < pagesLength - 1; k++){
                            if(pages[k]){
                                let currentRowData = pages[k].columns[columnIndex].child
                                let currentRowDataLength = currentRowData.length
                                
                                let nextRowData = pages[k + 1].columns[columnIndex].child
                                const nextRowDataLength = nextRowData.length
                                
                                let sumOfCurrenthRow = sumOfTemplate(k, columnIndex)

                                for(let j = 0; j < currentRowDataLength; j++){
                                    const headerHeight = currentRowData[j].height
                                    const childHeights = sumOfChildData(currentRowData[j].data)

                                    if(j > 0) sumOfCurrenthRow += headerHeight + childHeights + blockMarginTop
                                    else sumOfCurrenthRow += headerHeight + childHeights
                                }
        
                                console.log('<<<<<<total height of current page:', sumOfCurrenthRow)
        
                                //store index to delete of the next page
                                let deletedIndexs = []
                                for(let j = 0; j < nextRowDataLength; j++){
                                    // if(!nextRowData[j]) break;
        
                                    const headerHeight = nextRowData[j].height
                                    const childHeights = sumOfChildData(nextRowData[j].data)
                                    
                                    //we plus blockMarginTop here because we need to calculate the first child of next page is last item of old previous page
                                    sumOfCurrenthRow += headerHeight + childHeights + blockMarginTop
        
                                    if(sumOfCurrenthRow < maxHeight){
                                        const firstItemNextRowData = nextRowData[j]
                                        pages[k].columns[columnIndex].child.push(firstItemNextRowData)
                                        deletedIndexs.push(j)
                                    }
                                    else break
                                }
        
                                //process to delete
                                for(let j = 0; j < deletedIndexs.length; j++){
                                    nextRowData.shift()
                                }
                            }
                        }
                    }
                }
            }
        }
        
        //clean up empty pages
        let pagesLength = pages.length - 1
        for(let i = pagesLength; i >= 0; i--){
            //we check another column still have data: if not we delete both, otherwise we keep the page
            const switchColumn = columnIndex === 0 ? (pages[0].columns.length === 2) ? 1: 0: 0;
            if(pages[i].columns[columnIndex].child.length === 0 && pages[i].columns[switchColumn].child.length === 0){
                pages.splice(i, 1)
            }
        }

        console.log('pages result:', pages)
        
        if(isDeleted){
            setBlockHeaderStatus(false)
        }

        setPages([...pages])
    }

    Array.prototype.move = function(from,to){
        this.splice(to,0,this.splice(from,1)[0]);
        return this;
    };

    const moveBlockUp = (pageIndex, columnIndex, childIndex, childBlockRef, parentBlockRef) => {
        if(childIndex - 1 >= 0)
        {
            pages[pageIndex].columns[columnIndex].child.move(childIndex, childIndex - 1)
        }
        else{
            if(pageIndex > 0){
                const previousPageHeight = parentBlockRef.current[pageIndex - 1].offsetHeight
                const currentBlockHeight = childBlockRef.current.offsetHeight
  
                if(previousPageHeight + currentBlockHeight <= 1024){
                    const removedBlock = pages[pageIndex].columns[columnIndex].child.shift()
                    pages[pageIndex - 1].child.push(removedBlock)
                    if(pages[pageIndex].columns[columnIndex].child.length === 0){
                        pages.pop()
                    }
                }
                else{
                    console.log('cannot move block to previous page')
                }
            }
        }
    }

    const moveBlockDown = (pageIndex, columnIndex, childIndex, childBlockRef, parentBlockRef) => {
        if(childIndex !== pages[pageIndex].columns[columnIndex].child.length - 1){
            pages[pageIndex].columns[columnIndex].child.move(childIndex, childIndex + 1)
        }
        else{
            if(pageIndex < pages.length - 1){
                const nextPageHeight = parentBlockRef.current[pageIndex + 1].offsetHeight
                const currentBlockHeight = childBlockRef.current.offsetHeight

                if(nextPageHeight + currentBlockHeight <= 1024){
                    if(pages[pageIndex].columns[columnIndex].child.length > 1){
                        const removedBlock = pages[pageIndex].columns[columnIndex].child.pop()
                        pages[pageIndex + 1].child.unshift(removedBlock)
                    }
                    else{
                        console.log('cannot move block to next page because there is at least one block in page')
                    }
                }
                else{
                    console.log('cannot move block to next page')
                }
            }
        }
    }

    const updateFieldHeight = (pageIndex, columnIndex, childIndex, currentIndex = -1, type, height) => {
        if(type === InputFieldType.header){
            if(pages[pageIndex].columns[columnIndex].child[childIndex]){
                pages[pageIndex].columns[columnIndex].child[childIndex].height = height
            }
        }
        else{
            if(pages[pageIndex].columns[columnIndex].child[childIndex]){
                pages[pageIndex].columns[columnIndex].child[childIndex].data[currentIndex].forEach(row => {
                    const firstProperty = Object.keys(row)[0]
                    if(firstProperty === type){
                        row.height = height
                    }
                })
            }
        }
    }

    const updateFieldData = (pageIndex, columnIndex, childIndex, currentIndex = -1, type, rootContent, contentToUpdate) => {
        if(type === InputFieldType.header){
            if(pages[pageIndex].columns[columnIndex].child[childIndex]){
                pages[pageIndex].columns[columnIndex].child[childIndex][type] = contentToUpdate
            }
        }
        else{
            if(contentToUpdate !== rootContent){
                if(pages[pageIndex].columns[columnIndex].child[childIndex]){
                    pages[pageIndex].columns[columnIndex].child[childIndex].data[currentIndex].forEach(row => {
                        const firstProperty = Object.keys(row)[0]
                        if(firstProperty === type){
                            row.status = true
                            row[firstProperty] = contentToUpdate
                        }
                    })
                }
            }
        }
    }
    
    const getColumnType = () => {
        const columnType = template[currentTemplateType]
        let dotType = false
        if(currentTemplateType === template_type.combined){
            if(pages[0].columns.length > 1){
                dotType = true
            }
        }
        else if(currentTemplateType === template_type.tech){
            dotType = true
        }
        if(columnType.columns === 2){
            return `two-column ${dotType ? 'dot': ''}`
        }
        else return `one-column ${dotType ? 'dot': ''}`
    }

    const getChildSpecialdIndex = (childId) => {
        const collection = []
        pages.forEach(page => {
            page.columns.forEach(column => {
                column.child.forEach(child => {
                    collection.push(child)
                })
            })
        })
        
        return collection.findIndex(child => child.id === childId)
    }

    useEffect(() => {
        if(isReOrder){
            console.log('+++++++++++page has changed++++++++++')
            //re-check two column of each page
            checkToMoveContent(0, 0)
            if(pages[0].columns && pages[0].columns.length > 1){
                checkToMoveContent(0, 1)
            }
            setIsReOrder(false)
        }
    })

    useEffect(() => {
        panelsRef.current = panelsRef.current.slice(0, pages.length);
    }, [pages]);

    function renderChildContent(pageIndex, columnIndex, childId, childIndex){
        const child =  pages[pageIndex].columns[columnIndex].child.find(c => c.id === childId)
        return <BlockWrapper
                    title={child.header} 
                    blockType={child.blockType}
                    data={child.data}
                    key={childIndex} 
                    pageIndex={pageIndex}
                    columnIndex={columnIndex}
                    childId={childId}
                    childIndex={childIndex}
                    handleOutsideClick={useOnClickOutside}
                    onInputFieldChange={onInputFieldChange} 
                    createNewContent={createNewContent}
                    checkToMoveContent={checkToMoveContent}
                    removeContent={removeContent}
                    removeBlock={removeBlock}
                    moveBlockUp={moveBlockUp}
                    parentRef={panelsRef}
                    moveBlockDown={moveBlockDown}
                    updateFieldData={updateFieldData}
                    updateFieldHeight={updateFieldHeight}
                    moveContentDown={moveContentDown}
                    moveContentUp={moveContentUp}
                    getChildSpecialdIndex={getChildSpecialdIndex}
                    currentTemplateType={currentTemplateType}
                />
    }

    function renderDocumentHeader(pageIndex) {
        if(pageIndex !== 0) return;

        if(currentTemplateType !== template_type.minimalist
            && currentTemplateType !== template_type.skilled_based
            && currentTemplateType !== template_type.functional){
            return(
                <div 
                    className='profile-block' 
                    ref={profileContainerRef}
                >
                    <Profile
                        currentTemplateType={currentTemplateType}
                        getColumnType={getColumnType}
                        currentColumnWidthAttr={currentColumnWidthAttr}
                        infoKeys={infoKeys}
                        info={info}
                        setInfo={setInfo}
                        socialData={socialData}
                        setIsOpenProfileModal={setIsOpenProfileModal}
                    />
                </div>
            )
        }
        else if(currentTemplateType === template_type.minimalist
            || currentTemplateType === template_type.skilled_based
            || currentTemplateType === template_type.functional){
            if(pages[0].columns.length === 1){
                return(
                    <div 
                        className='profile-block' 
                        ref={profileContainerRef}
                    >
                        <Profile
                            currentTemplateType={currentTemplateType}
                            getColumnType={getColumnType}
                            infoKeys={infoKeys}
                            info={info}
                            setInfo={setInfo}
                            socialData={socialData}
                            setIsOpenProfileModal={setIsOpenProfileModal}
                        />
                    </div>
                )
            }
        }
    }

    function renderSpecialHeader(pageIndex, columnIndex){
        if(currentTemplateType === template_type.minimalist
            || currentTemplateType === template_type.skilled_based){
            if(columnIndex === 0){
                return (
                    <React.Fragment>
                        {(pageIndex === 0 && pages[0].columns.length > 1) && 
                        (
                            <div className='profile-avatar-block' ref={profileAvatarRef}>
                                <ProfileAvatar />
                            </div>
                        )}
                        
                        {pages[0].columns.length === 2 && (
                            <div className='divider'>
                                {currentTemplateType === template_type.minimalist && (
                                    <div className='divider-wrapper'>
                                        <div className="divider-diamond top"></div>
                                        <div className="divider-diamond bottom"></div>
                                    </div>
                                )}
                            </div>
                        )}
                    </React.Fragment>
                )
            }
            else if(columnIndex === 1){
                return (
                    <React.Fragment>
                        {(pageIndex === 0 && (
                            <div className='profile-info-side' ref={profileInfoRef}>
                                <ProfileInfo 
                                    infoKeys={infoKeys}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            </div>
                        ))}

                        {(pageIndex === 0 && (
                            <div className='profile-social-side' ref={profileSocialRef}>
                                <ProfileSocial 
                                    getColumnType={getColumnType}
                                    socialData={socialData}
                                    setIsOpenProfileModal={setIsOpenProfileModal}
                                />
                            </div>
                        ))}
                    </React.Fragment>
                )
            }
        }
        else if(currentTemplateType === template_type.functional){
            if(columnIndex === 0){
                return (
                    <React.Fragment>
                        {(pageIndex === 0 && pages[0].columns.length > 1) && 
                        (
                            <div className='profile-avatar-block' ref={profileAvatarRef}>
                                <ProfileAvatar />
                            </div>
                        )}
                        
                        {(pageIndex === 0  && pages[0].columns.length > 1) && 
                        (
                            <div className='profile-social-side' ref={profileSocialRef}>
                                <ProfileSocial 
                                    getColumnType={getColumnType}
                                    socialData={socialData}
                                    setIsOpenProfileModal={setIsOpenProfileModal}
                                />
                            </div>
                        )}
                    </React.Fragment>
                )
            }
            else if(columnIndex === 1){
                return (
                    <React.Fragment>
                        {(pageIndex === 0 && (
                            <div className='profile-info-side' ref={profileInfoRef}>
                                <ProfileInfo 
                                    infoKeys={infoKeys}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            </div>
                        ))}
                    </React.Fragment>
                )
            }
        }
    }

    var i = 0;
    const pdf = new jsPDF({
        orientation: 'portrait',
    });

    function generatePDF(){
        if(i <= panelsRef.current.length - 1){
            html2canvas(panelsRef.current[i]).then(
                function(canvas) {
                    const imgData = canvas.toDataURL('image/png');
                    // const imgProps= pdf.getImageProperties(imgData);
                    
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = pdf.internal.pageSize.getHeight();

                    console.log(pdfWidth + "/" + pdfHeight)

                    if(i > 0){
                        pdf.addPage()
                    }
                    
                    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

                    if(i === panelsRef.current.length - 1){
                        pdf.save("download.pdf");
                    }

                    i++;
                    generatePDF(); // Important! - call the function again
                }
            )
        };
    }

    const renderTheme = (currentThemeType) => {
        switch(currentThemeType){
            case theme.basic_theme:
                return null
            case theme.triangle_theme:
                return (
                    <React.Fragment>
                        <div className='document-theme-container'>
                            <Triangle className={`document-theme ${currentThemeType}`}/>
                        </div>
                        <div className='document-theme-container'>
                            <TriangleBottom className={`document-theme ${currentThemeType}`}/>
                        </div>
                    </React.Fragment>
                )
            case theme.line_theme:
                return (
                    <React.Fragment>
                        <div className='document-theme-container'>
                            <Line className={`document-theme ${currentThemeType}`}/>
                        </div>
                        <div className='document-theme-container'>
                            <LineBottom className={`document-theme ${currentThemeType}`}/>
                        </div>
                    </React.Fragment>
                )
            case theme.hex_circuit_theme:
                return (
                    <React.Fragment>
                        <div className='document-theme-container'>
                            <HexCircuit className={`document-theme ${currentThemeType}`}/>
                        </div>
                        <div className='document-theme-container'>
                            <HexCircuitBottom className={`document-theme ${currentThemeType}`}/>
                        </div>
                    </React.Fragment>
                )
            case theme.graph_dot_theme:
                return (
                    <React.Fragment>
                        <div className='document-theme-container'>
                            <GraphDot className={`document-theme ${currentThemeType}`}/>
                        </div>
                        <div className='document-theme-container'>
                            <GraphDotBottom className={`document-theme ${currentThemeType}`}/>
                        </div>
                    </React.Fragment>
                )
            case theme.graph_theme:
                return (
                    <React.Fragment>
                        <div className='document-theme-container'>
                            <Graph className={`document-theme ${currentThemeType}`}/>
                        </div>
                    </React.Fragment>
                )
            case theme.wave_theme:
                return (
                    <React.Fragment>
                        <div className='document-theme-container'>
                            <Wave className={`document-theme ${currentThemeType}`}/>
                        </div>
                        <div className='document-theme-container'>
                            <WaveBottom className={`document-theme ${currentThemeType}`}/>
                        </div>
                    </React.Fragment>
                )
            default:
                return null;
        }
    }

    return(
        <div id='document' className="document">
            {pages && pages.map((page, pageIndex) => (
                <div 
                    key={pageIndex} 
                    ref={el => panelsRef.current[pageIndex] = el}
                    className={`document-wrapper ${currentTemplateType}` + (page.columns.length > 1 ? ' two-column': ' one-column') + (pageIndex > 0 ? ' new': '')}
                    style={{color: `${colorHex}`}}
                >
                    {renderTheme(currentThemeType)}
                    {renderDocumentHeader(pageIndex)}

                    <div 
                        className={`document-container ${currentTemplateType}` + (page.columns.length > 1 ? ' two-column': ' one-column') + (pageIndex > 0 ? ' new': '')}
                        style={{minHeight: `${pageIndex === 0 && profileContainerRef.current ? (maxHeight - profileContainerRef.current.offsetHeight): maxHeight}px`}}
                    >
                        {page && page.columns.map((column, columnIndex) => (
                            <div 
                                key={columnIndex} 
                                className='column'
                                data-column_level={columnIndex !== 0 ? currentColumnWidthAttr && (100 - currentColumnWidthAttr): currentColumnWidthAttr}
                            >
                               {renderSpecialHeader(pageIndex, columnIndex)}
                               <Panel 
                                    pageIndex={pageIndex}
                                    externalClassName={(page.columns.length > 1 && columnIndex === 0) ? " left": (page.columns.length === 1 && columnIndex === 0) ? " left": " right"}
                                >
                                   {column.child && (
                                       column.child.map((child, childIndex) => {
                                           return(renderChildContent(pageIndex, columnIndex, child.id, childIndex)
                                       )})
                                   )}
                               </Panel>
                           </div>
                        ))}
                    </div>

                    <DocumentFooter 
                        pageIndex={pageIndex}
                        pageLength={pages.length}
                    />
                </div>
            ))}
            <button onClick={generatePDF}>Generate PDF</button>
        </div>
    )
}

export default DocumentPanel;
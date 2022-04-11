import React, {useEffect, useRef, useState} from 'react';
import { InputFieldType } from '../../../constants/InputFieldType';
import { MetaData, rootData } from '../../../constants/MetaData';
import { getContent } from '../../../service/contentService';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import CertificateBlock from '../CertificateBlock/CertificateBlock';
import EducationBlock from '../EducationBlock/EducationBlock';
import OrganizationBlock from '../OrganizationBlock/OrganizationBlock';
import Panel from '../Panel/Panel';
import PersonalProjectBlock from '../PersonalProjectBlock/PersonalProjectBlock';
import WorkBlock from '../WorkBlock/WorkBlock';
import './DocumentPanel.scss';

const DocumentPanel = () => {
    const [pages, setPages] = useState(MetaData)
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

    const createNewContent = (pageIndex, childId, childIndex, atIndex) => {
        console.log('Going to create component at index: '+ atIndex)

        const currentChild = pages[pageIndex].child[childIndex].data
        currentChild.splice(atIndex + 1, 0, getContent(childId))

        setPages(pages)
    }

    const removeContent = (pageIndex, childId, childIndex, atIndex) => {
        console.log('Removed component at index: '+ atIndex)

        if(pages[pageIndex].child[childIndex].data.length > 1){
            pages[pageIndex].child[childIndex].data.splice(atIndex, 1)
            setPages(pages)
        }
        else{
            console.log('cannot remove this child content')
        }
    }

    const moveContentDown = (pageIndex, childId, childIndex, atIndex) => {
        if(atIndex !== pages[pageIndex].child[childIndex].data.length - 1){
            pages[pageIndex].child[childIndex].data.move(atIndex, atIndex + 1)
            setPages([...pages])
        }
        else{
            console.log('cannot move child content down')
        }
    }

    const moveContentUp = (pageIndex, childId, childIndex, atIndex) => {
        if(atIndex > 0){
            pages[pageIndex].child[childIndex].data.move(atIndex, atIndex - 1)
            setPages([...pages])
        }
        else{
            console.log('cannot move child content up')
        }
    }

    const removeBlock = (pageIndex, childIndex, setBlockHeaderStatus) => {
        pages[pageIndex].child.splice(childIndex, 1)
        checkToMoveContent(pageIndex, childIndex, setBlockHeaderStatus, true)
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

    const checkToMoveContent = (pageIndex, childIndex, setBlockHeaderStatus, isDeleted) => {
        console.log("start calculating......")
        console.log('pages:', pages)

        const maxHeight = 1000
        for(let i = 0; i < panelsRef.current.length; i++){
            if(pages[i])
            {
                let sumPanelHeight = 0
                pages[i].child.forEach((item, index) => {
                    let headerHeight = item.height

                    let itemsHeight = 0
                    item.data.forEach(row => {
                        row.forEach(c => {
                            itemsHeight += c.height
                        })
                    })

                    sumPanelHeight += headerHeight + itemsHeight
                })

                console.log('-------------------------------')
                console.log('sum panel height at index: ' + i + ' is: ' + sumPanelHeight)

                if(sumPanelHeight > maxHeight){
                    console.log('++++++Move content to next page+++++++')
                    let currentRowData = pages[i].child
                    let currentRowDataLength = currentRowData.length
                    // console.log(currentRowData)

                    let maximunIndex = 0

                    let sumOfEachRow = 0
                    for(let j = 0; j < currentRowDataLength; j++){
                        const headerHeight = currentRowData[j].height
                        const childHeights = sumOfChildData(currentRowData[j].data)
                        sumOfEachRow += headerHeight + childHeights
                        console.log('header height: ' + headerHeight + ", at index: " + j + ", has child height: " + childHeights)

                        if(sumOfEachRow > maxHeight){
                            maximunIndex = j
                            if(maximunIndex == 0) maximunIndex = j + 1
                            console.log('Max index at:', maximunIndex)
                            break;
                        }
                    }

                    if(i >= pages.length - 1)
                    {
                        pages.push({parent: {}, child: []})
                    }

                    //store index to delete of the next page
                    let deletedIndexs = []
                    for(let j = currentRowDataLength - 1; j >= maximunIndex; j--){
                        const lastItemRowData = currentRowData[j]
                        pages[i + 1].child.unshift(lastItemRowData)
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
                                let currentRowData = pages[k].child
                                let currentRowDataLength = currentRowData.length
                                
                                let nextRowData = pages[k + 1].child
                                const nextRowDataLength = nextRowData.length
                                
                                let sumOfCurrenthRow = 0
                                for(let j = 0; j < currentRowDataLength; j++){
                                    const headerHeight = currentRowData[j].height
                                    const childHeights = sumOfChildData(currentRowData[j].data)
                                    sumOfCurrenthRow += headerHeight + childHeights
                                }
        
                                console.log('<<<<<<total height of current page:', sumOfCurrenthRow)
                                console.log(i)
        
                                //store index to delete of the next page
                                let deletedIndexs = []
                                for(let j = 0; j < nextRowDataLength; j++){
                                    // if(!nextRowData[j]) break;
        
                                    const headerHeight = nextRowData[j].height
                                    const childHeights = sumOfChildData(nextRowData[j].data)
                                    
                                    sumOfCurrenthRow += headerHeight + childHeights
        
                                    if(sumOfCurrenthRow < maxHeight){
                                        console.log(nextRowData[j])
                                        const firstItemNextRowData = nextRowData[j]
                                        pages[k].child.push(firstItemNextRowData)
                                        deletedIndexs.push(j)
                                    }
                                    else break
                                }
        
                                //process to delete
                                for(let j = 0; j < deletedIndexs.length; j++){
                                    console.log(deletedIndexs[j])
                                    nextRowData.shift()
                                }
                            }
                        }
                    }
                }
            }
        }
        
        //clearn up empty pages
        let pagesLength = pages.length - 1
        for(let i = pagesLength; i >= 0; i--){
            if(pages[i].child.length === 0){
                pages.pop()
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

    const moveBlockUp = (pageIndex, childIndex, childBlockRef, parentBlockRef) => {
        if(childIndex - 1 >= 0)
        {
            pages[pageIndex].child.move(childIndex, childIndex - 1)
            setPages([...pages])
        }
        else{
            if(pageIndex > 0){
                const previousPageHeight = parentBlockRef.current[pageIndex - 1].offsetHeight
                const currentBlockHeight = childBlockRef.current.offsetHeight
  
                if(previousPageHeight + currentBlockHeight <= 1024){
                    const removedBlock = pages[pageIndex].child.shift()
                    pages[pageIndex - 1].child.push(removedBlock)
                    if(pages[pageIndex].child.length == 0){
                        pages.pop()
                    }
                    setPages([...pages])
                }
                else{
                    console.log('cannot move block to previous page')
                }
            }
        }
    }

    const moveBlockDown = (pageIndex, childIndex, childBlockRef, parentBlockRef) => {
        if(childIndex !== pages[pageIndex].child.length - 1){
            pages[pageIndex].child.move(childIndex, childIndex + 1)
            setPages([...pages])
        }
        else{
            if(pageIndex < pages.length - 1){
                const nextPageHeight = parentBlockRef.current[pageIndex + 1].offsetHeight
                const currentBlockHeight = childBlockRef.current.offsetHeight

                if(nextPageHeight + currentBlockHeight <= 1024){
                    if(pages[pageIndex].child.length > 1){
                        const removedBlock = pages[pageIndex].child.pop()
                        pages[pageIndex + 1].child.unshift(removedBlock)
                        setPages([...pages])
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

    const updateFieldHeight = (pageIndex, childIndex, currentIndex = -1, type, height) => {
        if(type === InputFieldType.header){
            if(pages[pageIndex].child[childIndex]){
                pages[pageIndex].child[childIndex].height = height
                setPages([...pages])
            }
        }
        else{
            if(pages[pageIndex].child[childIndex]){
                pages[pageIndex].child[childIndex].data[currentIndex].forEach(row => {
                    const firstProperty = Object.keys(row)[0]
                    if(firstProperty === type){
                        row.height = height
                        setPages([...pages])
                    }
                })
            }
        }
    }

    const updateFieldData = (pageIndex, childIndex, currentIndex = -1, type, rootContent, contentToUpdate) => {
        if(type === InputFieldType.header){
            if(pages[pageIndex].child[childIndex]){
                pages[pageIndex].child[childIndex][type] = contentToUpdate
                setPages([...pages])
            }
        }
        else{
            if(contentToUpdate !== rootContent){
                if(pages[pageIndex].child[childIndex]){
                    pages[pageIndex].child[childIndex].data[currentIndex].forEach(row => {
                        const firstProperty = Object.keys(row)[0]
                        if(firstProperty === type){
                            row.status = true
                            row[firstProperty] = contentToUpdate
                            setPages([...pages])
                        }
                    })
                }
            }
        }
    }

    useEffect(() => {
        panelsRef.current = panelsRef.current.slice(0, pages.length);
    }, [pages]);

    function renderChildContent(pageIndex, childId, childIndex){
        const child =  pages[pageIndex].child.find(c => c.id == childId)
        return <BlockWrapper
                    title={child.header} 
                    blockType={child.blockType}
                    data={child.data}
                    key={childIndex} 
                    pageIndex={pageIndex}
                    childId={childId}
                    childIndex={childIndex}
                    handleOutsideClick={useOnClickOutside}
                    onInputFieldChange={onInputFieldChange} 
                    createNewContent={createNewContent}
                    checkToMoveContent={checkToMoveContent}
                    removeContent={removeContent}
                    removeBlock={removeBlock}
                    parentRef={panelsRef}
                    moveBlockUp={moveBlockUp}
                    moveBlockDown={moveBlockDown}
                    updateFieldData={updateFieldData}
                    updateFieldHeight={updateFieldHeight}
                    moveContentDown={moveContentDown}
                    moveContentUp={moveContentUp}
                />
    }

    return(
        <div className="document">
            {pages && pages.map((page, pageIndex) => (
                <div key={pageIndex} 
                     ref={el => panelsRef.current[pageIndex] = el}>
                    <Panel pageIndex={pageIndex}>
                        {page.child && (
                            page.child.map((child, childIndex) => {
                                return(renderChildContent(pageIndex, child.id, childIndex)
                            )})
                        )}
                    </Panel>
                </div>
            ))}
        </div>
    )
}

export default DocumentPanel;
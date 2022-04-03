import React, {useEffect, useRef, useState} from 'react';
import CertificateBlock from '../CertificateBlock/CertificateBlock';
import EducationBlock from '../EducationBlock/EducationBlock';
import OrganizationBlock from '../OrganizationBlock/OrganizationBlock';
import Panel from '../Panel/Panel';
import PersonalProjectBlock from '../PersonalProjectBlock/PersonalProjectBlock';
import WorkBlock from '../WorkBlock/WorkBlock';
import './DocumentPanel.scss';

const DocumentPanel = () => {
    const [pages, setPages] = useState([
        {
            parent: {},
            child: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},
                {id: 2},
            ]
        },
        {
            parent: {},
            child: [
                {id: 1},
                {id: 3},
                {id: 2},
                {id: 5},
                {id: 4},
                {id: 2},
            ]
        }
    ])
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

    const onInputFieldChange = (event, setValue, setIsHide) => {
        const val = event.target.value;
        if(val !== ''){
            setIsHide(false);
            setValue(event.target.value);
        }
        else{
            setIsHide(true);
            setValue('');
        }
    }

    const createNewContent = (atIndex, contentList, setContentList) => {
        console.log('Going to create component at index: '+ atIndex)
        contentList.splice(atIndex + 1, 0, contentList.length)
        setContentList([...contentList])
    }

    const removeContent = (atIndex, contentList, setContentList) => {
        console.log('Removed component at index: '+ atIndex)
        contentList.splice(atIndex, 1)
        setContentList([...contentList])
    }

    const removeBlock = (pageIndex, childIndex) => {
        pages[pageIndex].child.splice(childIndex, 1)
        setPages([...pages])
    }

    const checkToMoveContent = () => {
        for(let i = 0; i < panelsRef.current.length; i++){
            const height = panelsRef.current[i].offsetHeight
            // console.log(height)
            if(height > 1300){
                console.log('start moving last block at page ' + i + ' to new page')
                moveContentToNextBlock(i)
            }
        }
    }

    function moveContentToNextBlock(index){
        if(index >= pages.length - 1){
            pages.push({
                parent: {},
                child: []
            })
        }

        let lastCurrentContent = pages[index].child.pop();
        pages[index + 1].child.unshift(lastCurrentContent)
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
        if(childIndex + 1 < pages.length){
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

    useEffect(() => {
        panelsRef.current = panelsRef.current.slice(0, pages.length);
    }, [pages]);

    function renderChildContent(pageIndex, childId, childIndex){
        switch(childId){
            case 1:
                return <EducationBlock 
                        key={childIndex} 
                        pageIndex={pageIndex}
                        childId={childId}
                        childIndex={childIndex}
                        handleOutsideClick={useOnClickOutside}
                        onInputFieldChange={onInputFieldChange} 
                        createNewContent={createNewContent}
                        checkToMoveContent={checkToMoveContent}
                        removeContent={removeContent}
                        parentRef={panelsRef}
                        moveBlockUp={moveBlockUp}
                        moveBlockDown={moveBlockDown}/>
            case 2:
                return <WorkBlock 
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
                        moveBlockDown={moveBlockDown}/>
            case 3:
                return <OrganizationBlock 
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
                        moveBlockDown={moveBlockDown}/>
            case 4:
                return <CertificateBlock 
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
                        moveBlockDown={moveBlockDown}/>
            case 5:
                return <PersonalProjectBlock 
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
                        moveBlockDown={moveBlockDown}/>
        }
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
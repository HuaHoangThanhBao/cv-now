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
                {id: 2},
                {id: 1},
                {id: 3},
                {id: 4},
                {id: 5},
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
            if(height > 1800){
                console.log('stat moving last block at page ' + i + ' to new page')
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
        // console.log(lastCurrentContent)
        // console.log('page index:', index)
        // console.log('next page index:', index + 1)

        pages[index + 1].child.unshift(lastCurrentContent)
        // console.log('number of pages:', pages)

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
            console.log(parentBlockRef.current[pageIndex].offsetHeight)
        }
        else{
            if(pageIndex > 0){
              const previousPageHeight = parentBlockRef.current[pageIndex - 1].offsetHeight
              const currentBlockHeight = childBlockRef.current.offsetHeight

              console.log('previous page height:', previousPageHeight)

              if(previousPageHeight + currentBlockHeight < 1300){
                  const removedBlock = pages[pageIndex].child.shift()
                  pages[pageIndex - 1].child.push(removedBlock)
                  setPages([...pages])
              }
              else{
                  console.log('cannot move block to previous page')
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
                        moveBlockUp={moveBlockUp}/>
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
                        moveBlockUp={moveBlockUp}/>
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
                        moveBlockUp={moveBlockUp}/>
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
                        moveBlockUp={moveBlockUp}/>
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
                        moveBlockUp={moveBlockUp}/>
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
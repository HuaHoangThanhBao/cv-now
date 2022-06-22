import React, {useState, useRef, useEffect} from 'react'

function DragNDrop(props) {
    const {data, setPages, handleTransformToOneColumn, setIsDragChange, resetCurrentBlockSelected} = props
    const [list, setList] = useState(data); 
    const [dragging, setDragging] = useState(false);
    const [noNeedDragging, setNoNeedDragging] = useState(false);
    const [noNeedDraggingOver, setNoNeedDraggingOver] = useState(false);
    const [noNeedList, setNoNeedList] = useState([])

    //use for drag and drop of pages
    const dragItem = useRef();
    const dragItemNode = useRef();
    const noNeedItem = useRef();

    //use for drag and drop of no need panal
    const rootDragNoNeedItem = useRef();
    const dragNoNeedItem = useRef();
    const dragNoNeedItemNode = useRef();
    
    const handletDragStart = (e, item) => {
        console.log('Starting to drag', item)

        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd)
        dragItem.current = item;

        setTimeout(() => {
            setDragging(true); 
        },0)       
    }

    const handleDragEnter = (e, targetItem) => {
        console.log('Entering a drag target', targetItem)

        const currentDragItem = list[targetItem.pageIndex].columns[targetItem.columnIndex].child[dragItem.current.childIndex]
        console.log('drag enter current drag item:', currentDragItem)
        const {status, noNeedIndex} = checkForExists(currentDragItem)
        //if we drag outside the no need panel, we remove the item is stored in list
        if(status){
            noNeedItem.current = null
            noNeedList.splice(noNeedIndex, 1);
            setNoNeedList([...noNeedList])
        }
        else{
            if (dragItemNode.current !== e.target) {
                console.log('Target is NOT the same as dragged item')
                setList(oldList => {
                    let newList = JSON.parse(JSON.stringify(oldList))
                    newList[targetItem.pageIndex].columns[targetItem.columnIndex].child
                        .splice(targetItem.childIndex, 0, newList[dragItem.current.pageIndex].columns[dragItem.current.columnIndex].child
                        .splice(dragItem.current.childIndex, 1)[0])
                    dragItem.current = targetItem;
                    return newList
                })
            }
        }
    }

    const handleDragEnd = (e) => {
        console.log('drag end')
        
        const {status} = checkForExists(noNeedItem.current);
        if(status){
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[dragItem.current.pageIndex].columns[dragItem.current.columnIndex].child
                    .splice(dragItem.current.childIndex, 1)
                return newList
            })
        }

        setDragging(false);
        dragItemNode.current.removeEventListener('dragend', handleDragEnd)
    }

    const getStyles = (item) => {
        if(dragItem.current && item){
            if (dragItem.current.pageIndex === item.pageIndex && dragItem.current.columnIndex === item.columnIndex && dragItem.current.childIndex === item.childIndex) {
                return "dnd-item current"
            }
        }
        return "dnd-item"
    }
    
    const getNoNeedStyles = (item) => {
        if(dragNoNeedItem.current){
            const {pageIndex, columnIndex, childIndex} = dragNoNeedItem.current
            if (pageIndex === item.pageIndex && columnIndex === item.columnIndex && childIndex === item.childIndex){
                return "dnd-item-wrapper current"
            }
        }
        return "dnd-item-wrapper"
    }

    const getNoNeedItemStyles = (noNeedItem) => {
        if(dragItem.current && dragging){
            const currentDragItem = list[dragItem.current.pageIndex].columns[dragItem.current.columnIndex].child[dragItem.current.childIndex];
            if(currentDragItem){
                return dragging && currentDragItem.id === noNeedItem.id ? 'drag-no-need-item current': 'drag-no-need-item'
            }
        }
        else if(dragNoNeedItem.current){
            if(rootDragNoNeedItem.current){
                const {noNeedIndex} = rootDragNoNeedItem.current
                const currentNoNeedDragging = noNeedList[noNeedIndex]
                if(currentNoNeedDragging){
                    if(noNeedDraggingOver){
                        return noNeedDragging && currentNoNeedDragging.id === noNeedItem.id ? 'drag-no-need-item current': 'drag-no-need-item'
                    }
                    else if(noNeedDragging){
                        return noNeedDragging && currentNoNeedDragging.id === noNeedItem.id ? 'drag-no-need-item current': 'drag-no-need-item'
                    }
                    else if(!noNeedDragging){
                        return noNeedDragging ? 'drag-no-need-item current': 'drag-no-need-item unactive'
                    }
                }
            }
        }
        else {
            return 'drag-no-need-item'
        }
    }

    const handleColumnDragEnter = (e, targetItem) => {
        console.log('no need drag enter')
        console.log(targetItem)

        if (dragNoNeedItemNode.current !== e.target) {
            console.log('Target is NOT the same as no need dragged item')
            const {noNeedIndex} = rootDragNoNeedItem.current
            const currentNoNeedDragging = noNeedList[noNeedIndex]
            if(currentNoNeedDragging){
                const {status, pageIndex, columnIndex, childIndex} = checkForExists(currentNoNeedDragging)
                //check if list already has 'current no need item drag' in no need list, if not we append it to list
                if(!status){
                    list[targetItem.pageIndex].columns[targetItem.columnIndex].child.splice(targetItem.childIndex, 0, currentNoNeedDragging)
                    dragNoNeedItem.current = targetItem
                    setList([...list])
                }
                else//if we found no need item in list, we delete the old item to prevent duplicate when we add a new one
                {
                    list[pageIndex].columns[columnIndex].child.splice(childIndex, 1)
                    list[targetItem.pageIndex].columns[targetItem.columnIndex].child.splice(targetItem.childIndex, 0, currentNoNeedDragging)
                    dragNoNeedItem.current = targetItem
                    setList([...list])
                }
            }
        }
    }

    const handleNoNeedItemDragStart = (e, item) => {
        console.log('Starting to drag no need item', item)

        dragNoNeedItemNode.current = e.target;
        dragNoNeedItemNode.current.addEventListener('dragend', handleNoNeedItemDragEnd)
        dragNoNeedItem.current = item;
        rootDragNoNeedItem.current = item;

        setTimeout(() => {
            setNoNeedDragging(true); 
        },0)     
    }

    const handleNoNeedItemDragEnter = (e) => {
        const currentDragItem = list[dragItem.current.pageIndex].columns[dragItem.current.columnIndex].child[dragItem.current.childIndex];
        noNeedItem.current = currentDragItem
        console.log('??????current drag no need item from is:', currentDragItem)
        const {status} = checkForExists(currentDragItem);
        if(!status){
            noNeedList.splice(0, 0, currentDragItem)
            setNoNeedList([...noNeedList])
        }
    }

    const handleNoNeedItemDragEnd = (e) => {
        console.log('drag no need end')
        setNoNeedDraggingOver(false);
        setNoNeedDragging(false);
        dragNoNeedItemNode.current.removeEventListener('dragend', handleNoNeedItemDragEnd)
    }

    const handleNoNeedItemDragOver = (e) => {
        const {noNeedIndex} = rootDragNoNeedItem.current
        const currentNoNeedDragging = noNeedList[noNeedIndex]
        if(currentNoNeedDragging){
            const {status, pageIndex, columnIndex, childIndex} = checkForExists(currentNoNeedDragging)
            if(status){
                setNoNeedDraggingOver(true)
                list[pageIndex].columns[columnIndex].child.splice(childIndex, 1)
                dragNoNeedItem.current = null
                setList([...list])
            }
        }
    } 

    const checkForExists = React.useCallback((currentDragItem) => {
        for(const [pageIndex, page] of list.entries()){
            for(const [columnIndex, column] of page.columns.entries()){
                for(const [childIndex, child] of column.child.entries()){
                    if(currentDragItem){
                        if(child.id === currentDragItem.id){
                            for(const [noNeedIndex, noNeedItem] of noNeedList.entries()){
                                if(noNeedItem.id === currentDragItem.id){
                                    return {noNeedIndex: noNeedIndex, pageIndex: pageIndex, columnIndex: columnIndex, childIndex: childIndex, status: true}
                                }
                            }
                        }
                    }
                }
            }
        }
        return {status: false}
    }, [list, noNeedList])

    const reOrderPages = React.useCallback(() => {
        setPages([...list])
        //This is a fake step to make re-order after draging is done
        setIsDragChange(true)
    }, [list, setIsDragChange, setPages])

    const onCheckOneColumnCheckBox = (e) => {
        handleTransformToOneColumn(e.target.checked);
    }

    useEffect(() => {
        setList(data);
    }, [setList, data])

    useEffect(() => {
        if(!dragging && dragItemNode.current !== null){
            console.log('---------start re-order---------')
            dragItem.current = null;
            dragItemNode.current = null;
            resetCurrentBlockSelected()
            reOrderPages()
        }
    }, [list, dragging, reOrderPages, resetCurrentBlockSelected])

    useEffect(() => {
        if(!noNeedDragging && dragNoNeedItemNode.current !== null){
            console.log('---------start re-order when no need---------')
            
            //after we drag end, we remove 'current no need item drag' from no need list
            if(rootDragNoNeedItem.current && !noNeedDraggingOver){
                const {noNeedIndex} = rootDragNoNeedItem.current
                const currentNoNeedDragging = noNeedList[noNeedIndex]
                const {status} = checkForExists(currentNoNeedDragging)
                //check if pages have no need item that we dragged into
                if(status){
                    noNeedList.splice(noNeedIndex, 1)
                }
            }

            rootDragNoNeedItem.current = null
            dragNoNeedItem.current = null;
            dragNoNeedItemNode.current = null;
            
            reOrderPages()
        }
    }, [list, noNeedList, noNeedDragging, noNeedDraggingOver, checkForExists, reOrderPages])

    if (list) {
        return (                
            <div>
                <div className='drag-wrapper'>
                    <div className={`drag-n-drop ${list[0].columns.length === 1 ? 'one-column': ''}`}>
                        {list.map((page, pageIndex) => (
                            page.columns.map((column, columnIndex) => (
                                <div key={columnIndex} 
                                    className='dnd-group'
                                    onDragEnter={dragging && !column.child.length ? (e) => handleDragEnter(e, {pageIndex, columnIndex, childIndex: 0}): null}
                                >
                                    <div className='group-title'>Page: {pageIndex}, Column: {columnIndex}</div>
                                    <div 
                                        key={columnIndex} 
                                        className='dnd-group-block'
                                    >
                                        {column.child.length !== 0 && column.child.map((child, childIndex) => (
                                            <div 
                                                key={child.id} 
                                                onDragEnter={noNeedDragging ? (e) => handleColumnDragEnter(e, {pageIndex, columnIndex, childIndex}): null}
                                                className={noNeedDragging ? getNoNeedStyles({pageIndex, columnIndex, childIndex}): "dnd-item-wrapper"}
                                            >
                                                <div 
                                                    draggable 
                                                    onDragStart={(e) => handletDragStart(e, {childId: child.id, pageIndex, columnIndex, childIndex})} 
                                                    onDragEnter={dragging ? (e) => {handleDragEnter(e, {pageIndex, columnIndex, childIndex})}: null} 
                                                    className={dragging ? getStyles({pageIndex, columnIndex, childIndex}): "dnd-item"}
                                                >
                                                    {child.header}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                    <div className='drag-no-need-wrapper'>
                        <input 
                            type="checkbox" 
                            onChange={onCheckOneColumnCheckBox}
                        />
                        <label className='group-title'>One column</label>
                        <div>Drag and drop to Add or Remove sections.</div>
                        <div 
                            className='drag-no-need'
                            onDragEnter={dragging ? (e) => handleNoNeedItemDragEnter(e): null}
                            onDragOver={noNeedDragging ? (e) => handleNoNeedItemDragOver(e): null}
                        >
                            {noNeedList && noNeedList.map((noNeedItem, noNeedIndex) => (
                                <div 
                                    draggable
                                    className={getNoNeedItemStyles(noNeedItem)} 
                                    key={noNeedItem.header + noNeedIndex}
                                    onDragStart={(e) => handleNoNeedItemDragStart(e, {noNeedIndex})}
                                >
                                    {noNeedItem.header}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else { return null}

}

export default DragNDrop;
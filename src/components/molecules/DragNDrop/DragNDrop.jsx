import React, {useState, useRef, useEffect} from 'react'

function DragNDrop(props) {
    const {data, setPages, setIsReOrder} = props
    const [list, setList] = useState(data); 
    const [dragging, setDragging] = useState(false);
    const [noNeedDragging, setNoNeedDragging] = useState(false);
    const [noNeedList, setNoNeedList] = useState([])

    const dragItem = useRef();
    const dragItemNode = useRef();
    const noNeedItem = useRef();

    const rootDragNoNeedItem = useRef();
    const dragNoNeedItem = useRef();
    const dragNoNeedItemNode = useRef();

    useEffect(() => {
        setList(data);
    }, [setList, data])

    useEffect(() => {
        if(!dragging && dragItemNode.current !== null){
            console.log('---------start re-order---------')
            reOrderPages()
            dragItem.current = null;
            dragItemNode.current = null;
        }
    }, [list, dragging])
    
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
        const {status, index} = checkForExists(currentDragItem)
        //if we drag outside the no need panel, we remove the item is stored in list
        if(status){
            noNeedItem.current = null
            noNeedList.splice(index, 1);
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

    const reOrderPages = () => {
        setIsReOrder(true)
        setPages([...list])
    }

    const onNoNeedDragEnter = (e) => {
        const currentDragItem = list[dragItem.current.pageIndex].columns[dragItem.current.columnIndex].child[dragItem.current.childIndex];
        noNeedItem.current = currentDragItem
        console.log('??????current drag item from is:', currentDragItem)
        const {status} = checkForExists(currentDragItem);
        if(!status){
            noNeedList.splice(0, 0, currentDragItem)
            setNoNeedList([...noNeedList])
        }
    }

    const checkForExists = (currentDragItem) => {
        for(const [pageIndex, page] of data.entries()){
            for(const [columnIndex, column] of page.columns.entries()){
                for(const [childIndex, child] of column.child.entries()){
                    if(currentDragItem){
                        if(child.id === currentDragItem.id){
                            for(const [noNeedIndex, noNeedItem] of noNeedList.entries()){
                                if(noNeedItem.id === currentDragItem.id){
                                    return {index: noNeedIndex, status: true}
                                }
                            }
                        }
                    }
                }
            }
        }
        return {status: false}
    }

    const handleItemDragStart = (e, item) => {
        console.log('Starting to drag item 1', item)

        dragNoNeedItemNode.current = e.target;
        dragNoNeedItemNode.current.addEventListener('dragend', handleItemDragEnd)
        dragNoNeedItem.current = item;
        rootDragNoNeedItem.current = item;

        setTimeout(() => {
            setNoNeedDragging(true); 
        },0)     
    }

    const handleItemDragEnd = (e) => {
        console.log('drag item 1 end')
        setNoNeedDragging(false);
        dragNoNeedItemNode.current.removeEventListener('dragend', handleItemDragEnd)
    }

    const handleColumnDragEnter = (e, targetItem) => {
        console.log('no need drag enter')
        console.log(targetItem)

        if (dragNoNeedItemNode.current !== e.target) {
            console.log('Target is NOT the same as no need dragged item')
            const {index} = rootDragNoNeedItem.current
            const currentNoNeedDragging = noNeedList[index]
            if(currentNoNeedDragging){
                const {status, pageIndex, columnIndex, childIndex} = checkForNoNeedExists(currentNoNeedDragging)
                //check if list already has data in no need list, if not we append it to list
                if(!status){
                    list[targetItem.pageIndex].columns[targetItem.columnIndex].child.splice(targetItem.childIndex, 0, currentNoNeedDragging)
                    dragNoNeedItem.current = targetItem
                    setList([...list])
                }
                else//we we found no need item in list, we delete the old item to prevent duplicate when we add the new one
                {
                    list[pageIndex].columns[columnIndex].child.splice(childIndex, 1)
                    list[targetItem.pageIndex].columns[targetItem.columnIndex].child.splice(targetItem.childIndex, 0, currentNoNeedDragging)
                    dragNoNeedItem.current = targetItem
                    setList([...list])
                }
            }
        }
    }

    const checkForNoNeedExists = (currentDragItem) => {
        for(const [pageIndex, page] of data.entries()){
            for(const [columnIndex, column] of page.columns.entries()){
                for(const [childIndex, child] of column.child.entries()){
                    if(currentDragItem){
                        if(child.id === currentDragItem.id){
                            for(const [noNeedIndex, noNeedItem] of noNeedList.entries()){
                                if(noNeedItem.id === currentDragItem.id){
                                    return {pageIndex: pageIndex, columnIndex: columnIndex, childIndex: childIndex, status: true}
                                }
                            }
                        }
                    }
                }
            }
        }
        return {status: false}
    }
    
    useEffect(() => {
        if(!noNeedDragging && dragNoNeedItemNode.current !== null){
            console.log('---------start re-order when no need---------')
            reOrderPages()
            
            if(rootDragNoNeedItem.current){
                const {index} = rootDragNoNeedItem.current
                noNeedList.splice(index, 1)
                setNoNeedList([...noNeedList])
            }

            rootDragNoNeedItem.current = null
            dragNoNeedItem.current = null;
            dragNoNeedItemNode.current = null;
        }
    }, [list, noNeedDragging])

    if (list) {
        return (                
            <div>
                <div className='drag-wrapper'>
                    <div className="drag-n-drop">
                        {list.map((page, pageIndex) => (
                            page.columns.map((column, columnIndex) => (
                                <div key={columnIndex} 
                                    className='dnd-group'
                                >
                                    <div className='group-title'>Page: {pageIndex}, Column: {columnIndex}</div>
                                    <div key={columnIndex} className='dnd-group-1'>
                                        {column.child.length !== 0 && column.child.map((child, childIndex) => (
                                            <div 
                                                key={child.id} 
                                                onDragEnter={noNeedDragging ? (e) => handleColumnDragEnter(e, {pageIndex, columnIndex, childIndex}): null}
                                                className={noNeedDragging?getNoNeedStyles({pageIndex, columnIndex, childIndex}):"dnd-item-wrapper"}
                                            >
                                                <div 
                                                    draggable 
                                                    onDragStart={(e) => handletDragStart(e, {pageIndex, columnIndex, childIndex})} 
                                                    onDragEnter={dragging?(e) => {handleDragEnter(e, {pageIndex, columnIndex, childIndex})}:null} 
                                                    className={dragging?getStyles({pageIndex, columnIndex, childIndex}):"dnd-item"}
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
                        <input type="checkbox" />
                        <label className='group-title'>One column</label>
                        <div>Drag and drop to Add or Remove sections.</div>
                        <div 
                            className='drag-no-need'
                            onDragEnter={dragging ? (e) => onNoNeedDragEnter(e): null}
                        >
                            {noNeedList && noNeedList.map((noNeedItem, index) => (
                                <div 
                                    draggable
                                    className='drag-no-need-item' 
                                    key={noNeedItem.header + index}
                                    onDragStart={(e) => handleItemDragStart(e, {index})}
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
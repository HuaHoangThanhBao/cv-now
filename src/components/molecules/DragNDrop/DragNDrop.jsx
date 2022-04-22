import React, {useState, useRef, useEffect} from 'react'

function DragNDrop(props) {
    const {data, setPages, setIsReOrder} = props
    const [list, setList] = useState(data); 
    const [dragging, setDragging] = useState(false);

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

    const dragItem = useRef();
    const dragItemNode = useRef();
    
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
    const handleDragEnd = (e) => {
        console.log('drag end')
        if(dragItem.current.columnIndex === 2){
            console.log('we drag to no need zone')
        }
        setDragging(false);
        dragItemNode.current.removeEventListener('dragend', handleDragEnd)
    }
    const getStyles = (item) => {
        if (dragItem.current.pageIndex === item.pageIndex && dragItem.current.columnIndex === item.columnIndex && dragItem.current.childIndex === item.childIndex) {
            return "dnd-item current"
        }
        return "dnd-item"
    }
    const reOrderPages = () => {
        setIsReOrder(true)
        setPages([...list])
    }
    if (list) {
        return (                
            <div>
                <input type="checkbox" />
                <label className='group-title'>One column</label>
                <div className="drag-n-drop">
                    {list.map((page, pageIndex) => (
                        page.columns.map((column, columnIndex) => (
                            <div key={columnIndex} className='dnd-group'>
                                <div className='group-title'>Page: {pageIndex}, Column: {columnIndex}</div>
                                <div key={columnIndex} className='dnd-group-1'>
                                    {column.child.length !== 0 && column.child.map((child, childIndex) => (
                                        <div 
                                            draggable 
                                            key={child.id} 
                                            onDragStart={(e) => handletDragStart(e, {pageIndex, columnIndex, childIndex})} 
                                            onDragEnter={dragging?(e) => {handleDragEnter(e, {pageIndex, columnIndex, childIndex})}:null} 
                                            className={dragging?getStyles({pageIndex, columnIndex, childIndex}):"dnd-item"}
                                        >
                                            {child.header}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        )
    } else { return null}

}

export default DragNDrop;
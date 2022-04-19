import React from 'react';
import './Board.scss';
import DragNDrop from '../../molecules/DragNDrop/DragNDrop';

const data = [
    {title: 'group 1', items: ['1','2','3']},
    {title: 'group 2', items: ['4','5']},
    {title: 'no need', items: []},
]

const Board = (props) => {
    return (
        <div className='board'>
            <DragNDrop data={data}/>
        </div>
    )
}

export default Board;
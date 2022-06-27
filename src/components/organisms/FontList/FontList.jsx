import React from 'react';
import './FontList.scss';

const FontList = () => {
    return (
        <div className='font-container'>
            <div className="font-list">
                <button className="font-list-btn">Ubuntu</button>
                <button className="font-list-btn">Roboto</button>
                <button className="font-list-btn">Railway</button>
                <button className="font-list-btn">Quicksand</button>
                <button className="font-list-btn">Merriweather Sans</button>
            </div>
            <hr />
            <div className="font-size">
                <div className='font-size-item'>
                    <input type="radio" className='font-size-radio' name='font-size'/>
                    <span className='font-size-small'>Small</span>
                </div>
                <div className='font-size-item'>
                    <input type="radio" className='font-size-radio' name='font-size'/>
                    <span className='font-size-medium'>Medium</span>
                </div>
                <div className='font-size-item'>
                    <input type="radio" className='font-size-radio' name='font-size'/>
                    <span className='font-size-large'>Large</span>
                </div>
            </div>
        </div>
    )
}

export default FontList
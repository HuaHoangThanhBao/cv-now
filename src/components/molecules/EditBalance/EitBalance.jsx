import React from 'react';
import './EditBalance.scss';
import LeftArrow from './../../../dist/arrow-left.svg';
import RightArrow from './../../../dist/arrow-right.svg';

const EditBalance = ({onClick}) => {
    return(
        <div className="balance">
            <div className="balance-container">
                <div className="balance-holder">
                    <img src={LeftArrow}/>
                    {/* {<Icon} */}
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <div className="balance-inner"></div>
                </div>
                <div className="balance-holder">
                    <img src={RightArrow}/>
                    {/* {<Icon} */}
                </div>
            </div>
        </div>
    )
}

export default EditBalance;
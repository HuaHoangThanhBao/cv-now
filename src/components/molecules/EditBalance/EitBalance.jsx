import React from 'react';
import './EditBalance.scss';
import {ReactComponent as LeftArrow} from './../../../dist/arrow-left.svg';
import {ReactComponent as RightArrow} from './../../../dist/arrow-right.svg';
import { template_type } from '../../../constants/Template';
import {minColumnLevel, maxColumnLevel} from '../../../constants/Variables';

const EditBalance = (props) => {
    const {pageColumnsCount, currentTemplateType, currentColumnWidthAttr, setCurrentColumnWidthAttr} = props;

    const mouseEnter = (e) => {
        const _this = e.target;
        const line = document.getElementById('balance-line');
        line.style.display = "block"
        line.style.left = _this.dataset.column_level + "%"
    }
    
    const mouseLeave = (e) => {
        const line = document.getElementById('balance-line');
        line.style.display = "none"
    }

    return(
        <div className="balance">
            {pageColumnsCount === 2 &&
            (
                currentTemplateType === template_type.basic ||
                currentTemplateType === template_type.executive ||
                currentTemplateType === template_type.simple ||
                currentTemplateType === template_type.professional ||
                currentTemplateType === template_type.colleage ||
                currentTemplateType === template_type.modern ||
                currentTemplateType === template_type.combined
            )
            && (
                <React.Fragment>
                    <div className='balance-fake-panel'>
                        
                    </div>
                    <div className="balance-container">
                        <div 
                            className={`balance-left-holder ${currentColumnWidthAttr === minColumnLevel ? 'unactive': ''}`}
                            onClick={() => {setCurrentColumnWidthAttr(prevValue => prevValue - 1)}}
                        >
                            <LeftArrow width={30} height={30}/>
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 48 ? 'active': ''}`}
                            data-column_level="48"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(48)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 49 ? 'active': ''}`}
                            data-column_level="49"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(49)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 50 ? 'active': ''}`}
                            data-column_level="50"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(50)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 51 ? 'active': ''}`}
                            data-column_level="51"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(51)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 52 ? 'active': ''}`}
                            data-column_level="52"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(52)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 53 ? 'active': ''}`}
                            data-column_level="53"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(53)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 54 ? 'active': ''}`}
                            data-column_level="54"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(54)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 55 ? 'active': ''}`}
                            data-column_level="55"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(55)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 56 ? 'active': ''}`}
                            data-column_level="56"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(56)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 57 ? 'active': ''}`}
                            data-column_level="57"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(57)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 58 ? 'active': ''}`}
                            data-column_level="58"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(58)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 59 ? 'active': ''}`}
                            data-column_level="59"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(59)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 60 ? 'active': ''}`}
                            data-column_level="60"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(60)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-holder ${currentColumnWidthAttr === 61 ? 'active': ''}`}
                            data-column_level="61"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            onClick={() => setCurrentColumnWidthAttr(61)}
                        >
                            <div className="balance-inner"></div>
                            
                        </div>
                        <div 
                            className={`balance-right-holder ${currentColumnWidthAttr === maxColumnLevel ? 'unactive': ''}`}
                            onClick={() => {setCurrentColumnWidthAttr(prevValue => prevValue + 1)}}
                        >
                            <RightArrow width={30} height={30}/>
                        </div>
                        <div id='balance-line' className="balance-line"></div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default EditBalance;
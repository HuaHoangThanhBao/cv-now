import React from 'react';
import './Panel.scss';

const Panel = (props) => {
    const {externalClassName} = props;
    return(
        <div className={'panel' + externalClassName}>
            {props.children}
        </div>
    )
}

export default Panel;
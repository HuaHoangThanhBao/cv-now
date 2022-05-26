import React from "react";
import { SketchPicker } from "react-color";
import './ColorList.scss';

const ColorList = (props) => {
    const {colorRbg, setColorRbg, setColorHex} = props;

    const handleChange = (color) => {
        setColorHex(color.hex);
        setColorRbg(color.rgb);
    }

    return(
        <div className="color">
            <SketchPicker  
                color={colorRbg}
                onChange={handleChange}
            />
        </div>
    )
}

export default ColorList;
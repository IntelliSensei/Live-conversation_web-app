import './css/ColorPicker.css'
import React, { FC } from "react";


export interface IColorOptions {
    options: {
        key: string,
        value: number;
    }
}


export const ColorPicker: FC<IColorOptions> = ({options}:IColorOptions) => {
    return (

        <div className="ColorPicker-input">
            <label>
                Pick color:
                <select name="selectList" id="selectList">
                    <option key="1" value='Green'>Green</option>
                    <option key="2" value={'Yellow'}>Yellow</option>
                    <option key="3" value={'Blue'}>Blue</option>
                </select>
            </label>
        </div>
    )
}


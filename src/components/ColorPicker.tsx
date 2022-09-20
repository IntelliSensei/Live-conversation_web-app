import React from "react"
import './css/ColorPicker.css'

// add interface


export default function ColorPicker() {
    return (
        <div className="ColorPicker-input">
            <label>
                Text colour:
                <br />
                <select name="selectList" id="selectList">
                    <option key="option 1">Green</option>
                    <option key="option 2">Yellow</option>
                    <option key="option 3">Blue</option>
                </select>
            </label>
        </div>
    )
}



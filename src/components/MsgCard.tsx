import React from "react"
import './css/MsgCard.css'

export default function MsgCard() {
    return (
        <div className="MsgCard-input">
            <label>
                Message: 
                <br />
                <input type="text" name="Message"/>
              </label>
        </div>
    )
}


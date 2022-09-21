import React from "react"
import './css/MsgCard.css'

export default function MsgCard() {
    return (
        <div className="MsgCard-input">
            <label>
                Message:
                <input type="text" name="Message"/>
              </label>
        </div>
    )
}


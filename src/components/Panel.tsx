import React from 'react'
import Alias from './Alias';
import ColourPicker from './ColorPicker';
import MsgCard from './MsgCard';
import './css/Panel.css'

// Add colour picker + alias + message (incl send button)
// add states to colour + alias, add on change to message

export default function Panel(){
    return(
        <div className='Panel-box'> 
            <ColourPicker />
            <Alias />
            <MsgCard />
        </div>
    )
}
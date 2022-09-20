import React from 'react';
import { TextField } from './components/input';
import { DropDown } from './components/input/Dropdown';
import Panel from './components/Panel';


export default function App() {
    return (
     <div>
      <TextField label='test' />
      <TextField placeholder='12313' onChange={(nv) => {console.log("nv", nv)}}/>
      <DropDown label='color' />
     </div>
  );
}


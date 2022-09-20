import React from 'react';
import './App.css';
import { TextField } from './components/input';
import Panel from './components/Panel';


export default function App() {
    return (
     <div>
    <TextField label='test' />
    <TextField placeholder='12313' onChange={(nv) => {console.log("nv", nv)}}/>
     </div>
  );
}


import React from 'react'
import './App.css';
import { ObjectUseState } from './components/Rect_Render/Immutable_State/ObjectUseState';
import { ArrayUseState } from './components/Rect_Render/Immutable_State/ArrayUseState';


function App() {
  return (
    <div className='App'>
     <ObjectUseState/>
     <ArrayUseState/>
    </div>
  );
}

export default App;

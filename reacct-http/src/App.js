import React from 'react'
import './App.css';
import FocusInput from './components/useRef_Hook/FocusInput';
import ClassTimer from './components/useRef_Hook/ClassTimer';
import HookTimer from './components/useRef_Hook/HookTimer';

function App() {
  return (
    <div className='App'>
   <FocusInput/>
   <ClassTimer/>
   <HookTimer/>
    </div>
  );
}

export default App;

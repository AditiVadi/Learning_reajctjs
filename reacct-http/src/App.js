import React from 'react'
import './App.css';
import DocTitleOne from './components/Custom_Hooks/DocTitleOne';
import DocTitleTwo from './components/Custom_Hooks/DocTitelTwo';
import CounterOne from './components/Custom_Hooks/CounterOne';
import CounterTwo from './components/Custom_Hooks/CounterTwo';
import UserForm from './components/Custom_Hooks/UserForm';

function App() {
  return (
    <div className='App'>
      <DocTitleOne/>
      <DocTitleTwo/>
      <CounterOne/>
      <CounterTwo/>
      <UserForm/>
    </div>
  );
}

export default App;

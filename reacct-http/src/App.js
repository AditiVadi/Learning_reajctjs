
import React from 'react';
import './App.css';
import CompC from './components/Hooks/Context/CompC';
//import DataFetching from './components/Hooks/DataFetching';
//import IntervalHookCounter from './components/Hooks/IntervalHookCounter';
//import HookMouse from './components/Hooks/HookMouse';
//import MouseContainer from './components/Hooks/MouseContainer';
//import Useeffectcount from './components/Hooks/Useeffectcount';
//import HookswithArray from './components/Hooks/HookswithArray';
//import HokkCounterThree from './components/Hooks/HokkCounterThree';
//import HookCounter from './components/Hooks/HookCounter';
//import HookCounterTwo from './components/Hooks/HookCounterTwo';
//import PostForm from './components/PostForm';
//import PostList from './components/PostList';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/*<PostList/>
      <PostForm/>
      <HookCounter/>
      <HookCounterTwo/>
      <HokkCounterThree/>
      <HookswithArray/>
      <Useeffectcount/>
      <HookMouse/>
      <MouseContainer/>
      <IntervalHookCounter/>
      <DataFetching/>*/}
      <UserContext.Provider value={'aditi'}>
        <ChannelContext.Provider value={'code'}>
          <CompC />
        </ChannelContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;

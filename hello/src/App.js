import React, { Component } from 'react';//must
import './App.css';
// import PortalDemo from './components/PortalDemo';
// import NameList from './components/NameList';
// import LifecycleA from './components/LifecycleA';
// import FregmentDemo from './components/FregmentDemo';
// import Table from './components/Table'
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import User from './components/User';
// import Counters from './components/Counters';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import  Counter  from './components/Counter'
import CompC from './components/CompC';
import { UserProvider } from './components/userContext';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Mapmethod from './components/Mapmethod';
//import  Hello  from './components/Hello'
//import  Msg  from './components/Msg'
//import  FunctionClick from './components/FunctionClick'
//import  ClassClick from './components/ClassClick'
//import  EventBind from './components/EventBind'
//import  PareCom from './components/PareCom'
//import  ChildCom from './components/ChildCom'
//import HookCounterFour from './HookCounterFour'
//import {Users} from './components/Users'//export na karvu hoy to
//import  UserGreeting from './components/UserGreeting'
// import  Stylesheet from './components/Stylesheet'
//  import  Inlinecss from './components/Inlinecss'
// import  './appStyles.css'
// import styles from './appStyles.module.css' 


// function App() {

//   return (
//     <div className="App">
//       {/* <h1 className='error'> error</h1>
//       <h1 className={styles.success}>success </h1>
//       <Inlinecss/>
//      <Stylesheet primary={true}/>
//       {/*<Mapmethod/>
//        <UserGreeting></UserGreeting>
//       <Greet name="aditi" heroname="wonderwomen">
//         <p> This is children props</p>
//       </Greet>
//       <Greet name="vidhi" heroname="batman">
//         <button>action</button>
//       </Greet>
//       <Welcome name="aditi" heroname="wonderwomen"></Welcome>
//       <Welcome name="vidhi" heroname="batman"  ></Welcome>
//       <Welcome></Welcome>
//       <Msg></Msg>
//       <Counter></Counter>
//       <FunctionClick></FunctionClick>
//       <ClassClick></ClassClick>
//       <EventBind></EventBind>}

//   <PareCom> </PareCom>
//    <HookCounterFour/>*/}


//       { /*<Hello></Hello>*/}
//     </div>
//   );
// }


// import Froms from './components/Froms';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<Greet name='aditi' heroname='jjj'/>
      <Welcome name='aditi' heroname='jjj'/>
         <Froms/> */}
        {/* <LifecycleA/> */}
        {/* <FregmentDemo/> */}
        {/* <Table/> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput/> */}
        {/* <ErrorBoundary>
        <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Superman"/> 
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Joker"/> 
        </ErrorBoundary>
        <ClickCounter/>
        <HoverCounter /> */}
        {/*<NameList/>
        <PortalDemo/>
        <ClickCounterTwo/>
        <HoverCounterTwo/>
        <User render={(isLoggedIn)=>isLoggedIn?'Aditi':"Gest"}/>
        <Counters>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount}/>)
          } </Counters>
          <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>)
          } />*/}
          <UserProvider value="aditi">
          <CompC/>
          </UserProvider>
          
      </div>
    )
  }
}




export default App;
//<Greet></Greet >
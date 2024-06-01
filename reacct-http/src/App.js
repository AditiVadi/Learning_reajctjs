
import './App.css';
import HookCounter from './components/Hooks/HookCounter';
import HookCounterTwo from './components/Hooks/HookCounterTwo';
//import PostForm from './components/PostForm';
//import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      {/*<PostList/>
      <PostForm/>*/}
      <HookCounter/>
      <HookCounterTwo/>
    </div>
  );
}

export default App;

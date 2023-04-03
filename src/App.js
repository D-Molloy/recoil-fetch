
import { Suspense } from 'react';
import './App.css';
import {
  RecoilRoot,

} from 'recoil';
// import Main from './Tutorial/Main';
import TodoList from './Todo/TodoList';
import TodoForm from './Todo/TodoForm';


function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <header className="App-header">
          {/* <Main /> */}
          {/* Suspense is needed  */}
          <Suspense fallback={<h1>Loading...</h1>}>
            <TodoForm />
            <TodoList />
          </Suspense>
        </header>
      </RecoilRoot>
    </div >
  );
}

export default App;

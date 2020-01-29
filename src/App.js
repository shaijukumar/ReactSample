import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ParentComponent from './components/ParentComponent'
import UserGreetings from './components/UserGreetings'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form'
//import NameList from './components/NameList'
//import NameList from './components/NameList'
//import NameList from './components/NameList'
//import NameList from './components/NameList'

function App() {
  return (
    <div className="App">
      {/* 
      <Counter />
      <Greet name="Tom" age="30">children</Greet>
      <Greet name="Jack" age="20">
        <button>Test</button>
      </Greet>
      <Welcome name="SK" />

      <Message />

      <FunctionClick></FunctionClick>

      <ParentComponent></ParentComponent>

      <UserGreetings></UserGreetings>

       <NameList></NameList>

       <Stylesheet primary={true}></Stylesheet>
       <Inline></Inline>
*/}



      <Form></Form>


    </div>

  );
}

export default App;

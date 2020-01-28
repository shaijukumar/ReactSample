import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'

function App() {
  return (
    <div className="App">

      <Counter />
      <Greet name="Tom" age="30">children</Greet>
      <Greet name="Jack" age="20">
        <button>Test</button>
      </Greet>
      <Welcome name="SK" />

      <Message />

      <FunctionClick></FunctionClick>

    </div>

  );
}

export default App;

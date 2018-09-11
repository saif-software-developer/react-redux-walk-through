import React,{ Component } from 'react';
import './App.css';
import Counter from './Counter.js';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <Counter store={store}> </Counter>

      </div>
    );
  }
}

export default App;

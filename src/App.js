import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './components/Chat';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      nickname: null
    }
  }

  onSelectNickname(e) {
    e.preventDefault();
    if (this.input.value !== '') {
      this.setState({ nickname: this.input.value });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.nickname ? (
          <Chat nickname={this.state.nickname} />        
        ) : (
          <form onSubmit={(e) => this.onSelectNickname(e)}>
            <h1>Choose your nickname</h1>
            <input type="text" ref={ref => this.input = ref} placeholder="Type nickname..." />
            <button type="submit">Select</button>
          </form>
        )}
      </div>
    );
  }
}

export default App;

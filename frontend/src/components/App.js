import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import getNotes from './Api'

class App extends Component {

state = {
  notes: []
}

componentDidMount = () => {
  getNotes()
  .then(data => this.setState({notes: data}))
}

  render() {

    const {notes} = this.state
    
    return (
      <div className="app">
        <Header />
        <NoteContainer notes={notes} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

state = {
  notes: [],
  selectedNote: null,
  editBtn: false
}

getNotes() {
  return fetch('http://localhost:3000/api/v1/notes')
  .then(resp => resp.json())
}

componentDidMount = () => {
  this.getNotes()
  .then(data => this.setState({notes: data}))
}

selectNote = (note) => {
  this.setState({selectedNote: note})
  this.setState({editBtn: false})
}

editNote = (note) => {
  this.setState({editBtn: true})
}

saveEditNote = (e, note) => {
  e.preventDefault()

  return fetch('http://localhost:3000/api/v1/notes'+ `/${note.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: e.target.title.value,
      body: e.target.body.value
    })
  })
    .then(resp => resp.json())
    .then(json => this.setState({selectedNote: json}))
    .then(this.setState({editBtn: false}))
}

cancelEdit = () => {
  this.setState({editBtn: false})
}

componentDidUpdate = () => {
  this.getNotes()
  .then(data => this.setState({notes: data}))
}

  render() {

    const {notes, selectedNote, editBtn} = this.state

    return (
      <div className="app">
        <Header />
        <NoteContainer notes={notes} selectedNote={selectedNote} editBtn={editBtn} selectNote={this.selectNote} editNote={this.editNote} saveEditNote={this.saveEditNote} cancelEdit={this.cancelEdit} />
      </div>
    );
  }
}

export default App;

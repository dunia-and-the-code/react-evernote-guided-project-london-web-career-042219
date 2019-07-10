import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    selectedNote: null,
    editForm: false,
    createForm: false,
    searchTerm: '',
    sortByOption: null
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
    this.setState({ selectedNote: note })
    this.setState({ editForm: false })
  }

  editNote = (note) => {
    this.setState({ editForm: true })
  }

  saveEditNote = (note) => {

    return fetch('http://localhost:3000/api/v1/notes' + `/${note.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: note.title,
        body: note.body
      })
    })
      .then(resp => resp.json())
      .then(json =>  this.getNotes()
                      .then(data => this.setState({ notes: data, selectedNote: json })))
  }

  cancelEdit = () => {
    this.setState({ editForm: false })
  }

  createNote = () => {
    this.setState({ createForm: true })
  }

  saveCreateNote = (e) => {
    e.preventDefault()

    return fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: e.target.title.value,
        body: e.target.body.value
      })
    })
    .then(resp => {
      this.getNotes()
      .then(data => this.setState({notes: data, createForm: false}))
    })
  }

filterNotes = () => {
    return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
}

updateSearchTerm = (e) => {
  this.setState({searchTerm: e.target.value})
}

deleteNote = (note) => {
  return fetch('http://localhost:3000/api/v1/notes' + `/${note.id}`, {
      method: 'DELETE'
  })
  .then(resp => {
    this.getNotes()
    .then(data => this.setState({notes: data, selectedNote: null}))
  })
}

setSortByOption = (e) => {
  this.setState({sortByOption: e.target.value}, () => {
  
    if (this.state.sortByOption === 'Alphabetically') {
      this.setState({notes: this.state.notes.sort((a, b) => a.title.localeCompare(b.title))})
    } else if (this.state.sortByOption === 'Date') {
      this.setState({notes: this.state.notes.sort((a, b) => a.updated_at.localeCompare(b.updated_at))})
    } else {
      this.getNotes()
      .then(data => this.setState({notes: data}))
    }
  })
}


  render() {

    const { notes, selectedNote, editForm, createForm, searchTerm, sortByOption} = this.state

    return (
      <div className="app">
        <Header />
        <NoteContainer notes={this.filterNotes()} selectedNote={selectedNote} editForm={editForm} selectNote={this.selectNote}
          editNote={this.editNote} saveEditNote={this.saveEditNote} cancelEdit={this.cancelEdit} createNote={this.createNote} 
          createForm={createForm} saveCreateNote={this.saveCreateNote} updateSearchTerm={this.updateSearchTerm} searchTerm={searchTerm}
          deleteNote={this.deleteNote} sortByOption={sortByOption} setSortByOption={this.setSortByOption} 
        />
      </div>
    );
  }
}

export default App;

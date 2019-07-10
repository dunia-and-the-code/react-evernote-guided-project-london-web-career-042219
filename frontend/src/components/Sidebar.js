import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteCreator from './NoteCreator'

class Sidebar extends Component {

  
  render() {

    const {notes, selectNote, handleClick, searchTerm} = this.props
    
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={notes} selectNote={selectNote} searchTerm={searchTerm} />
        <button onClick={handleClick}>New</button>
      </div>
    );
  }
}

export default Sidebar;

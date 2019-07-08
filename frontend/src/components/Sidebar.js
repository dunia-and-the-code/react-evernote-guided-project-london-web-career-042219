import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {

    const {notes, selectNote} = this.props
    
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={notes} selectNote={selectNote} />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;

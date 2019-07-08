import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {

    const {notes, selectedNote, selectNote, editNote, editBtn, saveEditNote, cancelEdit} = this.props

    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={notes} selectNote={selectNote} />
          <Content note={selectedNote} editBtn={editBtn} editNote={editNote} saveEditNote={saveEditNote} cancelEdit={cancelEdit} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

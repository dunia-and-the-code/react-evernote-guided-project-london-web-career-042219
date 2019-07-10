import React, { Component, Fragment } from 'react';
import Search from './Search';
import SortBy from './SortBy';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {

    const {
            notes, selectedNote, selectNote, editNote, editForm, saveEditNote, cancelEdit, createNote, createForm, saveCreateNote, 
            searchTerm, updateSearchTerm, deleteNote, sortByOption, setSortByOption
          } = this.props

    return (
      <Fragment>
        <Search updateSearchTerm={updateSearchTerm} searchTerm={searchTerm} handleChange={updateSearchTerm} />
        <SortBy notes={notes} sortByOption={sortByOption} handleChange={setSortByOption}/>
        <div className='container'>
          <Sidebar notes={notes} selectNote={selectNote} handleClick={() => createNote()} searchTerm={searchTerm} />
          <Content note={selectedNote} editForm={editForm} editNote={editNote} saveEditNote={saveEditNote} 
                  cancelEdit={cancelEdit} createForm={createForm} saveCreateNote={saveCreateNote} deleteNote={deleteNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

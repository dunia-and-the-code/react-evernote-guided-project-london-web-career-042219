import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  
  // const {notes} = this.props

  return (
    <ul>
      {
        props.notes.map(note => <NoteItem key={note.id} note={note} handleClick={() => props.selectNote(note)} />)
      }
    </ul>
  );
}

export default NoteList;

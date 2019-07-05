import React from 'react';

const NoteList = (props) => (
  <li>
    <h2>{props.note.title}</h2>
    <p>Caption...</p>
  </li>
);

export default NoteList;

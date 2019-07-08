import React from 'react';

const NoteItem = (props) => (
  <li onClick={props.handleClick}>
    <h2>{props.note.title}</h2>
    <p>{
        props.note.body.split(' ').slice(0, 6).join(' ')
       }...
    </p>
  </li>
);

export default NoteItem;

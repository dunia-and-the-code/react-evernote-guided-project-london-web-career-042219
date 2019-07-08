import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
      <button onClick={props.handleClick}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;

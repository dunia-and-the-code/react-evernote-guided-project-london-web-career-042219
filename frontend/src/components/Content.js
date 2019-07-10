import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';
import NoteCreator from './NoteCreator'

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = (props) => {
    if (this.props.editForm === true) {
      return <NoteEditor note={this.props.note} handleClick={this.props.saveEditNote} cancelHandleClick={this.props.cancelEdit} /> 
    } else if (this.props.createForm === true) {
      return <NoteCreator note={this.props.note} handleClick={this.props.saveCreateNote} cancelHandleClick={this.props.cancelEdit} /> 
    } else if (this.props.note != null) {
      return <NoteViewer note={this.props.note} deleteNote={this.props.deleteNote} handleClick={() => this.props.editNote()} />
    } else {
      return <p>Select a Note</p>;
    }
  }

  render(props) {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent(props)}
      </div>
    );
  }
}

export default Content;

import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.props.handleClick(e, this.props.note)}>
        <input type="text" name="title" />
        <textarea name="body" />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={() => this.props.cancelHandleClick()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;

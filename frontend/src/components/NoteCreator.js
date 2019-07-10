import React, { Component } from 'react';

class NoteCreator extends Component {
  render() {
    return (
      <form className="note-creator" onSubmit={(e) => this.props.handleClick(e)}>
        <input type="text" name="title" placeholder="Song Title" />
        <textarea name="body" placeholder="Song lyrics." />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={() => this.props.cancelHandleClick()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteCreator;

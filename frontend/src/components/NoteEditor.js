import React, { Component } from 'react';

class NoteEditor extends Component {
//because we cannot edit props passed down to components, we pass them into states so we cna edit them
//we set values of the input boxes to the values in the states
//we then add onChange functions to each input which calls handleChange
//handleChange updates the selected input to the state which is then passed down as the new value of the input as setState will trigger a rerender
  constructor(props) {
    super(props)
    this.state = {
      title: props.note.title,
      body: props.note.body,
      id: props.note.id
    }
  }

  handleChange = (e) => {
    e.preventDefault()

    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.props.handleClick(this.state)}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <textarea name="body" value={this.state.body} onChange={this.handleChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={() => this.props.cancelHandleClick()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;

import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {

    const {notes} = this.props

    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={notes} />
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

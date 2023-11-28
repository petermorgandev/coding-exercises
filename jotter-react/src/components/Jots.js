import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Jots extends Component {
  render(){
    return this.props.jots.map((jot) => (
      <div className="tile is-child box content" key={jot.id}>
        <button className="button is-danger is-outlined is-small is-pulled-right deleteButton" onClick={this.props.deleteJot.bind(this, jot.id)}>Delete</button>
        <ReactMarkdown source={jot.content} />
      </div>
    ));
  }

};

Jots.propTypes = {
    jots: PropTypes.array
  }

export default Jots;

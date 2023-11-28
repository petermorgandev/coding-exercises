import React, { Component } from 'react';

class AddJotForm extends Component {
  state = {
    content: ''
  }

  onChange = (e) => this.setState({ content: e.target.value });

  onClick = (e) => {
    e.preventDefault();
    e.target.blur();
    this.props.addJot(this.state.content);
    this.setState({content: ''});
  }


  render(){
    return (
      <div className="column is-half-desktop">
        <div className="field">
          <textarea
            className="textarea is-info"
            placeholder="Add your jots in markdown"
            rows="5"
            value={this.state.content}
            onChange={this.onChange}
          ></textarea>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-info is-outlined" id="submitButton" onClick={this.onClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddJotForm;
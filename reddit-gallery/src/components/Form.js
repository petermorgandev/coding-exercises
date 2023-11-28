import React, { Component } from 'react';

class Form extends Component {
  state = {
    searchTerm: ''
  }

  onChange = (e) => this.setState({ searchTerm: e.target.value });

  onClick = (e) => {
    e.preventDefault();
    this.props.getPosts(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render(){
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <div className="input-group">
              <input className="input-group-field" type="text"
                value={this.state.searchTerm}
                onChange={this.onChange} />
              <div className="input-group-button">
                <input 
                  type="submit" 
                  className="button" 
                  value="Submit" 
                  onClick={this.onClick}  
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

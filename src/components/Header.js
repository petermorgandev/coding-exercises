import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <h1>Reddit Gallery</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <section className="hero is-bold is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Jotter-React
          </h1>
          <h2 className="subtitle">
            Jotter-React is a React app for storing small, temporary, notes.
          </h2>
        </div>
      </div>
    </section>
    );
  }
}

export default Header;

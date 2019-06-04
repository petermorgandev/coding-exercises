import React, { Component } from 'react';
import uuid from 'uuid';
import AddJotForm from './components/AddJotForm';
import Header from './components/Header';
import Jots from './components/Jots';

class App extends Component {
  state = {
    jots: []
  }

  deleteJot = (id) => {
    this.setState({ jots: [...this.state.jots.filter(jot => jot.id !== id)]})
  }

  addJot = (content) => {
    const newJot = {
      id: uuid.v4(),
      content
    };
    this.setState({ jots: [...this.state.jots, newJot] });
  }

  render(){
    return (
      <div className="container">
        <Header />
        <div className="columns">
          <AddJotForm  addJot={this.addJot} />
          <div className="column is-half">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-vertical" id="tileParent">
                <Jots jots={this.state.jots} deleteJot={this.deleteJot} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

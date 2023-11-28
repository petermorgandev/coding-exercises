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
      <div id="app">
        <Header />
        <section className="section">
          <div className="container">
            <div className="columns is-desktop">
              <AddJotForm addJot={this.addJot} />
              <div className="column is-half-desktop">
                <div className="tile is-ancestor">
                  <div
                    className="tile is-parent is-vertical"
                    id="tileParent"
                  >
                    <Jots
                      jots={this.state.jots}
                      deleteJot={this.deleteJot}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

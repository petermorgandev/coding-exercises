import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ImageWrapper from './components/ImageWrapper';

class App extends Component  {
  state = {
    posts: []
  }

  getPosts = (searchTerm) => {
    const url = `https://www.reddit.com/r/${searchTerm}/hot.json`
    fetch(url)
      .then(response => response.json())
      .then((result) => {
        this.setState({ posts: result.data.children });
      })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Form getPosts={this.getPosts} />
        <div className="grid-container">
        <div className="grid-x grid-margin-x">
        <ImageWrapper posts={this.state.posts} />
        </div></div>
      </div>
    );
  }
}

export default App;

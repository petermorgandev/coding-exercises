import React, { Component } from 'react';

class ImageWrapper extends Component {
  render(){
    return this.props.posts.map(post => (
      <div className="cell medium-6 grid-margin-x" key={post.data.id}>
        <div className="card">
          <div className="card-section">
          {post.data.url && post.data.url.match(/\.(jpg|png|jpeg|bpm|gif)$/) &&
            <p>
              <img src={post.data.url} alt="" />
            </p>
          }
          
            <p>
              <a href={"https://www.reddit.com" + post.data.permalink}>
                {post.data.title}
              </a>
            </p>
            <p>
              <i className="tiny material-icons">thumb_up</i>{" "}
              {post.data.ups}
            </p>
            <i className="tiny material-icons">thumb_down</i>{" "}
            {post.data.downs}
          </div>
        </div>
      </div>
    ));
  }
}

export default ImageWrapper;
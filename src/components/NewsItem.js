import React, { Component } from "react";

export default class NewsItem extends Component {
  
  render() {
    let { title, description, imgurl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
              rel="noreferrer"
            >
              Read more..
            </a>
          </div>
        </div>
       
      </div>
      
    );
  }
} 


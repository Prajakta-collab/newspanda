import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsUrl, author, publishedAt, source} =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
         <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}} >
          {source}
          </span>
          <img src={imgurl} className="card-img-top" alt="..." />
          

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {publishedAt}
              </small>
            </p>
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

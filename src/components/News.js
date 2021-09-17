import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class News extends Component {
 static defaultProps={
   pageSize:8,
   country:'in'
 }
 static propTypes={
   country: PropTypes.string,
   pageSize:PropTypes.number
 }
  constructor() {
    //after render method run hoto
    super();

    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87282f2d2bc14f2da2ac6b01c6a7c3f6&page2&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData.articles);
    this.setState({loading:false});
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    //console.log(this.articles);
  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87282f2d2bc14f2da2ac6b01c6a7c3f6&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    
    let parsedData = await data.json();
    this.setState({loading:false})
    this.setState({ page: this.state.page - 1, article: parsedData.articles });
    
  };
  handleNext = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87282f2d2bc14f2da2ac6b01c6a7c3f6&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
     this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})
    this.setState({ page: this.state.page + 1, article: parsedData.articles ,});
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsPanda- Top Headlines </h1>
      {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              class="btn btn-primary mx-2"
              onClick={this.handlePrev}
            >
              &larr; Previous
            </button>
            <button
            disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}
              type="button"
              class="btn btn-primary"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

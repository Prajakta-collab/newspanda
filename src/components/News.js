import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {
 static defaultProps={
   pageSize:8,
   country:'in',
   totalResults:0
 }
 static propTypes={
   country: PropTypes.string,
   pageSize:PropTypes.number
 }

  capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    //after render method run hoto
    super(props);

    this.state = {
      article: [],
      loading: false,
      page: 1,

    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsPanda`
  }
  async updateNews(page){
  const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    //console.log(parsedData.articles);
  
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  async componentDidMount() {
    this.props.setProgress(0)
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIKey}&page=1&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30)
    //console.log(data);
    let parsedData = await data.json();
    this.props.setProgress(70)
    //console.log(parsedData.articles);
    this.setState({loading:false});
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    //console.log(this.articles);
    // this.updateNews();
    this.props.setProgress(100)
  }
  handlePrev = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIKey}&page=${
    //   this.state.page - 1
    // }&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    
    // let parsedData = await data.json();
    // this.setState({loading:false})
    // this.setState({ page: this.state.page - 1, article: parsedData.articles });

    this.setState({page:this.state.page-1})
    this.updateNews(this.state.page);
    
  };
  handleNext = async () => {
   
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIKey}&page=${
    //   this.state.page + 1
    // }&pagesize=${this.props.pageSize}`;
    //  this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({loading:false})
    // this.setState({ page: this.state.page + 1, article: parsedData.articles ,});

    this.setState({page:this.state.page+1})
    this.updateNews();

  };

  fetchMoreData = async() => {
    
    this.setState({page:this.state.page+1});
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
  
    //console.log(data);
    let parsedData = await data.json();
    //console.log(parsedData.articles);
    
  
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
     
    });
   
  };
  render() {
    return (
      <>
        <h1 className="text-center">NewsPanda- Top Headlines </h1>
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
       
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt.slice(0,10)}
                  author={element.author?element.author:"Unknown"}
                  source={element.source.name}
                />
              </div>
             
            );
          })} </div></div>
        </InfiniteScroll>
          
        
        </>
      
    );
  }
}

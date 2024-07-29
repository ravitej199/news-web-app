import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

// import PropTypes from 'prop-types'




export class News extends Component {
 


  static defautProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }  

  // static propTypes= {
  //   country: this.PropTypes.string,
  //   pageSize: this.PropTypes.number,
  //   category: this.PropTypes.string,
  // }

 

  constructor(props){
      super(props)
      this.state = {
        articles: [],
        page : 1,
        disableNext: false,
        loading:true,
       
      }
       document.title =  "NewsGeek - " +  this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
        console.log(this.props)
  
      }
  async componentDidMount(){
    
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}&category=${this.props.category}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    this.setState({loading : false})
    
  }
  limit = (description) => {
    if (!description) {
      return '';
    }
    return description.slice(0, 80) +  '...';
    // console.log(words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : ''))
    // return words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : '');
  };

  handlePreviousClick = async () => {
    this.setState({loading : true})
 
    const page = this.state.page;
    this.setState({ page: page - 1 });
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}&category=${this.props.category}`
   
    const data = await fetch(url);
    const parsedData = await data.json();
    
    this.setState({ articles: parsedData.articles });
    this.setState({disableNext: false})
    this.setState({loading : false})

  };

  handleNextClick = async () => {
  
    this.setState({progres : 0})
    const page = this.state.page;
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}&category=${this.props.category}`
   const data = await fetch(url);
    const parsedData = await data.json();
    if(parsedData.articles.length !== 0){
      this.setState({ page: page + 1 });
      this.setState({ articles: parsedData.articles });
    }else{
      this.setState({disableNext: true})
    }
    this.setState({loading : false})
    
   
  };
  


  
  render() {


    
    return (
      <>
      {
        this.state.loading? 
       <Spinner/>
           :
           <div className='ml-5 mt-4'>
       
         <h1 className='font-semibold text-[32px]'>`NewsGeek  Top - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines`</h1>
       

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
      {this.state.articles.map((item)=>{
         if(item.urlToImage == null){
          return '';
         }
          return  <NewsItem key={item.title} title={item.title}description={this.limit(item.description)} Imgsrc={item.urlToImage} newsurl={item.url} author={item.author} date={item.publishedAt} source={item.source.name}/>
       
         })}
       </div>


       <div className="navbtns flex justify-between w-[70%] m-auto mt-5 mb-5">


          {this.state.page > 1? <button onClick={this.handlePreviousClick} className='bg-black text-white w-24 rounded-[5px] h-8'>&larr; Previous</button>
          : "" }
         
         {
          this.state.disableNext? "":    <button onClick={this.handleNextClick} disabled={this.state.disableNext} className='bg-black text-white w-24 rounded-[5px] h-8 '>Next &rarr;</button>
      
         }
       </div>

       </div>

      }

       </>
    )
  }
}

export default News

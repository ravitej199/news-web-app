import React, { Component } from 'react';

export class NewsItem extends Component {
 

  render() {
    let { title, description, Imgsrc, newsurl, author, date, source } = this.props;
    const utcDate = new Date(date.toString());
    const utcMilliseconds = utcDate.getTime();
    const istOffsetMilliseconds = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(utcMilliseconds + istOffsetMilliseconds);



    return (
      <div>
        <div className="card w-[300px] h-[550px] relative">
          <img src={Imgsrc} className="w-full  h-52 overflow-hidden" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-bold">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author} on {istDate.toString()}</small></p>
            <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary mt-1 absolute bottom-3">
              Read More
            </a>
            <h5 className="card-title">{title} <span className="position-absolute top-0 left-12  translate-middle badge rounded-pill bg-danger"> {source} </span> </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

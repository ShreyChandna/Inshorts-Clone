import React from 'react'
import Container from '@mui/material/Container';
import './NewsItems.css'
import NewsCards from './NewsCards';
const NewsItems = (props) => {
  return (
    <div>
          <Container maxWidth="md">
          <div className="content">
        <div className="downloads">
          <span className="downloadsText">
            For the best experience use <strong>inshorts</strong> app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
        {props.results.map((article)=>{
            const{title,author,description,url,urlToImage,content,source,publishedAt}=article;
       return <NewsCards key={title} title={title} author={author} description={description} url={url} image={urlToImage} content={content} source={source} date={publishedAt} />
    })}

          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => props.setPageSize(props.pagesize + 20)
           }
            >
              Load More
            </button>
          </>
      
        </div>
       
          </Container>
         
    </div>
  )
}

export default NewsItems

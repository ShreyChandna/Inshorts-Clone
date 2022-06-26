import React from 'react'

import NewsItems from './NewsItems';
const News = (props) => {


  return (
    <div>
       
    <NewsItems results={props.results} pagesize={props.pagesize} setPageSize={props.setPageSize} />
       
    
    </div>
  )
}


export default News

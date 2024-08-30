import React from 'react'
import formatDate from '../../utils/formatDate'

const formatData= (blogs)=>{
    return blogs.map((blog,index)=>({
        name:formatDate(blog.createdAt),
        post:blog.title.length,
        pv:blog.pageViews||0,
        amt:blog.amt||0,
    }))
}

const BlogsChart = ({blogs}) => {
    const data= formatData(blogs);
  return (
    <div>BlogsChart</div>
  )
}

export default BlogsChart
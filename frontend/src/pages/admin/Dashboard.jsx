import React, { useState } from 'react'
import { useFetchBlogsQuery } from '../../redux/features/blogs/blogsApi'
import BlogsChart from './BlogsChart';

const Dashboard = () => {
    const [query,setQuery]= useState({search:'',category:''})
    const {data:{posts}=[],error,isLoading}= useFetchBlogsQuery(query);
  return (
    <div className='pt-5 pb-5'>
        <BlogsChart blogs={posts}/>
    </div>
  )
}

export default Dashboard
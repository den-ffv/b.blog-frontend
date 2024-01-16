import React from 'react'
import BigCard from '../components/BigCard/BigCard'
import BlogCard from '../components/BlogCard/BlogCard'

function Blog() {
  return (
    <div>
        <BigCard/>
        <div style={{display: "flex",justifyContent: "space-between",  marginTop: 55}}>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
        <div style={{display: "flex",justifyContent: "space-between",  marginTop: 55}}>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
    </div>
  )
}

export default Blog
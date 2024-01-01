import React from 'react'
import { Link } from "react-router-dom";


function BlogCard() {
  return (
    <div className="col-3">
    <div className='blog-card'>
      <div className='card-image'>
        <img src='images/blog-1.jpg' className='img-fluid' alt='blog-img'/>
      </div>
      <div className='blog-card-content'>
      <p className='date'>1 Dec 2023</p>
      <h5 className='title'>Why Solid Tshirt Always Trending</h5>
      
      <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.</p>

      <Link to="/" className="button">Read More</Link>
      </div>
      
    </div>
      
    </div>
  )
}

export default BlogCard
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (

    <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">18 Nov, 2023</p>
            <h5 className="title">A beatiful sunday morning renaissance</h5>
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias 
              in eveniet voluptates, quis amet molestiae quibusdam doloribus id nihil molestias?</p>
       <Link to='/blog/:id' className='button'>Read more</Link>
        </div>
    </div>
  
  )
}

export default BlogCard
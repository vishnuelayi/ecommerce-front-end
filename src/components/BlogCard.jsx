import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  const { data } = props;
  
  // console.log(data);

  return (
    <div className='d-flex  gap-4'>
      {data?.map((item, index) => (
        <div key={index} className="blog-card w-25">
          <div className="card-image">
            <img src={item?.image} className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">18 Nov, 2023</p>
            <h5 className="title">{item?.title}</h5>
            <p className="desc" 
            dangerouslySetInnerHTML={{__html:item?.description.substr(0,70) + "..."}}></p>
            <Link to={`/blog/${item?.id}`} className="button">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;

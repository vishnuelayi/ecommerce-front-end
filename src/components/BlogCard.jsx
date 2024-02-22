import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  const { data } = props;
  // console.log(data);

  return (
    <div >
      {data?.map((item, index) => (
        <div key={index} className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
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

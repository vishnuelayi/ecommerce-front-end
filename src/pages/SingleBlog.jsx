import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
// import blog from "../images/blog-1.jpg"
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blog/blogSlice";

const SingleBlog = () => {
  const location = useLocation();
  const blogID = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getABlog(blogID));
  }, []);

  const blogState = useSelector((state) => state.blogs.singleBlog);

  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title}/>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title}</h3>
              <img
                src={blogState?.image}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p dangerouslySetInnerHTML={{__html:blogState?.description}}>
                
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;

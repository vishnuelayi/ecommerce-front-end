import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blog/blogSlice";
const Blog = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlogs())
  },[])

  const blogState = useSelector((state) => state.blogs.blogs)

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className=" mb-3">
              <BlogCard data = {blogState} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;

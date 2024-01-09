import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
// import blog from "../images/blog-1.jpg"
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import Container from '../components/Container'

const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog Name"}/>
    <BreadCrumb title="Dynamic Blog Name" />
    <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to="/blogs" className='d-flex align-items-center gap-10'>
                            <HiOutlineArrowLeft className='fs-4'/> Go back to Blogs
                            </Link>
                        <h3 className="title">
                            Lorem ipsum dolor sit amet consectetur
                        </h3>
                        <img src="images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus laborum, corporis blanditiis vel maiores ut tenetur odit sed enim, voluptatibus vero, eius beatae non alias quaerat quo expedita sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia reprehenderit ab ad cumque doloremque necessitatibus doloribus aspernatur commodi error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, commodi! </p>
                    </div>
                </div>
                </div>
           </Container>
    </>
    
  )
}

export default SingleBlog
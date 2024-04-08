import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getAproduct,
  getCart,
  getProducts,
  writeReview,
} from "../features/products/productsSlice";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  comment: Yup.string().required("Write something"),
  star:Yup.number().required("Rate your product")
});

const SingleProduct = () => {



  const formik = useFormik({
    initialValues: {
      comment: "",
      star:0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
 
      dispatch(writeReview({prodId:singleProdState?._id,comment:values?.comment,star:values?.star}))

      setTimeout(() => {;
        window.location.reload();
        formik.resetForm();
      }, 2000);
    },
  });

  const navigate = useNavigate();

  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [popularProducts, setPopularProducts] = useState([]);
  const location = useLocation();

  const prodId = location.pathname.split("/")[2];
  // console.log(prodId);

  function uploadCart() {
    if (color === null) {
      toast.error("Please select color");
    } else {
      dispatch(
        addToCart({
          productId: singleProdState?._id,
          quantity,
          color,
          price: singleProdState?.price,
        })
      );
    }
  }

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getAproduct(prodId));
    dispatch(getCart());
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartProducts?.length; index++) {
      if (prodId === cartProducts[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const products = useSelector((state) => state?.products?.products);

  const cartProducts = useSelector((state) => state?.products?.cartProducts);

  const singleProdState = useSelector(
    (state) => state?.products?.singleProduct
  );

 
  


  const [quantity, setQuantity] = useState(null);

  const [color, setColor] = useState(null);

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: singleProdState?.images[0]
      ? singleProdState?.images[0]
      : "https://eas-tech.net/wp-content/uploads/dummy-post-horisontal.jpg",
  };
  const [orderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  //for seperating popular products from the whole product list
  useEffect(() => {
    let data = [];
    for (let index = 0; index < products?.length; index++) {
      if (products[index]?.tag === "popular") {
        data.push(products[index]);
      }
    }
    setPopularProducts(data);
  }, [products]);

  return (
    <>
      <Meta title={singleProdState?.title} />
      <BreadCrumb title={singleProdState?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{singleProdState?.title}</h3>
              </div>

              <div className="border-bottom py-3">
                <p className="price">₹{singleProdState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={Number(singleProdState?.totalrating)}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
               
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{singleProdState?.brand?.title}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{singleProdState?.category?.title}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{singleProdState?.tag}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
               
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color</h3>
                  <div className="d-flex ">
                  {singleProdState?.color.map((item) => {
                    return <span  onClick={() => setColor(item?.title)} key={item._id} className="product-data border rounded  p-1 cursor">{item?.title} </span>
                  })}
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  {alreadyAdded === false && (
                    <div className="">
                      <input
                        type="number"
                        value={quantity}
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      />
                    </div>
                  )}
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      type="submit"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : uploadCart();
                      }}
                    >
                      {alreadyAdded ? "Go to cart" : "Add to cart"}
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <div>
                    <a href="#">
                      {" "}
                      <TbGitCompare className="fs-5 me-2" /> Compare
                    </a>
                  </div>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <div>
                    <a href="#">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-2">
                  <h3 className="product-heading">Shipping and Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders!
                    <br /> We ship all domestic in <b>5-10 business days</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Product Link :</h3>
                  {/* eslint-disable */}
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                  {/* eslint-enable */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>{singleProdState?.description}</p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10 ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={Number(singleProdState?.totalrating)}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15" onSubmit={formik.handleSubmit}>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={formik.values.star}
                      edit={true}
                      name="star"
                      onChange={(newRating) => formik.setFieldValue("star", newRating)}
                      onBlur= {formik.handleBlur("star")}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name="comment"
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      value={formik.values.comment}
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0" type="submit">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  {singleProdState?.ratings ? (
                    singleProdState?.ratings?.map((item, index) => {
                      return(
                      <div key={index}>
                        <div className="d-flex gap-10 align-items-center">
                          <h6 className="mb-0">{item?.postedBy?.firstname}</h6>
                          <ReactStars
                            count={5}
                            size={24}
                            value={item?.star}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>

                        <p className="mt-3">{item?.comment}</p>
                      </div>)
                    })
                  ) : (
                    <h4>No Reviews available for this product</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {popularProducts &&
            popularProducts?.map((item, index) => {
              return <ProductCard data={item} grid={4} key={index} />;
            })}
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
// import watch from '../images/watch.jpg';
import Container from "../components/Container";
import { getCart } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

const shippingSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address is Required"),
  city: yup.string().required("City is required"),
  pin: yup.number().required("Pin code is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
});

const Checkout = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      pin: "",
      state: "",
      country: "",
      apartment: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      setTimeout(() => {
        formik.resetForm();
      }, 2000);
    },
  });

  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState();
  const shippingCost = 150;

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const cartProducts = useSelector((state) => state.products.cartProducts);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartProducts?.length; index++) {
      sum = sum + cartProducts[index].price * cartProducts[index].quantity;
      setSubTotal(sum);
    }
  }, [cartProducts]);

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Ecomm</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /&nbsp;
                  <li className="breadcrumb-item  total-priceactive">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Patrick Ngure (patrickmangara@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
                onSubmit={formik.handleSubmit}
              >
                <div className="w-100">
                  <select
                    name="country"
                    className="form-control form-select is-invalid"
                    id="countrySelect"
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    value={formik.values.country}
                  >
                    <option value="" selected disabled>
                      {" "}
                      Select Country
                    </option>
                    <option value="canada">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName"
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    value={formik.values.lastName}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    value={formik.values.address}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite, etc(optional)"
                    className="form-control"
                    name="apartment"
                    onChange={formik.handleChange("apartment")}
                    onBlur={formik.handleBlur("apartment")}
                    value={formik.values.apartment}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.apartment && formik.errors.apartment}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                    value={formik.values.city}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="state"
                    className="form-control form-select"
                    id="countrySelect"
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                    value={formik.values.state}
                  >
                    <option value="" selected disabled>
                      {" "}
                      Select State
                    </option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="tamilnadu">Tamil Nadu</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="delhi">Delhi</option>
                    <option value="uttarpradesh">Kerala</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="form-control"
                    name="pin"
                    onChange={formik.handleChange("pin")}
                    onBlur={formik.handleBlur("pin")}
                    value={formik.values.pin}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.pin && formik.errors.pin}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" /> Return to cart
                    </Link>
                    <button className="button" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartProducts?.map((item, index) => {
                return (
                  <div
                    className="d-flex gap-10 mb-2 align-items-center"
                    key={index}
                  >
                    <div className="w-75 d-flex gap-10">
                      <div className="w-25 position-relative">
                        <span
                          style={{ top: "-10px", right: "2px" }}
                          className="badge bg-secondary test-white rounded-circle p-2 position-absolute"
                        >
                          {item?.quantity}
                        </span>
                        <img
                          className="img-fluid"
                          src={
                            item?.productId?.images[0]
                              ? item?.productId?.images[0]
                              : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
                          }
                          alt="product"
                        />
                      </div>
                      <div>
                        <h5 className="total-price">
                          {item?.productId?.title}
                        </h5>
                        <p className="total-price">{item?.productId?.price}</p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="total">₹{item?.price * item?.quantity}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">₹{subTotal}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">₹{shippingCost}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">₹{subTotal + shippingCost}</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;

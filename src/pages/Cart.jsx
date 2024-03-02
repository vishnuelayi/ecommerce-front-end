import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import watch from '../images/watch.jpg';
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneProductCart,
  getCart,
  updateQuantityCart,
} from "../features/products/productsSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const [productUpdateDetails, setProductUpdateDetails] = useState(null);
  const [subTotal, setSubTotal] = useState(null);

 

  useEffect(() => {
    if (
      productUpdateDetails &&
      productUpdateDetails.cartItemId &&
      productUpdateDetails.quantity
    ) {
      dispatch(
        updateQuantityCart({
          cartItemId: productUpdateDetails.cartItemId,
          quantity: productUpdateDetails.quantity,
        })
      );
    }
  }, [productUpdateDetails]);

  function removeFromCart(id) {
    dispatch(deleteOneProductCart(id));
    setTimeout(() => {
      dispatch(getCart());
    }, 2000);
  }

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
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product </h4>
              <h4 className="cart-col-2">Price </h4>
              <h4 className="cart-col-3">Quantity </h4>
              <h4 className="cart-col-4">Total </h4>
            </div>
            {cartProducts?.map((item, index) => {
              return (
                <div
                  className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <div className="cart-col-1 gap-15 d-flex align-items-center">
                    <div className="w-25">
                      <img
                        src={
                          item?.productId?.images
                            ? item?.productId?.images[0]
                            : "https://hyderabadangels.in/wp-content/uploads/2019/11/dummy-logo.png"
                        }
                        className="img-fluid"
                        alt="productimage"
                      />
                    </div>

                    <div className="w-75">
                      <p>{item?.productId?.title}</p>
                      <p>{item?.color?.title}</p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">₹{item.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                        className="form-control"
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        id=""
                        value={
                          productUpdateDetails?.quantity
                            ? productUpdateDetails?.quantity
                            : item?.quantity
                        }
                        onChange={(e) =>
                          setProductUpdateDetails({
                            cartItemId: item?._id,
                            quantity: e?.target?.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <AiFillDelete
                        className="text-danger"
                        onClick={() => {
                          return removeFromCart(item._id);
                        }}
                      />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">₹{item?.price * item?.quantity}</h5>
                  </div>
                </div>
              );
            })}

            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue Shopping
                </Link>
                {(subTotal !== 0 || subTotal !== null) && (
                  <div className="d-flex  flex-column align-items-end">
                    <h4>SubTotal: ₹{subTotal}</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className="button">
                      Checkout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;

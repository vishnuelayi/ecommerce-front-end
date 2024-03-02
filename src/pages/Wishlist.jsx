import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getwishlist } from "../features/auth/authSlice";
import { addToWhishList } from "../features/products/productsSlice";
const Wishlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getwishlist());
  }, []);


  const wishList = useSelector((state) => state.auth.wishlist);

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
          {
           wishList?.length === 0 && <div className="text-center">Wishlist is empty</div>
          }
            {wishList?.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="wishlist-card position-relative">
                    <img
                      src="images/cross.svg"
                      alt="cross"
                      className="position-absolute cross img-fluid"
                      
                    />
                    <div className="wishlist-card-image">
                      <img
                        src={item?.images[0]}
                        className="img-fluid w-100"
                        alt="watch"
                      />
                    </div>
                    <div className="py-3 px-3">
                      <h5 className="title">
                       {item?.title}
                      </h5>
                      <h6 className="price">₹{item?.price}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;

import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToWhishList } from "../features/products/productsSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  // console.log(grid)
  let location = useLocation();

  const dispatch = useDispatch();

  const addTtoWlist = (id) => {
    // console.log(id);
    dispatch(addToWhishList(id));
  };

  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <div
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link>
            <button className=" border-0 bg-transparent" onClick={(e) => addTtoWlist(data?._id)}> 
            <img src="images/wish.svg" alt="wishlist" />
            </button>
             
            </Link>
          </div>
          <div className="product-image">
            <img src={data.images && data?.images[0]} className="img-fluid" alt="product img" />
            <img src={data.images && data?.images[1]} className="img-fluid" alt="product img"  />
          
          </div>

          <div className="product-details">
            <h6 className="brand"> {data?.category.title}</h6>
            <h5 className="product-title">{data?.title}</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              {data?.description}
            </p>
            <p className="price">₹{data?.price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to={"/product/" + data?._id}>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

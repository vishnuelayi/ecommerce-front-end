import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  
  getProductsOnQuery,
} from "../features/products/productsSlice";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tagValue = queryParams.get("tag");
  const catValue = queryParams.get("category");

  useEffect(() => {
    dispatch(getProductsOnQuery({tag: tagValue, category: catValue,}));
  }, []);

  const productsState = useSelector((state) => state.products.products);
  const productsQuery = useSelector((state) => state.products.productsQuery.item)
  

  const [newBrand, setNewBrand] = useState([]);
  const [newCategory, setNewCategory] = useState([]);
  const [newTag, setNewTag] = useState([]);

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    let brandSet = new Set();
    let categorySet = new Set();
    let tagSet = new Set();

    for (let index = 0; index < productsState?.length; index++) {
      const element = productsState[index];
      brandSet.add(element?.brand?.title);
      categorySet.add(element?.category?.title);
      tagSet.add(element?.tag);
    }

    // Use spread operator to convert sets back to arrays
    setNewBrand([...brandSet]);
    setNewCategory([...categorySet]);
    setNewTag([...tagSet]);
  }, [productsState]);

  // console.log(newBrand);
  // console.log(newCategory);
  

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By categories</h3>
              <div>
                <ul className="ps-0">
                  {newCategory &&
                    newCategory?.map((item, index) => {
                      return (
                        <li key={index} onClick={(item) => setCategory(item)}>
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className=" mb-3">
              <div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {newTag &&
                    newTag?.map((item, index) => {
                      return (
                        <span
                          className="bagde bg-light text-secondary rounded-3 py-2 px-3"
                          key={index}
                          onClick={(item) => setTag(item)}
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {newBrand &&
                    newBrand?.map((item, index) => {
                      return (
                        <span
                          className="bagde bg-light text-secondary rounded-3 py-2 px-3"
                          key={index}
                          onClick={(item) => setBrand(item)}
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"DEFAULT"}
                    className="form-control form-select"
                    id=""
                  >
                    <option disabled value="DEFAULT"></option>
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">
                    {productsState.length} Products
                  </p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                {productsQuery?.map((item, index) => {
                  return <ProductCard data={item} grid={grid} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

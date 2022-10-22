import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "../../components/Pagination";
import Category from "../Category";
import "./product.css";
const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  // setState
  const [listData, setListData] = useState(); // danh sách sản phẩm
  const [sumProduct, setSumProduct] = useState(); //tổng số sản phẩm
  const [page, setPage] = useState(1);
  const limit = 12;
  const [category, setCategory] = useState();
  // console.log(limit);
  useEffect(() => {
    setIsLoading(true);
    try {
      axios({
        method: "get",
        url: "http://localhost:3004/product",
        params: {
          _page: page,
          _limit: limit,
          category: category,
        },
      }).then(function (response) {
        setListData(response.data);
        // console.log(response);
        setSumProduct(response.headers.get("X-Total-Count"));
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [page, category]);
  // console.log(sumProduct);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="most-popular">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>Most Popular</em> Right Now
                    </h4>
                  </div>
                  <div className="category-filter">
                    <Category setCategory={setCategory}/>
                  </div>
                  <div className="row">
                    {!isLoading &&
                      listData &&
                      listData.map((item, index) => {
                        // console.log(item);
                        return (
                          <div className="col-lg-3 col-sm-6" key={index}>
                            <div className="item">
                              <img
                                src={item.image}
                                alt=""
                                style={{ height: "250px" }}
                              />
                              <h4>
                                {item.category}
                                <br />
                                <span
                                  style={{ fontWeight: "600", color: "red" }}
                                >
                                  ${item.price}
                                </span>
                              </h4>
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>{" "}
                                  {item.rating.rate}
                                </li>
                                <li>
                                  <i className="fa fa-download"></i>{" "}
                                  {item.rating.count}
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    {isLoading && (
                      <Spinner animation="border" variant="light" />
                    )}
                    <div className="col-lg-12">
                      <div className="main-button">
                        <Pagination
                          sumProduct={sumProduct}
                          limit={limit}
                          setPage={setPage}
                          
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
// create Context: khai báo 1 context. 1 phạm vi
// Provider: Như 1 nhà phân phối state, bọc cả component cha
// consumer: Lấy giá trị
// Tạo bài lap hướng dẫn 3 vấn đề trên

import axios from "axios";
import { useEffect, useState } from "react";

const Category = ({setCategory}) => {
  const [listCategory, setListCategory] = useState();
  //call API
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:3004/category",
      }).then(function (res) {
        setListCategory(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  //setCategory
  const handleClick = (item) => {
    setCategory(item, 'item');
    console.log(item);
  }
  return (
    <ul>
      {listCategory &&
        listCategory.map((item, index) => {
        //   console.log(item);
          return (
            <li key={index}>
              <span onClick={()=> handleClick(item)}>{item}</span>
            </li>
          );
        })}
    </ul>
  );
};
export default Category;

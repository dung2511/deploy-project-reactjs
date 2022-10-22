import axios from "axios";
import { useEffect, useState } from "react";

const Mounted = () => {
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState();
  const [data, setData] = useState()

  useEffect(() => {
    console.log("re-render");
    document.title = title;
  }, []);

  const handleClick = (event) => {
    setTitle(event.target.value);
  };
  // console.log(title);
  useEffect(() => {
    axios(
      {
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
      },
      []
    ).then(function (response) {
     setData(response.data);
    });
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <button onClick={() => setStatus(!status)} type="">
              Toogle Event
            </button>
            {status === true && <Child />}
            {/* {console.log("false")} */}
            <input onChange={handleClick} type="" name="" />
            {
              data && data.map((item, index) =>{
                 return(
                  <div key={index}>
                    {<h1>{item.title}</h1>}
                  </div>
                 )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mounted;
export const Child = () => {
  return <h1>24</h1>;
};
/*
    - useEffect(): là 1 hook trong reactjs
        + Side Effect: khi 1 chương trình phần mềm có tác động dẫn đến dữ liệu bị thay đổi
        + Cú pháp: useEffect(callback, [dependency])
            1. useEffect(callback)
              - component re-render thì callback bên trong useEffect() sẽ được gọi lại
              - gọi callback sau khi element được thêm vào dom
            2. useEffect(callback, []) (dependency mảng rỗng)
            3. useEffect(callback, [dependency])
        + useEffect với call API
            */

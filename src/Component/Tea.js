import { useEffect, useState } from "react";
import "../Css/Tea.css";
import { NavLink, useNavigate } from "react-router-dom";
import FooterCompo from "./Footer";
import { addtoCart } from "../Redux/Slice";
import { useDispatch } from "react-redux";

function PearCompo() {
  const [data, setData] = useState([]);
  const Navi = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchapi() {
      const ffdata = await fetch("http://localhost:5050/api/getdata");
      const res = await ffdata.json();


      setData(res);
    }
    fetchapi();
  });
  return (
    <>
      <div className="tea_container">
        <img
          src="https://www.jiomart.com/images/category/34/tea-20220519.jpeg"
          alt="Not Found"
          className="topimage_tea"
        />
      </div>

      <div className="image_tea_container">
        {data
          .filter((item) => item.id >= 75 && item.id <= 77)
          .map((item, index) => {
            const {
                id = item.id,
                name = item.name,
                image = item.image,
                price = parseInt(item.price),
              } = item;
            return (
              <div>
                <div key={index} className="underdiv_tea">
                  <NavLink to={`/details/${item.id}`}>
                    <img
                      src={item.image}
                      alt="Not Found"
                      className="all_images_tea"
                    />
                  </NavLink>

                  <div className="headingproduct_tea">
                    <p>{item.heading}</p>
                  </div>
                  <span className="price_tea">₹:{item.price}.00</span>
                  <h3 className="title_tea">{item.name}</h3>
                  <NavLink to="/addcard">
                    {" "}
                    <button className="btnaddcard_tea"  onClick={() =>
                        dispatch(addtoCart({ id, price, image, name }))
                      }>add to cart</button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>

      <button
        onClick={() => Navi("/groceries")}
        style={{
          width: "20vw",
          height: "8vh",
          borderRadius: "20px",
          position: "relative",
          left: "40%",
          top: "5vh",
          background: "#99ccff",
        }}
      >
        Go Back
      </button>
      <FooterCompo />
    </>
  );
}
export default PearCompo;
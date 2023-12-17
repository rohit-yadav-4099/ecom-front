import { useEffect, useState } from "react";
import "../Css/Coffee.css";
import { NavLink, useNavigate } from "react-router-dom";
import { addtoCart } from "../Redux/Slice";
import { useDispatch } from "react-redux";
import FooterCompo from "./Footer";

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
      <div className="coffee_container">
        <img
          src="https://www.jiomart.com/images/category/94/coffee-20220519.jpeg"
          alt="Not Found"
          className="topimage_coffee"
        />
      </div>

      <div className="image_coffee_container">
        {data
          .filter((item) => item.id >= 79 && item.id <= 81)
          .map((item, index) => {
            const {
                id = item.id,
                name = item.name,
                image = item.image,
                price = parseInt(item.price),
              } = item;
            return (
              <div>
                <div key={index} className="underdiv_coffee">
                  <NavLink to={`/details/${item.id}`}>
                    <img
                      src={item.image}
                      alt="Not Found"
                      className="all_images_coffee"
                    />
                  </NavLink>

                  <div className="headingproduct">
                    <p>{item.heading.slice(0, 50)}</p>
                  </div>
                  <span className="price_coffee">₹:{item.price}.00</span>
                  <h3 className="title_coffee">{item.name}</h3>
                  <NavLink to={`/addcard/${item.id}`}>
                    {" "}
                    <button className="btnaddcard_coffee" onClick={() =>
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
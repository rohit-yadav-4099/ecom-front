import { useEffect, useState } from "react";
import "../Css/Pears.css";
import { addtoCart } from "../Redux/Slice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
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
      <div className="pear_container">
        <img
          src="https://www.jiomart.com/images/category/7470/apples-pears-20220802.jpeg"
          alt="Not Found"
          className="topimage_pear"
        />
      </div>

      <div className="image_pear_container">
        {data
          .filter((item) => item.id >= 72 && item.id <= 74)
          .map((item, index) => {
            const {
                id = item.id,
                name = item.name,
                image = item.image,
                price = parseInt(item.price),
              } = item;
            return (
              <div>
                <div key={index} className="underdiv_pear">
                  <NavLink to={`/details/${item.id}`}>
                    <img
                      src={item.image}
                      alt="Not Found"
                      className="all_images_pear"
                    />
                  </NavLink>

                  <div className="headingproduct_pear">
                    <p>{item.heading.slice(0, 0)}</p>
                  </div>
                  <span className="price_pear">₹:{item.price}.00</span>
                  <h3 className="title_pear">{item.name}</h3>
                  <NavLink to={`/addcard/${item.id}`}>
                    {" "}
                    <button className="btnaddcard_pear" onClick={() =>
                        dispatch(addtoCart({ id, price, image, name }))
                      }>add to cart</button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>

      <button
        onClick={() => Navi("/premium")}
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
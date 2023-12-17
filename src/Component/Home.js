import { useEffect, useState } from "react";
import "../Css/Home.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/Slice";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import FooterCompo from "./Footer";
// import "../Css/Groceries.css";

function HomeCompo() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchapi() {
      const ffdata = await fetch(
        "https://eccommorce-backend.onrender.com/api/getdata"
      );
      const res = await ffdata.json();
      setData(res);
      // console.log(res);
    }
    fetchapi();
  });
  return (
    <>
      <div className="home_container">
        {data
          .filter((item) => item.id === 88)
          .map((item, index) => {
            return (
              <>
                <div key={index} className="underdiv_two_home">
                  <Carousel
                    infiniteLoop={true}
                    useKeyboardArrows
                    autoPlay
                    interval={3000}
                    stopOnHover={false}
                    stopOnInteraction={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                  >
                    <div>
                      <img
                        className="topimage_home_two"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/CatPage/JUPITER/Phase3/Header/Header_1500x300_01.gif"
                        alt="Not found"
                      />
                    </div>
                    <div>
                      <img
                        className="topimage_home_two"
                        src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/misc/general/free/original/XtnfKRsEC-Reset_Desktop.jpg?dpr=1"
                        alt="Not Found"
                        width="100%"
                      />
                    </div>
                    <div>
                      <img
                        className="topimage_home_two"
                        src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/PCGrapgics/12_Steal_Deals_Sarees_to_love._SX3000_QL85_.jpg"
                        alt="Not Found"
                        width="100%"
                      />
                    </div>
                    <div>
                      <img
                        className="topimage_home_two"
                        src="https://m.media-amazon.com/images/G/31/img23/Beauty/Jupiter23/Headers/1pc._CB573639892_.jpg"
                        alt="Not Found"
                        width="100%"
                      />
                    </div>
                  </Carousel>
                </div>

                <div></div>
              </>
            );
          })}
      </div>

      <div className="image_home_container">
        {data
          .filter((item) => item.id % 4 === 0)
          .map((item, index) => {
            const {
              id = item.id,
              name = item.name,
              image = item.image,
              price = parseInt(item.price),
            } = item;
            return (
              <>
                <div key={index} className="underdiv_home">
                  <NavLink to={`/details/${item.id}`}>
                    <img
                      src={item.image}
                      alt="Not Found"
                      className="all_images_home"
                    />
                  </NavLink>

                  <div className="underdiv_home_two">
                    <span className="price_home">₹:{item.price}.00</span>
                    <NavLink to={`/addcard/${item.id}`}>
                      <button
                        className="btnaddcard_home"
                        onClick={() =>
                          dispatch(addtoCart({ id, price, image, name }))
                        }
                      >
                        add to cart
                      </button>
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
      </div>

      <div className="footermain_home">
        <div className="logosdtl_home">
          <img
            className="logo_home"
            src="http://4.bp.blogspot.com/-E9cQt2nvyTc/URusPT5VqnI/AAAAAAAAABw/wU8Q0YrG37M/s1600/facebook+logo+3.png"
            alt="Not Found"
          />
          <img
            className="logo_home"
            src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg"
            alt="Not Found"
          />
          <img
            className="logo_home"
            src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image"
            alt="Not Found"
          />
          <img
            className="logo_home"
            src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png"
            alt="Not Found"
          />
        </div>
        <div className="location_home">
          {" "}
          <img
            className="logoonedtl_home"
            src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180"
            alt="Not Found"
          />
        </div>{" "}
        <span className="locdtl_home">Gurgaon Haryana</span>
        <img
          className="logoonephonedtl_home"
          src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180"
          alt="Not Found"
        />
        <span className="phodtl_home">123467890</span>
        <img
          className="logoonemaildtl_home"
          src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg"
          alt="Not Found"
        />
        <span className="emaildtl_home">balambisht467@gmail.com</span>
        <div className="gotonavdtl_home">
          <p style={{ color: "white", fontSize: "1.1em" }}>
            Click On This Link
          </p>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/groceries" className="navlink">
            Groceries
          </NavLink>
          <NavLink to="/fashion" className="navlink">
            Fashion
          </NavLink>
          <NavLink to="/premium" className="navlink">
            Premium
          </NavLink>
          <NavLink to="/sport" className="navlink">
            Sport&Toy
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default HomeCompo;
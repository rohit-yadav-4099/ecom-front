import { NavLink } from "react-router-dom";
import "../Css/Footer.css";
const FooterCompo = () => {
  return (
    <>
      <div className="footermain">
        <div className="logosdtl">
          <img
            className="logo"
            src="http://4.bp.blogspot.com/-E9cQt2nvyTc/URusPT5VqnI/AAAAAAAAABw/wU8Q0YrG37M/s1600/facebook+logo+3.png"
            alt="Not Found"
          />
          <img
            className="logo"
            src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg"
            alt="Not Found"
          />
          <img
            className="logo"
            src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image"
            alt="Not Found"
          />
          <img
            className="logo"
            src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png"
            alt="Not Found"
          />
        </div>
        <div className="location">
          {" "}
          <img
            className="logoonedtl"
            src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180"
            alt="Not Found"
          />
        </div>{" "}
        <span className="locdtl">Gurgaon Haryana</span>
        <img
          className="logoonephonedtl"
          src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180"
          alt="Not Found"
        />
        <span className="phodtl">123467890</span>
        <img
          className="logoonemaildtl"
          src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg"
          alt="Not Found"
        />
        <span className="emaildtl">balambisht467@gmail.com</span>
        <div className="gotonavdtl">
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
};

export default FooterCompo;
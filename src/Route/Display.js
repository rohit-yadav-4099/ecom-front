import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import HomeCompo from "../Component/Home";
import GroceriesCompo from "../Component/Groceries";
import FashionCompo from "../Component/Fashion";
import PremiumCompo from "../Component/Premium";
import SportToyCompo from "../Component/SportToy";
import "../Css/Rou.css";
import TeaCompo from "../Component/Tea";
import CoffeCompo from "../Component/Coffee";
import MenCompo from "../Component/Men";
import WomenCompo from "../Component/Women";
import PearCompo from "../Component/pears";
import AppleCompo from "../Component/Apple";
import ToyCompo from "../Component/Toy";
import BabyToyCompo from "../Component/BabyToy";
// import AddCard from "../Component/AddToCard"
import DetailsCompo from "../Component/Details";
import { useState } from "react";
import LoginButton from "../LoginSignUp/Login";
import RegisterButton from "../LoginSignUp/Register";
import PrivateCompo from "../Component/Private";
import LogOut from "../LoginSignUp/Logout";
import SearchBar from "../Component/Search";
//
// import Cart from "../Redux/AddtoCart"
// import AddtoCart from "../Redux/AddtoCart"
import { useSelector } from "react-redux";
import Cart from "../Redux/AddtoCart";
// import Success from "../Redux/Sucess";
// import Cancel from "../Redux/Cancel";
// import SearchData from "../Component/SearchData";

function DisplayRoute() {
  // const auth=localStorage.getItem("name")
  const [count, setCount] = useState(false);

  // const auth=localStorage.getItem("token")
  const Navi = useNavigate();

  const auth = localStorage.getItem("token");
  const countItem = useSelector((state) => state.Cart.cart);
  <span>{countItem.length}</span>;

  const [isFashiondata, setIsFashionData] = useState(false);
  const [isPremiumData, setIsPremiumData] = useState(false);
  const [isGrocerydata, setIsGroceryData] = useState(false);
  const [isSportData, setIsSportData] = useState(false);

  const toggleFashionMenu = () => {
    setIsFashionData(!isFashiondata);
  };
  const togglePremiumMenu = () => {
    setIsPremiumData(!isPremiumData);
  };
  const toggleGroceryMenu = () => {
    setIsGroceryData(!isGrocerydata);
  };
  const toggleSportMenu = () => {
    setIsSportData(!isSportData);
  };

  const logoutfunc = () => {
    localStorage.clear();
    Navi("/register");
  };

  return (
    <>
      {/* <BrowserRouter> */}

      <div className="header_main">
        <img
          src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-store-icon-in-line-style-png-image_1736161.jpg"
          height="60"
          alt="Not Found"
          className="imageicon"
        />
        <span className="shop_heading">Shop Now</span>

        <div>
          {/* <SearchBar /> */}
          <NavLink to="/search" className="serch_icon">
            🔍
          </NavLink>
        </div>
        <span>
          <NavLink to="addcard/:id">
            {" "}
            <span style={{ fontSize: "1.5em" }}>🛒</span>
            <span style={{ color: "whitesmoke" }}>{countItem.length}</span>
          </NavLink>
        </span>

        {auth ? (
          <NavLink to="/login">
            <button onClick={logoutfunc} className="btnone lgtbtn">
              Logout
            </button>
          </NavLink>
        ) : (
          //  <NavLink  to="/register"  onClick={logoutfunc} >Logout</NavLink> :
          //
          <span>
            <NavLink to="/login">
              <button className="btnone loginbtn">login</button>
            </NavLink>
            <NavLink to="/register">
              <button className="btnone">register</button>
            </NavLink>
          </span>
        )}

        {/* <NavLink to="/login">Login</NavLink> */}

        {/* */}

        <div onClick={() => setCount(!count)} className="display">
          <i className={`fa-solid ${count ? "fa-close" : "fa-bars"}`}></i>
        </div>
      </div>

      <div className="routeparent">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <div onDoubleClick={toggleGroceryMenu} className="underdiv_all_nav">
            <NavLink to="/groceries" className="navlink">
              Groceries
            </NavLink>
          </div>
          {isGrocerydata && (
            <ul className="sub_groceries">
              <li>
                <NavLink to="/groceries/tea">Tea</NavLink>
              </li>
              <li>
                <NavLink to="/groceries/coffee">Coffee</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onDoubleClick={toggleFashionMenu} className="underdiv_all_nav">
            <NavLink to="/fashion" className="navlink">
              Fashion
            </NavLink>
          </div>
          {isFashiondata && (
            <ul className="sub_fashion">
              <li>
                <NavLink to="/fashion/men">men</NavLink>
              </li>
              <li>
                <NavLink to="/fashion/women">women</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onDoubleClick={togglePremiumMenu} className="underdiv_all_nav">
            <NavLink to="/premium" className="navlink">
              Premium
            </NavLink>
          </div>
          {isPremiumData && (
            <ul className="sub_premium">
              <li>
                <NavLink to="/premium/pears">pears</NavLink>
              </li>
              <li>
                <NavLink to="/premium/apple">Apple</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onDoubleClick={toggleSportMenu} className="underdiv_all_nav">
            <NavLink to="/sport" className="navlink">
              Sport&Toy
            </NavLink>
          </div>
          {isSportData && (
            <ul className="sub_sport">
              <li>
                <NavLink to="/sport/toy">Toy Figure</NavLink>
              </li>
              <li>
                <NavLink to="/sport/babytoy">Baby Toys</NavLink>
              </li>
            </ul>
          )}
        </li>
      </div>

      {/* *********************************************loginand register******************************* */}

      {/* <NavLink to="/" ><button className="btnone">Regiter</button></NavLink>
        <NavLink to="/login"><button className="btnone">Login</button></NavLink> */}
      {/*


{/* *****************************************************************? */}
      <div className={count ? "hambergerlinksShows" : "hambergerlinksHide"}>
        <ul className="navbar-listResponsive">
          <li className="listres">
            {auth ? (
              <NavLink
                onClick={() => {
                  setCount(!count);
                  logoutfunc();
                }}
                to="/register"
                className="navlinkRes"
                style={({ isActive }) => ({
                  color: isActive ? "aqua" : "Navy",
                })}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                onClick={() => setCount(!count)}
                to="/login"
                className="navlinkRes"
                style={({ isActive }) => ({
                  color: isActive ? "aqua" : "Navy",
                })}
              >
                Login
              </NavLink>
            )}
          </li>
          <li className="listresponsive">
            <NavLink
              onClick={() => setCount(!count)}
              to="/"
              className="navlinkResponsive"
            >
              Home
            </NavLink>
          </li>
          <li className="listresponsive">
            <NavLink
              onClick={() => setCount(!count)}
              to="/groceries"
              className="navlinkResponsive"
            >
              Groceries
            </NavLink>
          </li>
          <li className="listresponsive">
            <NavLink
              onClick={() => setCount(!count)}
              to="/fashion"
              className="navlinkResponsive"
            >
              Fashion
            </NavLink>
          </li>
          <li className="listresponsive">
            <NavLink
              onClick={() => setCount(!count)}
              to="/premium"
              className="navlinkResponsive"
            >
              premium
            </NavLink>
          </li>
          <li className="listresponsive">
            <NavLink
              onClick={() => setCount(!count)}
              to="/sport"
              className="navlinkResponsive"
            >
              sport
            </NavLink>
          </li>
        </ul>
      </div>

      {/* **************************************************************** */}

      <Routes>
        <Route path="/" element={<HomeCompo />}></Route>
        <Route element={<PrivateCompo />}>
          <Route path="/groceries" element={<GroceriesCompo />}>
            {/* {" "} */}
          </Route>
          <Route path="groceries/tea" element={<TeaCompo />}></Route>
          <Route path="groceries/coffee" element={<CoffeCompo />}></Route>
          <Route path="/fashion" element={<FashionCompo />}>
            {/* {" "} */}
          </Route>
          <Route path="fashion/men" element={<MenCompo />}></Route>
          <Route path="fashion/women" element={<WomenCompo />}></Route>
          <Route path="/premium" element={<PremiumCompo />}>
            {/* {" "} */}
          </Route>
          <Route path="premium/pears" element={<PearCompo />}></Route>
          <Route path="premium/apple" element={<AppleCompo />}></Route>
          <Route path="/sport" element={<SportToyCompo />}>
            {/* {" "} */}
          </Route>
          <Route path="sport/toy" element={<ToyCompo />}></Route>
          <Route path="sport/babytoy" element={<BabyToyCompo />}></Route>
          <Route path="/addcard/:id" element={<Cart />}></Route>
          <Route path="/details/:id" element={<DetailsCompo />}></Route>
          <Route path="/search" element={<SearchBar />}></Route>
          {/* <Route path="/success" element={<Success />}></Route>
          <Route path="/cancel" element={<Cancel />}></Route> */}
        </Route>

        <Route path="/login" element={<LoginButton />}></Route>
        <Route path="/register" element={<RegisterButton />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
      </Routes>

      {/* </BrowserRouter> */}
    </>
  );
}

export default DisplayRoute;

import { useEffect, useState } from "react"
import '../Css/Groceries.css'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtoCart } from "../Redux/Slice"

function GroceriesCompo(){
    const [data,setData]=useState([])
    const dispatch=useDispatch()
   

    useEffect (()=>{
      
            async function fetchapi (){
                const ffdata= await fetch ("https://eccommorce-backend.onrender.com/api/getdata")
                const res= await ffdata.json()
                console.log(res)
                setData(res)
           }
           fetchapi()
       
       
    })
    return(
<>


        <div className="groceries_container">
        {data.filter((item)=>item.id===1).map((item,index)=>{
           
         return(
             <div key={index} className="underdiv_two">
             <img src={item.images} alt="Not Found" className="groceriestop"/>
             </div>
         )
        })}
     </div>


        <div className="image_groceries_container">
          {data.filter((item)=>item.category==="groceries").map((item,index)=>{
             const {
                id = item.id,
                name=item.name,
                image = item.image,
                price= parseInt(item.price),
             
              }= item;
            return(
                <>
                <div key={index} className="underdiv_groceries">
                <NavLink to={`/details/${item.id}`}>        <img src={item.image} alt="Not Found"  className="all_images_groceries"/></NavLink>

                   <div className="underdiv_groceries_two">
                    <div className="headingproduct_groceries"><p >{item.heading.slice(0,40)}</p>
                    </div>

                    
                    <span className="price_groceries">₹:{item.price}.00</span>
                    <h3>{item.heading.slice(0,15)}</h3>
                    
                    <NavLink to={`/addcard/${item.id}`}>
                        <button onClick={()=>dispatch(addtoCart({id,price,image,name}))} className="btnaddcard"> add to card</button>
                    </NavLink>
                    </div>

                </div>

                </>
            )
          })}


        </div>

       
        <div className="footermain_groceries">

<div className="logosdtl_groceries">
    <img className="logo_groceries" src="https://sguru.org/wp-content/uploads/2018/02/facebook-logo-png-20.png" alt="Not Found" />
    <img className="logo_groceries" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found" />
    <img className="logo_groceries" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="Not Found" />
    <img className="logo_groceries" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found" />


    </div>
    <div className="location_groceries">  <img className="logoonedtl" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found" /></div> <span className="locdtl_groceries">Gurgaon Haryana</span>




    <img className="logoonephonedtl_groceries" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found" /><span className="phodtl_groceries">123467890</span>


    <img className="logoonemaildtl_groceries" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found" /><span className="emaildtl_groceries">balambisht467@gmail.com</span>


    <div className="gotonavdtl_groceries">
<p style={{color:'white', fontSize:'1.1em'}}>Click On This Link</p>
<NavLink to="/"  className="navlink" >Home</NavLink>
<NavLink to="/groceries"  className="navlink" >Groceries</NavLink>
<NavLink to="/fashion"  className="navlink"  >Fashion</NavLink>
<NavLink to="/premium" className="navlink" >Premium</NavLink>  
<NavLink to="/sport" className="navlink"  >Sport&Toy</NavLink> 



</div>
</div>
        </>
    )
}
export default GroceriesCompo
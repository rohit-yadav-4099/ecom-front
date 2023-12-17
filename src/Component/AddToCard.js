import { useState,useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";


function AddCard(){
   const [data,setData]=useState()

    const {id} = useParams();
    const newid = parseInt(id)

    return(
        <>
        <h1>Add to card</h1>


        
        {/* <div className="image_fashion_container">
          {data.filter((item)=>item.category==="fashion" && item.id===newid).map((item,index)=>{
            return(
                <>
                <div key={index} className="underdiv_fashion">
                <NavLink to={`/details/${item.id}`}><img src={item.image} alt="Not Found"  className="all_images_fashion"/></NavLink>
                    
                    {/* <div className="headingproduct"><p >{item.heading.slice(0,50)}</p>
                    </div> */}
                    {/* <span className="price_fashion">₹:{item.price}.00</span> */} 
                    {/* <h3 className="title_fashion">{item.name}</h3> */}
                    {/* <NavLink to="/addcard"><button className="btnaddcard_fashion">add to card</button></NavLink> */}

                {/* </div> */}

                {/* </> */}
            {/* )
          })} */}

        {/* </div> */}

        
        </>
    )
}

export default AddCard;
import React from 'react'
// import "./AddFooter.css"
function AddFooter()
{
    return(
        <div>
            <footer className='containerFooter'>
                <div className='rowFooter'>
                    <div className='div1Col'>
                        <h4>About Us</h4>
                        <br></br>
                        <p>"You want to potential to leads to be able to get in contact with you as easily as possible. for that reason,website footer will otfen contain  contact details like a business email,phone number,ao mailing address.r it might simply includea link thet bringsyou to contact from."</p>
                    </div>
                    <div className='div2Col'>
                        <h3 style={{borderBottom:"3px solid gray" ,textAlign:"center"}}>Navigation Links</h3>
                        <div className='div2Col_row'>
                       <a href='http://localhost:3000/'> <h4>Home ||</h4></a>
                        <a href='http://localhost:3000/Bollywood'><h4>Bollywood ||</h4></a>
                        <a href='http://localhost:3000/Hollywood'><h4>Hollywood ||</h4></a>
                        <a href='http://localhost:3000/Technology'><h4>Technology ||</h4></a>
                        <a href='http://localhost:3000/Food'><h4>Food ||</h4></a>
                        <a href='http://localhost:3000/Fitness'><h4>Fitness </h4></a>
                        </div>
                    </div>
                    <div className='div3Col'>
                        <h4 style={{textAlign:"center" ,borderBottom:"3px solid gray" ,paddingBottom:"3vh" }}>The <span style={{fontSize:"34px" ,color:'lightgray' ,backgroundColor:"black"}}>Srien</span></h4>
                        <h5>Contact Us: +912346785644</h5>
                        <h5>Email: teesha2201@gmail.com</h5>
                        <h5>Address:Indore,Madhya pradesh</h5>
                        <div className="FollowUs">For More Details Follow us :
                           
                            <img className='circleFollow' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs1LETqnEyuX9xvRmPjHK7ulEtLeXSpYLHQ&usqp=CAU" alt="Not Found"/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default AddFooter
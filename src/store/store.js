import React, {createContext, useState,useEffect } from "react";

export const Store =createContext();
const ContextStore=(props)=>{
const[data,setData]=useState([])



    useEffect(()=>{
        async function fatchdata(){
            const datafetch= await fetch('http://localhost:4040/api/blog')
            const res= await datafetch.json()
            setData(res)
            // console.log(res[2].image)
          


        }
        fatchdata()
    })

    return(
        <>
        <Store.Provider value={[data,setData]}>
         
         {props.children}


        </Store.Provider>
        </>
    )

 }

 export default ContextStore;
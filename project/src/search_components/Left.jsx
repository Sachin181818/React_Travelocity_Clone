import  React,{useState,useEffect} from "react";
import Budget from "./Budget";
import GuestRating from "./GuestRating";
import "./Hotel.css"

import PopularFilter from "./PopularFilter";
import StarRating from "./StarRating";



export const Left=()=> {
 

 

  // const HotData=async()=>{
  //   let promise =await fetch("http://localhost:3000/HotelData");
  //   let data = await promise.json();
  //   setData(data)
  // }


  // useEffect(()=>{
  //   HotData();
  // },[])



  // const handleStar=async(star)=>{
  //       let promise =await fetch("http://localhost:3000/Hoteldata");
  //       let data = await promise.json();
  //       setData(newData)
  //     }
    

  return (
    <>
   <div>
  
     <PopularFilter/>
     <StarRating/>
     <Budget/>
     <GuestRating/>


    </div>
    </>
    
  );
}
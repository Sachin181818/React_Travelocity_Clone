import React,{useState} from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import "./Hotel.css"
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';



const Right = () => {
  const hotels= useSelector((state)=>state.hotels)
    


  

   return(
       <>
    <div id="Hotels">
    {/* <h3>Star Rating</h3>
    <span id="star">
    <button id ="btn1"onClick={()=>handleStar(1)}><h3>1<StarRateIcon/></h3></button>
    <button id ="btn1"onClick={()=>handleStar(2)}><h3>2<StarRateIcon/></h3></button>
    <button id ="btn1"onClick={()=>handleStar(3)}><h3>3<StarRateIcon/></h3></button>
    <button id ="btn1"onClick={()=>handleStar(4)}><h3>4<StarRateIcon/></h3></button>
    <button id ="btn1"onClick={()=>handleStar(5)}><h3>5<StarRateIcon/></h3></button>
    </span> */}



       <div>
         <p>See how we pick our recommended properties</p>
         <select name="sort"  id="">
           <option value="recommended">Recommended</option>
           <option value="price">Price</option>
           <option value="rating">Guest Rating + Our picks</option>
           <option value="starrating">Star Rating</option>
          </select>
       </div>
    {hotels.map((el)=>{
      return (
        <React.Fragment key={nanoid()}>
        <div >
          <div><img src={el.url} alt=""/></div>
          <div>
            <h2>{el.Name}</h2>
            <div>{el.Location}</div>
            <div>Fully refundable </div>
            <div>Before Mon,May16</div>
            <div>Reserve now,Pay later</div>
            <span><b>{el.Rating}/5.0</b></span><span> Wonderfull </span><span>({el.Review} reviews)</span>
          </div>
          <div id="cost">
            <div>${el.Cost}</div>
          </div>
        </div>
        </React.Fragment>
      )
    })}
    </div>
    </>  
   )
}

export default Right
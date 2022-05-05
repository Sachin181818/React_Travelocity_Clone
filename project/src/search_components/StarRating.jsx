import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';


const StarRating = () => {
  return (
    <div>
      <h3>Star Rating</h3>
      <div id="star">
        <div id ="btn1"><h3>1</h3><StarRateIcon/></div>
        <div id ="btn1"><h3>2</h3><StarRateIcon/></div>
        <div id ="btn1"><h3>3</h3><StarRateIcon/></div>
        <div id ="btn1"><h3>4</h3><StarRateIcon/></div>
        <div id ="btn1"><h3>5</h3><StarRateIcon/></div>
      </div>

    </div>
  )
}

export default StarRating